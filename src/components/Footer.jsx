import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { CONFIG } from '../config';
import { useDialog } from '../context/DialogContext';

export default function Footer({ onNavigate }) {
    const location = useLocation();
    const [visits, setVisits] = useState("...");
    const [showTopBtn, setShowTopBtn] = useState(false);
    const isDemonInfoPage = location.pathname.includes('/demoninfo');
    const { showDialog } = useDialog();
    const memeAudioRef = useRef(null);
    const isFetchingRef = useRef(false);
    useEffect(() => {
        memeAudioRef.current = new Audio("https://feeds.soundcloud.com/stream/1602217236-corona-689894639-meme.mp3");
        memeAudioRef.current.load();
    }, []);
    // --- Jump to top listener ---
    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- Visitor Logic ---
    useEffect(() => {
        const loadVisits = async () => {
            try {
                const res = await fetch(`${CONFIG.API_BASE_URL}/api/visits`);
                const data = await res.json();
                setVisits(data.visits);
            } catch (err) {
                console.error("Failed to load visits:", err);
            }
        };
        if (!isDemonInfoPage) loadVisits();
    }, [isDemonInfoPage]);

    const handleSupportClick = async () => {
        if (isFetchingRef.current || localStorage.getItem("supportClicked")) return;
        if (!isFetchingRef.current && localStorage.getItem("supportClicked")) {
            showDialog("You have already clicked!", { showMeme: false});
            return;
        }
        isFetchingRef.current = true;
        try {
            const res = await fetch(`${CONFIG.API_BASE_URL}/api/visits`, { method: "POST" });
            const data = await res.json();
            if (!res.ok) {
                localStorage.setItem("supportClicked", "true"); 
                showDialog(data.error, { showMeme: false }); 
                return;
            }
            setVisits(data.visits);
            localStorage.setItem("supportClicked", "true");     
            if (memeAudioRef.current) {
                memeAudioRef.current.currentTime = 0;
                memeAudioRef.current.play().catch(e => console.error("Audio failed to play:", e));
            }            
            showDialog("Thank you for your support! ❤️", { showMeme: true });
        } catch (err) {
            console.error("Failed to update visits:", err);
        } finally {
            isFetchingRef.current = false;
        }
    };
    const handleLinkClick = (e, path) => {
        e.preventDefault();
        onNavigate(path);
    };

    return (
        <>
            {/* --- Jump to top button --- */}
            <button 
                id="jump-to-top" 
                onClick={scrollToTop}
                className={`cursor-pointer group fixed bg-(--buttonColor) w-8 h-8 top-[75vh] md:w-12 md:h-12 md:top-[85vh] right-[2.5vw] z-40 ring-2 ring-(--textColor) shadow-[0_0_0.5rem_0.2rem_var(--shadowColor)] transition-all duration-1000 ease-in-out hover:bg-(--hoverColor) hover:ring-(--shadowColor) ${showTopBtn ? 'block' : 'hidden'}`} 
                title="jump-to-top"
            >
                <span className="w-0 h-0 inline-block border-transparent border-[0.35rem] md:border-[0.4375rem] border-b-(--textColor) transition-all duration-1000 ease-in-out group-hover:border-b-(--shadowColor) translate-y-[-25%]"></span>
            </button>
            {/* --- Main Footer Content --- */}
            <div className="w-full mt-auto flex flex-col items-center">
                {/* Visitor count */}
                {!isDemonInfoPage && (
                    <div id="visitor-section" className="w-full flex flex-col items-center">
                        <p className="text-2xl font-bold text-center text-(--textColor) mt-30">
                            You can tap this icon to show that you've visited the site. That will certainly make my day!
                        </p>
                        <div className="flex justify-center mt-20">
                            <img 
                                className="support-button w-20 h-20 animate-bounce cursor-pointer" 
                                src="/Photos/loadIcon.png" 
                                alt="support_button" 
                                onClick={handleSupportClick}
                            />
                        </div>
                        <p className="text-2xl font-bold text-center text-(--textColor) mt-5">
                            Visitor count: <span id="counter">{visits}</span>
                        </p>
                    </div> 
                )}

                {/* Footer Bottom Block */}
                <footer className="footer bg-linear-to-b from-(--buttonColor) to-(--bgColor) text-(--textColor) text-center text-xl mt-32 pt-10 pb-4 w-full">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-extrabold tracking-wider drop-shadow-md">Hanabi Ranking</h3>
                            <p className="text-lg font-medium italic opacity-80 leading-relaxed max-w-sm mx-auto md:mx-0">
                                A place where all my interests come together.
                            </p>
                        </div>
                        <div className="space-y-4 flex flex-col items-center md:items-start md:pl-10">
                            <h4 className="text-xl font-bold uppercase tracking-widest opacity-90 border-b-2 border-(--shadowColor) pb-1 inline-block">Links</h4>
                            <div className="flex flex-col items-center md:items-start gap-3 mt-4 text-lg font-semibold">
                                <a href="/" onClick={(e) => handleLinkClick(e, '/')} className={`footer-link ${location.pathname === '/' ? 'active pointer-events-none' : ''}`}>Home</a>
                                <a href="/demonlist" onClick={(e) => handleLinkClick(e, '/demonlist')} className={`footer-link ${location.pathname === '/demonlist' || location.pathname.includes('/demoninfo') ? 'active pointer-events-none' : ''}`}>Demonlist</a>
                                <a href="/waifu" onClick={(e) => handleLinkClick(e, '/waifu')} className={`footer-link ${location.pathname === '/waifu' ? 'active pointer-events-none' : ''}`}>Waifu</a>
                                <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className={`footer-link ${location.pathname === '/about' ? 'active pointer-events-none' : ''}`}>About</a>  
                            </div>
                        </div>
                        <div className="space-y-4 flex flex-col items-center md:items-start">
                            <h4 className="text-xl font-bold uppercase tracking-widest opacity-90 border-b-2 border-(--shadowColor) pb-1 inline-block">Connect With Me</h4>
                            <div className="socialIcon flex flex-wrap justify-center md:justify-start gap-5 mt-4">
                                <a className="cursor-pointer group" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100013302840565&locale=vi_VN" aria-label="Facebook">
                                    <img src="/Photos/facebook.png" alt="Facebook" className="w-10 h-10 drop-shadow-lg group-hover:scale-125 transition-transform duration-300" />
                                </a>
                                <a className="cursor-pointer group" target="_blank" rel="noopener noreferrer" href="https://youtube.com/@Hanabi1801?si=aEir7zWwh9tpcmwZ" aria-label="YouTube">
                                    <img src="/Photos/youtube.png" alt="YouTube" className="w-10 h-10 drop-shadow-lg group-hover:scale-125 transition-transform duration-300" />
                                </a>
                                <a className="cursor-pointer group" target="_blank" rel="noopener noreferrer" href="http://discord.com/users/785306828661456906" aria-label="Discord">
                                    <img src="/Photos/discord.png" alt="Discord" className="w-10 h-10 drop-shadow-lg group-hover:scale-125 transition-transform duration-300" />
                                </a>
                                <a className="cursor-pointer group" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/l___hanabi___l/" aria-label="Instagram">
                                    <img src="/Photos/instagram.png" alt="Instagram" className="w-10 h-10 drop-shadow-lg group-hover:scale-125 transition-transform duration-300" />
                                </a>            
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 pt-6 border-t-2 border-(--shadowColor)/20 flex justify-center items-center text-lg font-medium opacity-80">
                        <h4>Copyright &#169; 2023 - {new Date().getFullYear()} __Hanabi__ </h4>
                    </div>
                </footer>
            </div>
        </>
    );
}