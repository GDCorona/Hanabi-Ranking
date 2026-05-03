import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar({ onNavigate }) {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [desktopOpen, setDesktopOpen] = useState(true);
    const [theme, setTheme] = useState('Light');
    const [isAnimating, setIsAnimating] = useState(false);
    const isFirstRender = useRef(true);
    // --- Theme Logic ---
    const themes = ["Light", "Dark", "Sakura"];
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "Light";
        setTheme(savedTheme);
        document.body.className = savedTheme;
    }, []);

    const toggleTheme = () => {
        const currentIndex = themes.indexOf(theme);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        setTheme(nextTheme);
        document.body.className = nextTheme;
        localStorage.setItem("theme", nextTheme);
    };
    // --- Window Resize Logic ---
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // If resizing down to mobile, force the desktop background open 
                // so the hamburger menu has a background to sit on!
                setDesktopOpen((prev) => {
                    if (!prev) {
                        isFirstRender.current = false;
                        return true;
                    }
                    return prev;
                });
            } else {
                // If resizing up to desktop, automatically close the mobile dropdown
                setMobileOpen((prev) => {
                    if (prev) return false;
                    return prev;
                });
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // --- Navigation Helper ---
    const handleLinkClick = (e, path) => {
        e.preventDefault();
        setMobileOpen(false);
        onNavigate(path);
    };
    const toggleDesktopNav = () => {
        if (window.innerWidth >= 768 && !isAnimating) {
            setIsAnimating(true);
            isFirstRender.current = false;
            setDesktopOpen(!desktopOpen);
            setTimeout(() => setIsAnimating(false), 1000);
        }
    };
    const toggleMobileNav = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setMobileOpen(!mobileOpen);
            setTimeout(() => setIsAnimating(false), 800);
        }
    };
    // 3. THE CLASS CALCULATOR: We let your index.css keyframes take the wheel!
    const bgAnimationClass = isFirstRender.current 
        ? 'w-[var(--navbar-bg-width)] opacity-100 pointer-events-auto'
        : (desktopOpen ? 'expanding pointer-events-auto' : 'shrinking pointer-events-none');

    const contentAnimationClass = desktopOpen 
        ? 'showing' 
        : 'fading';
    const mobileAnimationClass = (mobileOpen ? 'open' : '');
    return (
        <>
        {/* Mobile Hamburger */}
        <div className="fixed left-4 top-4 flex items-center justify-center gap-3 z-100">
            <button 
                id="hamburger-toggle" 
                className="group cursor-pointer flex md:hidden flex-col justify-between w-7 h-6"
                onClick={toggleMobileNav}
            >
                <span className="block w-full h-0.75 bg-(--textColor) group-active:bg-(--hoverColor)"></span>
                <span className="block w-full h-0.75 bg-(--textColor) group-active:bg-(--hoverColor)"></span>
                <span className="block w-full h-0.75 bg-(--textColor) group-active:bg-(--hoverColor)"></span>
            </button>
            {/* Desktop logo toggle */}
            <div 
                alt="Logo" 
                className={`w-10 h-10 md:hover:brightness-125 md:cursor-pointer transition-transform duration-1000 ${desktopOpen ? 'rotate-360' : '-rotate-360'}`} 
                onClick={toggleDesktopNav}
            >
                <img id="logo" src="/webLogo.png" alt="logo"/>
            </div>
        </div>
        <nav className={`navbar-bg fixed top-0 left-0 w-full flex justify-between items-center bg-(--buttonColor) shadow-md px-3 sm:px-6 py-4 z-50 ${bgAnimationClass}`}
        >
            {/* Navbar Content */}
            <div 
                className={`navbar-content flex-1 flex justify-between items-center pl-23 md:pl-12 md:pr-6 ${contentAnimationClass}`}
            >
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-(--textColor)">Hanabi Ranking</h1>
                    <div className="hidden md:flex gap-9 ml-10 text-lg">
                        <a href="/" onClick={(e) => handleLinkClick(e, '/')} className={`nav-link ${location.pathname === '/' ? 'active pointer-events-none' : ''}`}>Home</a>
                        <a href="/demonlist" onClick={(e) => handleLinkClick(e, '/demonlist')} className={`nav-link ${location.pathname === '/demonlist' || location.pathname.includes('/demoninfo') ? 'active pointer-events-none' : ''}`}>Demonlist</a>
                        <a href="/waifu" onClick={(e) => handleLinkClick(e, '/waifu')} className={`nav-link ${location.pathname === '/waifu' ? 'active pointer-events-none' : ''}`}>Waifu</a>
                        <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className={`nav-link ${location.pathname === '/about' ? 'active pointer-events-none' : ''}`}>About</a>
                    </div>
                </div>
                {/* Theme Toggle Button */}
                <div className="flex items-center gap-2">
                    <span id="theme-label" className="hidden sm:inline text-(--textColor) font-bold text-base">Theme:</span>
                    <button id="theme-toggle" onClick={toggleTheme} className="bg-transparent text-(--textColor) font-extrabold text-xs md:text-sm px-3 py-1.5 sm:px-6 sm:py-2 rounded-full border-2 border-(--shadowColor) hover:bg-(--shadowColor) hover:text-(--bgColor) transition-all duration-300 cursor-pointer">
                        {theme}
                    </button>
                </div>
            </div>
        </nav>
        {/* Mobile Dropdown Menu (Simplified for React) */}
        <div id="mobile-menu" className={`fixed bg-(--buttonColor) inset-0 opacity-0 flex flex-col items-center justify-start pt-24 gap-8 text-2xl z-40 ${mobileAnimationClass}`}>
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} className={`nav-link ${location.pathname === '/' ? 'active pointer-events-none' : ''}`}>Home</a>
            <a href="/demonlist" onClick={(e) => handleLinkClick(e, '/demonlist')} className={`nav-link ${location.pathname.includes('/demonlist') ? 'active pointer-events-none' : ''}`}>Demonlist</a>
            <a href="/waifu" onClick={(e) => handleLinkClick(e, '/waifu')} className={`nav-link ${location.pathname === '/waifu' ? 'active pointer-events-none' : ''}`}>Waifu</a>
            <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className={`nav-link ${location.pathname === '/about' ? 'active pointer-events-none' : ''}`}>About</a>        
        </div>
        </>
    );
}