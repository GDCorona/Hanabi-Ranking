import { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { waifuList, waifu_honorable } from '../data/waifudata';
import Comments from '../components/Comments';
import './waifu.css';

const sortKeys = ['personality', 'appearance', 'voice'];
const sortLabels = ['Personality', 'Appearance', 'Voice'];

// ---  Waifu Card ---
const WaifuCard = ({ waifu, index, isHonorable, sortType, activeWaifu, onToggle, avtIndex, onAvtClick }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const directionClass = index % 2 === 0 ? 'waifu-left' : 'waifu-right';
    const moveClass = isVisible ? (index % 2 === 0 ? 'leftMove' : 'rightMove') : '';
    const isChecked = activeWaifu === waifu.name;
    const currentAvt = isHonorable ? waifu.avt : waifu.avt[avtIndex || 0];
    const infoText = isHonorable ? waifu.info : waifu.info[sortType];
    // Slide-in animations
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0 });
        
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);
    // Preload waifu avatars, bgs and audios
    const handleMouseEnter = () => {
        if (!isHonorable) {
            if(waifu.avt) {
                waifu.avt.forEach(avtString => {
                    const rawUrl = avtString.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
                    const preloader = new Image();
                    preloader.src = rawUrl;
                });
            }
            if (waifu.bg) {
                const rawBgUrl = waifu.bg.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
                const bgPreloader = new Image();
                bgPreloader.src = rawBgUrl;
            }
            if (waifu.audio) {
                const audioPreloader = new Audio();
                audioPreloader.src = waifu.audio;
                audioPreloader.load();
            }
        }
    };
    // Change waifu avatar
    const handleAvtClick = () => {
        if (isHonorable) {
            alert('nah no image available :<');
            return;
        }
        setIsSpinning(true);
        setTimeout(() => {
            onAvtClick(waifu.name);
        }, 800);
        setTimeout(() => setIsSpinning(false), 1500);
    };
    return (
        <li ref={cardRef} onMouseEnter={handleMouseEnter} className={`${directionClass} ${moveClass}  group relative flex flex-col md:flex-row w-[90%] max-w-5xl bg-(--bgColor) rounded-3xl shadow-xl border-2 border-(--shadowColor)/40 overflow-hidden mb-20 mx-auto transition-all duration-500 hover:shadow-[0_0_15px_var(--shadowColor)]`}>
            {/* Rank Badge */}
            {!isHonorable && (
                <div className="absolute top-0 left-0 bg-(--buttonColor) text-(--textColor) font-black text-base sm:text-2xl px-5 py-2 rounded-br-2xl z-20 shadow-md border-r border-b border-(--shadowColor)/40">
                    #{index + 1}
                </div>
            )}
            {/* Left Section (Avt) */}
            <div className="relative w-full md:w-2/5 p-8 flex items-center justify-center bg-linear-to-br from-(--buttonColor)/40 to-transparent">
                <button
                    onClick={handleAvtClick}
                    className={`w-30 h-30 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-[0.35rem] border-(--textColor) shadow-[0_0_25px_var(--shadowColor)] bg-cover bg-center cursor-pointer shrink-0 transition-transform duration-500 hover:scale-105 ${isSpinning ? 'changeavt' : ''}`}
                    style={{ backgroundImage: currentAvt }}
                />
            </div>
            {/* Right Section (Info) */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                {/* Text */}
                <div>
                    <h3 className="title-font text-center md:text-left text-2xl sm:text-4xl md:text-5xl font-extrabold text-(--textColor) mb-5 drop-shadow-md tracking-wide">
                        {waifu.name}
                    </h3>
                    <h4 className="title-font w-fit mx-auto md:mx-0 bg-(--buttonColor) text-xs sm:text-lg italic text-(--textColor) font-semibold px-5 py-1.5 rounded-full border border-(--textColor)/20 mb-6 shadow-sm">
                        {waifu.anime}
                    </h4>
                    <p className="text-base sm:text-xl text-(--textColor) leading-relaxed opacity-90 font-medium">
                        {infoText}
                    </p>
                </div>
                {/* Actions */}
                <div className="mt-20 flex flex-row justify-between items-end">
                    <a href={waifu.link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-3 font-bold text-base sm:text-2xl text-(--textColor) transition-colors cursor-pointer border-b-2 border-(--textColor) pb-1">
                        More info <span className="group-hover/link:translate-x-3 transition-transform">→</span>
                    </a>                    
                    <label className="relative inline-block w-22 h-9 sm:w-27 sm:h-11 cursor-pointer shrink-0">
                        <input
                            type="checkbox"
                            className="peer sr-only"
                            checked={isChecked}
                            onChange={(e) => onToggle(waifu, isHonorable, e.target.checked)}
                        />
                        <span className="absolute inset-0 bg-(--buttonColor) rounded-full border-3 border-(--buttonColor) peer-checked:bg-(--switchColor) peer-checked:shadow-[0_0_20px_var(--switchColor)] transition-colors duration-300"></span>
                        <span
                            className="absolute left-0 w-9 h-9 sm:w-11 sm:h-11 bg-cover bg-center rounded-full border-3 border-(--buttonColor) z-10 shadow-md transition-transform duration-500 peer-checked:translate-x-13 sm:peer-checked:translate-x-16 peer-checked:rotate-360"
                            style={{ backgroundImage: currentAvt }}
                        ></span>
                    </label>
                </div>
            </div>
        </li>
    );
};

// --- Main Page ---
export default function Waifu() {
    const [sortType, setSortType] = useState(() => Number(localStorage.getItem('waifu-sort')) || 0);
    const [activeWaifu, setActiveWaifu] = useState(null);
    const [activeBg, setActiveBg] = useState('none');
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef(new Audio());
    // Dictionary tracking avatars: { "WaifuName": 1, "AnotherWaifu": 0 }
    const [avtStates, setAvtStates] = useState(() => {
        const saved = localStorage.getItem('waifu-avts');
        return saved ? JSON.parse(saved) : {};
    });
    const sortedWaifus = useMemo(() => {
        return [...waifuList].sort((a, b) => a[sortKeys[sortType]] - b[sortKeys[sortType]]);
    }, [sortType]);
    // Toggle Switch
    const handleToggle = (waifu, isHonorable, isChecked) => {
        if (isChecked) {
            setActiveWaifu(waifu.name);
            if (!isHonorable && waifu.audio) {
                audioRef.current.src = waifu.audio;
                audioRef.current.play();
            }
            setTimeout(() => setActiveBg(waifu.bg), 300);
        } else {
            setActiveWaifu(null);
            audioRef.current.pause();
            setTimeout(() => setActiveBg('none'), 300);
        }
    };
    // Avatar Clicking
    const handleAvtClick = (name) => {
        setAvtStates(prev => {
            const current = prev[name] || 0;
            const next = (current + 1) % 4;
            const newStates = { ...prev, [name]: next };
            localStorage.setItem('waifu-avts', JSON.stringify(newStates));
            return newStates;
        });
    };
    useEffect(() => {
        return () => {
            audioRef.current.pause();
        };
    }, []);

    // -- Sort Dropdown ---
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(0); 
    const dropdownRef = useRef(null);
    // Dropdown cascading effect
    useEffect(() => {
        if (isDropdownOpen) {
            setVisibleCount(0);
            const timer = setInterval(() => {
                setVisibleCount(prev => {
                    if (prev >= sortLabels.length) {
                        clearInterval(timer);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 50);
        } else {
            setVisibleCount(0); // Instantly clear when closed
        }
    }, [isDropdownOpen]);
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // Select sort type
    const handleSortSelect = (index) => {
        setIsDropdownOpen(false);
        setIsLoading(true);
        setTimeout(() => {
            setSortType(index);
            localStorage.setItem('waifu-sort', index);
            setIsLoading(false);
        }, 1000);
    };
    return (
        <main className="relative min-h-screen">
            {/* Custom Background */}
            {createPortal(
                <div 
                    className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-500 -z-1 pointer-events-none"
                    style={{ backgroundImage: activeBg }}
                />,
                document.body
            )}
            {/* Loading Overlay */}
            <div className={`fixed inset-0 bg-(--textColor)/40 items-center justify-center z-999 ${isLoading ? 'flex' : 'hidden'}`}>
                <div className="relative w-27 h-27">
                    <div className="absolute inset-0 border-4 border-t-transparent border-(--bgColor) rounded-full animate-spin"></div>
                    <img src="/Photos/loadIcon.png" alt="icon" className="absolute inset-0 m-auto w-13 h-13 animate-spin contrast-200" />
                </div>
            </div>
            {/* Title Section */}
            <div id="title" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-25 bg-cover bg-center bg-no-repeat">
                <img src="/Waifu/waifuBG.jpg" alt="titleBG" className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-40 contrast-100 -z-1" />
                <h1 className="relative text-center font-extrabold text-5xl md:text-8xl text-(--textColor) mb-10 drop-shadow-xl z-1">
                    <span className="title-font text-neon-gradient">MY TOP 30 WAIFUS</span>
                </h1>
            </div>
            {/* Custom Dropdown */}
            <div className="flex flex-col items-center mt-10 mb-16 z-30 relative">
                <h5 className="text-xl font-bold text-(--textColor) mb-4 uppercase tracking-widest opacity-80">Ranked by</h5>                
                {/* Custom Select Box */}
                <div className="relative w-64" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between bg-(--buttonColor)/80 backdrop-blur-md border-2 border-(--shadowColor) shadow-lg rounded-xl py-4 px-6 text-(--textColor) text-2xl font-extrabold outline-none cursor-pointer"
                    >
                        <span className="w-full text-center">{sortLabels[sortType]}</span>
                        <div className={`w-3 h-3 border-b-2 border-r-2 border-(--textColor) transform rotate-45 ${isDropdownOpen ? 'rotate-arrow-up' : 'rotate-arrow-down'}`}></div>
                    </button>
                    {/* Dropdown Options */}
                    {isDropdownOpen && (
                        <ul className="absolute top-[110%] left-0 w-full bg-(--buttonColor) border-2 border-(--shadowColor) rounded-xl shadow-2xl overflow-hidden z-50 animate-[fadeInDown_0.3s_ease]">
                            {sortLabels.slice(0, visibleCount).map((label, i) => (
                                <li 
                                    key={label}
                                    onClick={() => handleSortSelect(i)}
                                    className="open-option opacity-0 p-4 text-center text-xl font-bold text-(--textColor) transition-colors duration-300 hover:bg-(--hoverColor) cursor-pointer"
                                    style={{ animationDelay: `${i * 50}ms` }}
                                >
                                    {label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            {/* Main List */}
            <ul className="px-4 w-full">
                {sortedWaifus.map((waifu, i) => (
                    <WaifuCard 
                        key={waifu.name} 
                        waifu={waifu} 
                        index={i} 
                        sortType={sortType} 
                        activeWaifu={activeWaifu}
                        onToggle={handleToggle}
                        avtIndex={avtStates[waifu.name]}
                        onAvtClick={handleAvtClick}
                    />
                ))}
            </ul>
            {/* Honorable Mentions */}
            <div className="max-w-6xl mx-auto my-24 px-10">
                <hr className="border-t-4 border-(--shadowColor)/50 rounded-full mb-10" />
                <h1 className="text-center text-5xl md:text-6xl font-extrabold text-(--textColor) drop-shadow-md tracking-wider mb-16">Honorable mention</h1>
            </div>
            <ul className="px-4 w-full">
                {waifu_honorable.map((waifu, i) => (
                    <WaifuCard 
                        key={waifu.name} 
                        waifu={waifu} 
                        index={i} 
                        isHonorable={true}
                        activeWaifu={activeWaifu}
                        onToggle={handleToggle}
                        onAvtClick={handleAvtClick}
                    />
                ))}
            </ul>
            {/* Comment Section */}
            <Comments pageName="waifu" />
        </main>
    );
}