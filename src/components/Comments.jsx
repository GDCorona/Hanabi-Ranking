import { useState, useEffect } from 'react';
import { CONFIG } from '../config';
import { useDialog } from '../context/DialogContext';

export default function Comments({ pageName }) {
    const { showDialog } = useDialog();
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', text: '' });
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState('');
    const [emailError, setEmailError] = useState('');

    const loadComments = async () => {
        try {
            const res = await fetch(`${CONFIG.API_BASE_URL}/api/comments?page=${pageName}`);
            const data = await res.json();
            setComments(data);
        } catch (err) {
            console.error("Failed to load comments:", err);
        }
    };
    // Auto-update "time ago" timestamps
    useEffect(() => {
        loadComments();
        const interval = setInterval(() => setComments(prev => [...prev]), 60000);
        return () => clearInterval(interval);
    }, [pageName]);
    const timeAgo = (timestamp) => {
        const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000); // difference in miliseconds -> seconds
        if (seconds < 60) return "just now";
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        const days = Math.floor(hours / 24);
        if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
        const weeks = Math.floor(days / 7);
        if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
        const months = Math.floor(days / 30);
        if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
        const years = Math.floor(days / 365);
        return `${years} year${years > 1 ? "s" : ""} ago`;
    };
    const getFileHash = async (file) => {
        if (!file) return null;
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setAvatarFile(file);
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError("");
        const { name, email, text } = formData;
        // Check if name taken
        const checkUrl = await fetch(`${CONFIG.API_BASE_URL}/api/users/check-name?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
        const { taken } = await checkUrl.json();
        if (taken) return showDialog("This name is already in use by another user. Please choose a different name.");
        // Check for modifications to existing user
        const userRes = await fetch(`${CONFIG.API_BASE_URL}/api/users/${encodeURIComponent(email)}`);
        if (userRes.ok) {
            const existingUser = await userRes.json();
            if (avatarFile && avatarFile.size > 2 * 1024 * 1024) return showDialog("File too large. Max size is 2MB.");
            const changes = [];
            if (name !== existingUser.name) changes.push("name");
            if (avatarFile) {
                const currentHash = await getFileHash(avatarFile);
                if (currentHash !== existingUser.avatarHash) changes.push("avatar");
            }
            if (changes.length > 0) {
                const proceed = await showDialog(`This will change your ${changes.join(" and ")} on ALL your previous comments. Continue?`, { confirm: true });
                if (!proceed) return;
            }
        }
        // Post Comment
        const submitData = new FormData();
        submitData.append("name", name);
        submitData.append("email", email);
        submitData.append("text", text);
        submitData.append("page", pageName);
        if (avatarFile) submitData.append("avatar", avatarFile);
        const res = await fetch(`${CONFIG.API_BASE_URL}/api/comments`, { method: "POST", body: submitData });
        if (res.ok) {
            loadComments();
            setFormData({ name: '', email: '', text: '' });
            setAvatarFile(null);
            setAvatarPreview('');
        } else {
            const err = await res.json();
            if (err.error?.toLowerCase().includes("email")) setEmailError(err.error);
            else showDialog(err.error || "Failed to post comment");
        }
    };
    const handleEdit = async (comment) => {
        const newText = await showDialog("Edit your comment:", { 
            confirm: true, 
            input: true, 
            defaultValue: comment.text, 
            yesText: "Save"
        });
        if (newText) {
            const res = await fetch(`${CONFIG.API_BASE_URL}/api/comments/${comment._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: newText })
            });
            if (res.ok) loadComments();
        }
    };
    const handleDelete = async (id) => {
        const proceed = await showDialog("Are you sure you want to delete this comment?", { confirm: true });
        if (proceed) {
            const res = await fetch(`${CONFIG.API_BASE_URL}/api/comments/${id}`, { method: "DELETE" });
            if (res.ok) loadComments();
        }
    };
    // View more comments
    const [visibleCount, setVisibleCount] = useState(10);
    const handleViewMore = () => {
        setVisibleCount(prev => prev + 10);
    };

    return (
        <div id="comment-section" className="w-[90%] max-w-5xl mx-auto mt-32 mb-20 p-10 rounded-3xl bg-(--buttonColor)/80 border border-(--shadowColor)/40 shadow-2xl">
            <div className="mb-15">
                <h2 className="text-2xl md:text-3xl text-center font-extrabold text-(--textColor) mb-10 tracking-wide">Comment here if you have any opinion about this list or just the website in general</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Avatar upload */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-(--bgColor) rounded-2xl border border-(--shadowColor)/20 shadow-inner">
                        <label className="flex items-center justify-center w-24 h-24 rounded-full bg-(--bgColor) border-4 border-(--shadowColor)/60 hover:border-(--shadowColor) shadow-lg transition-all duration-300 group overflow-hidden cursor-pointer">
                            {avatarPreview ? (
                                <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-(--textColor) font-bold text-sm group-hover:scale-110 transition-transform">Upload</span>
                            )}
                            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                        </label>
                        <span className="text-lg font-semibold text-(--textColor) text-center sm:text-left opacity-90 leading-relaxed">You can upload your custom avatar here</span>
                    </div>
                    {/* Info */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                            className="w-full md:w-1/2 p-4 border border-(--shadowColor)/30 rounded-xl bg-(--bgColor) text-(--textColor) placeholder-(--textColor)/50 focus:outline-none focus:ring-2 focus:ring-(--shadowColor) shadow-inner font-medium" />
                        <div className="relative w-full md:w-1/2">
                            {emailError && <div className="absolute -top-6 left-2 text-red-400 text-sm font-bold">{emailError}</div>}
                            <input type="email" placeholder="Your Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                                className="w-full p-4 border border-(--shadowColor)/30 rounded-xl bg-(--bgColor) text-(--textColor) placeholder-(--textColor)/50 focus:outline-none focus:ring-2 focus:ring-(--shadowColor) shadow-inner font-medium" />
                        </div>
                    </div>
                    {/* Comment text */}
                    <textarea rows="4" placeholder="Write your comment..." required value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})}
                        className="w-full resize-y p-4 border border-(--shadowColor)/30 rounded-xl bg-(--bgColor) text-(--textColor) placeholder-(--textColor)/50 focus:outline-none focus:ring-2 focus:ring-(--shadowColor) shadow-inner font-medium">  
                    </textarea>
                    {/* Submit button */}
                    <div className="flex justify-end pt-2">
                        <button type="submit" className="px-8 py-3 bg-(--shadowColor) text-(--bgColor) font-extrabold text-lg tracking-wider rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_var(--shadowColor)] cursor-pointer">
                            Post Comment
                        </button>
                    </div>
                </form>
            </div>
            {/* Comment count */}
            <div className="text-(--textColor) font-bold text-lg mb-10">
                {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
            </div>
            {/* Comments List */}
            <div className="space-y-8">
                {comments.slice(0, visibleCount).map(c => (
                    <div key={c._id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                        <img src={c.avatar || "/Photos/defaultAvt.png"} onError={(e) => e.target.src="/Photos/defaultAvt.png"} alt="Avatar"
                            className="w-16 h-16 rounded-full object-cover border-2 border-(--shadowColor)/50 shadow-md mx-auto sm:mx-0" />
                        
                        <div className="flex-1 min-w-0 bg-(--bgColor) p-6 rounded-2xl shadow-md border border-(--shadowColor)/20 transition-all duration-300 group-hover:shadow-lg group-hover:border-(--shadowColor)/50"> 
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 mb-3">
                                <span className="font-extrabold text-lg text-(--textColor) truncate w-full text-center sm:text-left">{c.name || "unknown user"}</span>
                                <span className="text-sm font-medium text-(--textColor)/60 shrink-0">{timeAgo(c.timestamp)}</span>
                            </div>  
                            <p className="text-(--textColor) text-base leading-relaxed whitespace-pre-wrap wrap-break-word text-center sm:text-left opacity-90">{c.text}</p>
                            
                            <div className="mt-4 flex justify-center sm:justify-start gap-5">
                                <button onClick={() => handleEdit(c)} className="text-blue-400 hover:text-blue-300 font-bold text-sm tracking-wide transition-colors cursor-pointer">Edit</button>
                                <button onClick={() => handleDelete(c._id)} className="text-red-500 hover:text-red-400 font-bold text-sm tracking-wide transition-colors cursor-pointer">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* View More Button */}
            {visibleCount < comments.length && (
                <div className="flex justify-center mt-12">
                    <button 
                        onClick={handleViewMore}
                        className="px-6 py-2 border-2 border-(--shadowColor) text-(--textColor) font-bold rounded-full transition-all duration-300 hover:bg-(--shadowColor) hover:text-(--bgColor) cursor-pointer"
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
}