import { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import Typed from 'typed.js';
import './about.css';

const bgImages = [
    '/About/background.gif',
    '/About/background1.gif',
    '/About/background2.gif',
    '/About/background3.gif',
    '/About/background4.gif',
    '/About/background5.gif',
    '/About/background6.gif',
    '/About/background7.gif',
];
const legacyGames = [
    { name: "Feeding Frenzy 2", image: "/About/FeedingFrenzy2.jpg" },
    { name: "Pokiwar", image: "/About/Pokiwar.jpg" },
    { name: "Bang Bang", image: "/About/BangBang.jpg" },
    { name: "Đảo Rồng", image: "/About/DaoRong.jpg" },
    { name: "Angry Birds Epic", image: "/About/AngryBirdsEpic.jpg" },
    { name: "Jetpack Joyride", image: "/About/JetpackJoyride.png" },
    { name: "Fruit Ninja", image: "/About/FruitNinja.png" },
    { name: "Minion Rush", image: "/About/MinionRush.png" },
]
const techData = {
    javascript: { 
        title: "JavaScript", 
        desc: "The core language I use for web development and the one I've invested the most time to learn. I still remember the first time I used it to create a simple event for a button I was amazed by how awesome it was. It's just so fun and I never got bored of learning it at all. Will try my best to utilize it even more along with CSS to create jaw-dropping effects on my website.",
        img: "/About/javascript.svg", 
        deg: "deg-0"
    },
    react: { 
        title: "React", 
        desc: "This has always been my must-learn to level up my front-end skills. I've only grasped the fundamentals to create a simple website for my group project. Gonna migrate this website to React soon when I finished all of the basic features.",
        img: "/About/react.svg", 
        deg: "deg-72"
    },
    mongodb: { 
        title: "MongoDB", 
        desc: "I chose this for its flexibility and that it pairs well with Javascript through JSON-like documents. I have only used it to create some simple schemas and haven't explored it much yet. Will try to learn more as my projects get more complex.",
        img: "/About/mongodb.svg", 
        deg: "deg-144"
    },
    cpp: { 
        title: "C++", 
        desc: "The first programming language I learned back when I just became a high school student. I've only learned the basics of it to solve data structure and algorithm problems. However when I moved to uni I focused more on web development so I barely touched it anymore. Hope someday I can manage my time to learn more of it and make a cool application.",
        img: "/About/cpp.svg", 
        deg: "deg-216"
    },
    python: { 
        title: "Python",
        desc: "Learned after C++ in the middle of high school and it was still nothing outside of basic syntax. But in uni I've got the chance to use it more as I took my path in data science and machine learning. Even though it's still pretty frustrating I hope I could get the hang of it and soon be able to make some cool projects with it.",
        img: "/About/python.svg", 
        deg: "deg-288"
    }
};
const origamiData = [
    { 
        name: "FOX", 
        img: "/About/origami-fox.jpg", 
        spanClass: "col-span-1 md:col-span-2" 
    },
    { 
        name: "RABBIT", 
        img: "/About/origami-rabbit.jpg", 
        spanClass: "col-span-1 md:col-span-2" 
    },
    { 
        name: "BIRD", 
        img: "/About/origami-bird.jpg", 
        spanClass: "col-span-2 md:col-span-2" 
    },
    { 
        name: "CRANE", 
        img: "/About/origami-crane.jpg", 
        spanClass: "col-span-1 md:col-span-3" 
    },
    { 
        name: "CAPYBARA", 
        img: "/About/origami-capybara.jpg", 
        spanClass: "col-span-1 md:col-span-3" 
    }
];
const cardGamesList = [
    { name: "Thirteen", alt: "Tiến Lên", img: "/About/card-thirteen.jpg", link: "https://youtu.be/hyMDanvDWgI?si=x1B0BA2bPOLfzoxO" },
    { name: "Blackjack", alt: "Xì Dách", img: "/About/card-blackjack.jpg", link: "https://youtu.be/xjqTIzYkGdI?si=KFvlk26IEvR36sGF" },
    { name: "Poker", alt: "Texas Hold'em", img: "/About/card-poker.jpg", link: "https://youtu.be/bEVGq4Je1Sg?si=hQqusoOcHFs0izAA" },
    { name: "Phỏm", alt: "Vietnamese Rummy", img: "/About/card-phom.jpg", link: "https://youtu.be/PRZwpWbNaps?si=QaewUfS3EMTBbSCH" },
    { name: "Catte", alt: "Cát Tê", img: "/About/card-catte.jpg", link: "https://youtu.be/wlnjVXVN8ZQ?si=gvGVoddV7HMX4JV4" },
    { name: "Hearts", alt: "", img: "/About/card-hearts.jpg", link: "https://youtu.be/XPWfL-0FGA8?si=KxiJJZRoZGzdNQQl" },
    { name: "Spades", alt: "Call Bridge", img: "/About/card-spades.jpg", link: "https://youtu.be/HgmnrYt-Xf4?si=cZS_5ovIFJayxsCU" }, 
    { name: "Uno", alt: "", img: "/About/card-uno.jpg", link: "https://youtu.be/FkuqYtE1rw0?si=MhAdWxqoUVADAbQf" },
    { name: "Speed", alt: "", img: "/About/card-speed.jpg", link: "https://youtu.be/0aX1JfkAuQA?si=26X6op-kOp7xevC0" },
    { name: "Golf", alt: "", img: "/About/card-golf.jpg", link: "https://youtu.be/6A28TM3koo4?si=y5xkO8feUdpHFlTz" },
    { name: "Old Maid", alt: "", img: "/About/card-oldmaid.jpg", link: "https://youtu.be/n6UFbZ0jGWw?si=DkSIJui04TfB0tNL" },
    { name: "War", alt: "", img: "/About/card-war.jpg", link: "https://youtu.be/J5vT33Vo04s?si=BhUsJEORPmD2kL2S" },
    { name: "Chinese Ten", alt: "Câu Cá", img: "/About/card-chineseten.png", link: "https://youtu.be/PbiwC91m8mo?si=gSH-jpMd_0SE8w1n" },
    { name: "Chinese Poker", alt: "Mậu Binh", img: "/About/card-chinesepoker.jpg", link: "https://youtu.be/CCVD1ENZUww?si=73MyYoNmWmUwIb03" },
    { name: "Solitaire", alt: "Klondike", img: "/About/card-solitaire.jpg", link: "https://youtu.be/0aX1JfkAuQA?si=26X6op-kOp7xevC0" },
    { name: "Exploding Kittens", alt: "", img: "/About/card-explodingkittens.jpg", link: "https://youtu.be/O3BDwMx3FpE?si=HgVX3ShzEeSUe3gx" },
];

export default function About() {
    // --- Hero Section ---
    const { isGatesClosed } = useOutletContext();
    const [bgIndex, setBgIndex] = useState(0);
    const [uptime, setUptime] = useState('Calculating...');
    const [isHeroLoaded, setIsHeroLoaded] = useState(false);
    const typedRef = useRef(null);
    const audioRef = useRef(null);
    // Preload audio
    useEffect(() => {
        audioRef.current = new Audio('https://feeds.soundcloud.com/stream/1493606938-corona-689894639-kaguya-noise-1.mp3'); 
        audioRef.current.load();
    }, []);
    const playAvatarSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Play instantly when clicking multiple times
            audioRef.current.play().catch(err => console.log("Audio play blocked by browser:", err));
        }
    };
    // Trigger typing and avatar animation
    useEffect(() => {
        let initialTimer, typingTimer;
        if (!isGatesClosed) {
            initialTimer = setTimeout(() => {
                setIsHeroLoaded(true); 
                typingTimer = setTimeout(() => {
                    if (typedRef.current) typedRef.current.destroy();
                    typedRef.current = new Typed('#typed-output', {
                        strings: [ "The lame guy who made this atrocious website" ],
                        typeSpeed: 30, backSpeed: 30, backDelay: 500, 
                        loop: false, showCursor: true, cursorChar: ' ▋',
                        hideCursorOnComplete: true,
                        onComplete: (self) => self.cursor.style.display = 'none'
                    });
                }, 1000);
            }, 800); 
        } else {
            if (typedRef.current) typedRef.current.destroy();
        }
        return () => {
            clearTimeout(initialTimer);
            clearTimeout(typingTimer);
        };
    }, [isGatesClosed]);
    // Live uptime timer
    useEffect(() => { 
        const startDate = new Date("2023-04-18T00:00:00");
        const timer = setInterval(() => {
            const diff = new Date() - startDate;
            // Calculate time units and format with leading zeros
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
            const minutes = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
            const seconds = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
            setUptime(`${days} Days  ${hours}:${minutes}:${seconds}`);
        }, 1000);
        const bgTimer = setInterval(() => setBgIndex(prev => (prev + 1) % bgImages.length), 10000);
        return () => {
            clearInterval(timer);
            clearInterval(bgTimer);
        };
    }, []);

    // --- Hobbies links ---
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // -- Coding Section --
    const [activeTech, setActiveTech] = useState(null);
    const [orbitSpeed, setOrbitSpeed] = useState(0.2);
    const [showCLoseBtn, setShowCloseBtn] = useState(false);
    const orbitRef = useRef(null);
    const requestRef = useRef();
    const currentAngle = useRef(0);
    const descTypedRef = useRef(null);
    const [cloneStyle, setCloneStyle] = useState({});
    const [isCloneActive, setIsCloneActive] = useState(false);
    const wrapperRef = useRef(null);
    // Orbit rotation
    const animateOrbit = () => {
        if (!activeTech && orbitRef.current) {
            currentAngle.current += orbitSpeed;
            orbitRef.current.style.transform = `rotate(${currentAngle.current}deg)`;         
            // Counter-rotate the icons to keep them upright
            const innerIcons = orbitRef.current.querySelectorAll('.icon-inner');
            innerIcons.forEach(icon => {
                icon.style.transform = `rotate(${-currentAngle.current}deg)`;
            });
        }
        requestRef.current = requestAnimationFrame(animateOrbit);
    };
    useEffect(() => {
        requestRef.current = requestAnimationFrame(animateOrbit);
        return () => cancelAnimationFrame(requestRef.current);
    }, [orbitSpeed, activeTech]);
    // Tech icon click
    const handleTechClick = (key, event) => {
        // Calculate the exact coordinates of the clicked icon
        if (wrapperRef.current) {
            const wrapperRect = wrapperRef.current.getBoundingClientRect();
            const iconRect = event.currentTarget.getBoundingClientRect();
            setCloneStyle({
                left: `${iconRect.left - wrapperRect.left}px`,
                top: `${iconRect.top - wrapperRect.top}px`
            });
        }
        // Mount the clone at the exact starting position
        setActiveTech(key);
        setTimeout(() => setIsCloneActive(true), 50); // Trigger clone flying animation
        // Start typing description
        if (descTypedRef.current) descTypedRef.current.destroy();
        setTimeout(() => {
            descTypedRef.current = new Typed('#tech-desc-typed', {
                strings: [techData[key].desc],
                typeSpeed: 10, showCursor: false, startDelay: 600,
                onComplete: function() {
                    setShowCloseBtn(true);
                }
            });
        }, 100);
    };
    // Close tech panel
    const closeTechPanel = () => {
        setShowCloseBtn(false);
        if (descTypedRef.current) descTypedRef.current.destroy();
        setIsCloneActive(false);
        setTimeout(() => {
            setActiveTech(null);
        }, 800);
    };

    // --- Others Section ---
    const [activeTab, setActiveTab] = useState('drawing');
    const [revealedTabs, setRevealedTabs] = useState([]);
    const [isOthersRevealed, setIsOthersRevealed] = useState(false);
    const [revealedIds, setRevealedIds] = useState([]);
    
    // -- Scroll reveal elements --
    useEffect(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('flashlight-buttons-container')) {
                        setIsOthersRevealed(true); // Fade in the main box
                        // 150ms staggered delay
                        ['drawing', 'penspinning', 'origami', 'card games', 'sports'].forEach((tab, index) => {
                            setTimeout(() => {
                                setRevealedTabs(prev => [...prev, tab]);
                            }, index * 150);
                        });
                    } 
                    else {
                        const id = entry.target.dataset.id;
                        if (id) {
                            setRevealedIds(prev => prev.includes(id) ? prev : [...prev, id]);
                        }
                    }
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-on-scroll, .social-item, .flashlight-buttons-container').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    return(
        <main>
            {/* ====== Hero section ====== */}
            <section id="hero-section" className="relative w-full mx-auto mb-20 p-10 min-h-150 overflow-hidden shadow-[0_0_15px_3px_var(--textColor)]">
                {bgImages.map((img, index) => (
                    <div 
                        key={img}
                        className={`absolute inset-0 bg-cover bg-center blur-xs brightness-50 contrast-120 -z-1 transition-opacity duration-2000 ease-in-out ${index === bgIndex ? 'opacity-100' : 'opacity-0'}`} 
                        style={{backgroundImage: `url(${img})`}}
                    ></div>
                ))}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-around mt-25">
                    <div className="avatar-wrapper relative w-50 h-50 shrink-0 m-10">
                        <img id="avatar" src="/About/pfp.jpg" alt="Avatar" onClick={playAvatarSound} className={`w-full h-full rounded-full object-cover opacity-0 shadow-[0_1px_20px_3px_var(--shadowColor)] cursor-pointer ${isHeroLoaded ? 'avatar-active' : ''}`}/>
                    </div>
                    <div id="hero-text-container" className={`flex flex-col md:w-172.5 text-center md:text-left items-center md:items-start transition-opacity duration-1000 ${isHeroLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <h1 className="title-font text-5xl md:text-6xl font-extrabold text-(--textColor) mb-4">Hi, I'm <span className="text-neon-gradient">Hanabi</span></h1>
                        <div className="title-font text-xl md:text-3xl italic text-(--textColor) h-20 mt-4">
                            <span id="typed-output"></span>
                        </div>
                        <h2 className="title-font text-lg md:text-xl text-(--textColor) font-light tracking-wide text-shadow-sm opacity-90 mb-6 leading-relaxed">
                            I am an enthusiastic developer who want to create eye-catching experiences for viewers. This website is where I rank all kinds of random stuff that I like, including games, waifus, songs, etc. Note that everything in this website is highly experimental and the rankings are purely based on my own taste. So please take them with a grain of salt and have fun exploring!
                        </h2>
                        <div className="tech-font w-full mt-8 pt-6 border-t-2 border-(--textColor)/30">
                            <p className="text-xs text-(--textColor)/60 uppercase tracking-widest mb-1">Published since 18/04/2023</p>
                            <div id="uptime-timer" className="text-(--buttonColor) text-lg md:text-xl tracking-wider text-shadow-sm">
                                {uptime}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Hobbies list ====== */}
            <h1 className = "text-center text-4xl font-extrabold p-10 text-(--textColor)">Get to know more about my hobbies</h1>
            <div className="hobbies-list flex justify-around">
                <img onClick={() => scrollToSection('game-section')} src="/About/gameLight.svg" data-target="game-section" className="icon-game w-13 h-13 sm:w-20 sm:h-20 cursor-pointer hover:scale-110 transition-transform duration-300" />
                <img onClick={() => scrollToSection('coding-section')} src="/About/codeLight.svg" data-target="coding-section" className="icon-code w-15 h-15 sm:w-20 sm:h-20 cursor-pointer hover:scale-110 transition-transform duration-300" />
                <img onClick={() => scrollToSection('language-section')} src="/About/languageLight.svg" data-target="language-section" className="icon-language w-15 h-15 sm:w-20 sm:h-20 cursor-pointer hover:scale-110 transition-transform duration-300"/>
                <img onClick={() => scrollToSection('others-section')} src="/About/othersLight.svg" data-target="others-section" className="icon-others w-15 h-15 sm:w-20 sm:h-20 cursor-pointer hover:scale-110 transition-transform duration-300"/>
            </div>
            {/* ====== Game Section ====== */}
            <section id = "game-section">
                <h1 className = "text-center text-6xl font-extrabold m-20 text-(--textColor)">Gaming</h1>
                <h2 className = "text-center text-4xl font-bold text-(--textColor)">Games I am currently playing</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4 md:gap-8 p-4 md:p-8">
                    <div className="game-card w-full max-w-75 cursor-pointer">
                        <div className="card-inner relative w-full aspect-square md:aspect-4/3 transform-3d transition-transform duration-600">
                            <div className="card-front absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-3xl text-base md:text-2xl text-(--textColor) font-extrabold gap-4 bg-linear-to-br from-(--shadowColor)/50 to-(--buttonColor)/50 border-2 border-(--textColor)/40">
                                <img src="/About/GeometryDash.jpg" alt="Geometry Dash" className="w-20 h-20 md:w-30 md:h-30 rounded-2xl object-cover"/>
                                <h3>Geometry Dash</h3>
                            </div>
                            <div className="card-back absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-3xl text-sm md:text-base text-(--textColor) text-center font-bold p-4 md:p-6 rotate-y-180 bg-linear-to-br from-(--buttonColor)/50 to-(--shadowColor)/50 border-2 border-(--textColor)/40">
                                <p>My main game for now</p>
                            </div>
                        </div>
                    </div>
                    <div className="game-card w-full max-w-75 cursor-pointer">
                        <div className="card-inner relative w-full aspect-square md:aspect-4/3 transform-3d transition-transform duration-600">
                            <div className="card-front absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-3xl text-base md:text-2xl text-(--textColor) font-extrabold gap-4 bg-linear-to-br from-(--shadowColor)/50 to-(--buttonColor)/50 border-2 border-(--textColor)/40">
                                <img src="/About/TheBattleCats.jpg" alt="The Battle Cats" className="w-20 h-20 md:w-30 md:h-30 rounded-2xl object-cover"/>
                                <h3>The Battle Cats</h3>
                            </div>
                            <div className="card-back absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-3xl text-sm md:text-base text-(--textColor) text-center font-bold p-4 md:p-6 rotate-y-180 bg-linear-to-br from-(--buttonColor)/50 to-(--shadowColor)/50 border-2 border-(--textColor)/40">
                                <p>Not play as much as before, but still log in everyday and collect waifus</p>
                            </div>
                        </div>
                    </div>
                    <div className="game-card group w-full max-w-75 cursor-pointer">
                        <div className="card-inner relative w-full aspect-square md:aspect-4/3 transform-3d transition-transform duration-600">
                            <div className="card-front absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-3xl text-base md:text-2xl text-(--textColor) font-extrabold gap-4 bg-linear-to-br from-(--shadowColor)/50 to-(--buttonColor)/50 border-2 border-(--textColor)/40">
                                <img src="/About/TruyKich.jpg" alt="Truy Kích" className="w-20 h-20 md:w-30 md:h-30 rounded-2xl object-cover"/>
                                <h3>Truy Kích</h3>
                            </div>
                            <div className="card-back absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-3xl text-sm md:text-base text-(--textColor) text-center font-bold p-4 md:p-6 rotate-y-180 bg-linear-to-br from-(--buttonColor)/50 to-(--shadowColor)/50 border-2 border-(--textColor)/40">
                                <p>A FPS game that used to be widely popular in my country back then and was a huge part of my childhood. Sadly its golden era has gone and now I just log in sometimes for nostalgia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="game-card group w-full max-w-75 cursor-pointer">
                        <div className="card-inner relative w-full aspect-square md:aspect-4/3 transform-3d transition-transform duration-600">
                            <div className="card-front absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-3xl text-base md:text-2xl text-(--textColor) font-extrabold gap-4 bg-linear-to-br from-(--shadowColor)/50 to-(--buttonColor)/50 border-2 border-(--textColor)/40">
                                <img src="/About/Chess.jpg" alt="Chess" className="w-20 h-20 md:w-30 md:h-30 rounded-2xl object-cover"/>
                                <h3>Chess</h3>
                            </div>
                            <div className="card-back absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-3xl text-sm md:text-base text-(--textColor) text-center font-bold p-4 md:p-6 rotate-y-180 bg-linear-to-br from-(--buttonColor)/50 to-(--shadowColor)/50 border-2 border-(--textColor)/40">
                                <p>I occasionally play chess on Chess.com, just mainly solving puzzles tho since playing normal games is frustrating :/</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className = "text-center text-4xl font-bold text-(--textColor)">Games I used to play</h2>
                <div className = "game-grid grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4 md:gap-8 p-4 md:p-8">
                    {legacyGames.map((game, i) => (
                        <div key={i} className="game-icon w-25 h-25 rounded-2xl overflow-hidden transition-all duration-250 hover:scale-110 hover:shadow-[0_0_15px_var(--textColor)] cursor-pointer" title={game.name}>
                            <img src={game.image} alt={game.name} />
                        </div>
                    ))}
                </div>
                <h3 className = "text-center text-2xl font-bold text-(--textColor)">More games and details when I create a whole new page for this.</h3>
            </section>
            {/* ====== Coding Section ====== */}
            <section id="coding-section" ref={wrapperRef} className="relative flex flex-col items-center justify-center overflow-hidden">    
                <h1 className = "text-center text-6xl font-extrabold m-20 text-(--textColor)">Coding</h1>
                <div data-id="code-text" className={`max-w-5xl mx-auto mb-20 text-center reveal-on-scroll ${revealedIds.includes('code-text') ? 'is-visible' : ''}`}>
                    <p className="text-xl md:text-2xl text-(--textColor) opacity-90 leading-relaxed">
                        Obviously I have to love coding in order to make this website. Here are the technologies I am currently exploring.
                    </p>
                </div>
                <div className="relative w-full h-auto max-w-300 min-h-92.5 md:min-h-162.5">
                    <div id="solar-system" className="absolute flex items-center justify-center w-125 h-125 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div onClick={() => setOrbitSpeed(-orbitSpeed)} className = {`flex items-center justify-center w-18 h-18 md:w-35 md:h-35 rounded-full bg-radial from-(--shadowColor) to-(--buttonColor) shadow-[0_0_25px_var(--shadowColor)] animate-pulse transition-all duration-1000 hover:scale-130 select-none z-10 cursor-pointer ${activeTech ? 'system-hidden' : ''}`}>
                            <span className="font-bold text-(--textColor) text-base md:text-3xl tracking-wider text-shadow-[1px_1px_4px_var(--bgColor)]">TECH</span>
                        </div>
                        <div className={`orbit-ring-outer absolute rounded-full w-70 h-70 md:w-125 md:h-125 opacity-50 border-2 border-(--textColor) transition-all duration-1200 ${activeTech ? 'system-hidden' : ''}`}></div>
                        <div className={`orbit-ring-inner absolute rounded-full w-40 h-40 md:w-80 md:h-80 opacity-50 border border-(--textColor) transition-all duration-1200 ${activeTech ? 'system-hidden' : ''}`}></div>
                        <div ref={orbitRef} className={`absolute w-70 h-70 md:w-125 md:h-125 ${activeTech ? 'paused' : ''}`}>
                            {Object.entries(techData).map(([key, data]) => (
                                <div key={key} onClick={(e) => handleTechClick(key, e)} className={`absolute w-12.5 h-12.5 md:w-17.5 md:h-17.5 -ml-6.25 -mt-6.25 md:-ml-8.75 md:-mt-8.75 transition-transform duration-1000 hover:scale-130 cursor-pointer pointer-events-auto ${data.deg} ${ activeTech ? 'opacity-0' : 'opacity-100' }`}>
                                    <div className={`icon-inner flex items-center justify-center w-full h-full bg-(--buttonColor)/40 rounded-full border-2 border-(--hoverColor) shadow-[0_0_15px_var(--shadowColor)] ${activeTech ? 'paused' : ''}`}>
                                        <img src={data.img} alt={data.title} className="w-[70%] h-[70%]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="coding-separator-line" className={`absolute top-35 md:top-1/2 left-1/10 md:left-1/4 w-4/5 md:w-px h-0.5 md:h-4/5 bg-(--textColor) opacity-50 z-20 ${isCloneActive ? 'active-state' : ''}`}></div>
                    <div id="tech-detail-panel" className={`relative md:absolute right-0 flex flex-col justify-center text-center md:text-left w-full md:w-[75%] h-full mt-38 md:mt-0 p-6 md:pl-22 z-20 ${isCloneActive ? 'active-state' : ''}`}>
                        <h2 className="text-3xl md:text-5xl text-(--textColor) font-extrabold mb-4">{isCloneActive && techData[activeTech].title}</h2>
                        <span id="tech-desc-typed" className="text-lg md:text-2xl text-(--textColor) leading-relaxed"></span>
                        <button id="close-tech-btn" onClick={closeTechPanel} className={`self-start text-sm text-(--textColor) font-semibold rounded-4xl mx-auto md:mx-0 my-8 md:mt-12 px-10 py-3 border border-(--textColor) tracking-widest cursor-pointer ${showCLoseBtn ? 'active-state' : ''}`}>✕ CLOSE</button>
                    </div>
                </div>
                {/* Render Active Clone */}
                {activeTech && (
                    <div 
                        className={`tech-icon-clone absolute w-12.5 h-12.5 md:w-17.5 md:h-17.5 rounded-full z-30 cursor-pointer ${isCloneActive ? 'active-state' : ''}`}
                        style={cloneStyle}
                        onClick={closeTechPanel}
                    >
                        <div className="icon-inner transform-none flex items-center justify-center w-full h-full bg-(--buttonColor)/40 rounded-full border-2 border-(--hoverColor) shadow-[0_0_15px_var(--shadowColor)]"><img src={techData[activeTech].img} alt="Tech" className="w-[70%] h-[70%]" /></div>
                    </div>
                )}
            </section>
            {/* ====== Language Section ====== */}
            <section id="language-section" className="px-4 mx-auto max-w-6xl">
                <h1 className = "text-center text-6xl font-extrabold m-15 text-(--textColor)">Language</h1>
                <div data-id="lang-text" className={`max-w-5xl mx-auto mb-16 text-center reveal-on-scroll ${revealedIds.includes('lang-text') ? 'is-visible' : ''}`}>
                    <p className="text-xl md:text-2xl text-(--textColor) opacity-90 leading-relaxed">
                        I am a language enthusiast too! Learning languages is just a fun and rewarding journey that I everyone can take in, unlike those esoteric Science things which are reserved for eggheads only. Here are the languages I am interested in (not counting my native language of course :P).
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 px-4 md:px-10">  
                    <div data-id="lang-en" className={`flex flex-col sm:flex-row gap-6 items-start reveal-on-scroll delay-100 ${revealedIds.includes('lang-en') ? 'is-visible' : ''}`}>
                        <div className="w-16 h-16 shrink-0">
                            <img src = "/About/english.svg" />
                        </div>
                        <div className="text-(--textColor)">
                            <h3 className="text-3xl font-bold mb-4">English</h3>
                            <p className="text-lg opacity-80 leading-relaxed">
                                Apparently this is the first thing that has to be mentioned, when you are not a native English speaker lol =/. English has been taught throughout my school life and I've been exposed to a superfluous amount of English shows, games and songs so as a matter of fact I've developed a strong bond with it. My reading and listening skills are okay enough to understand everyday English contents but writing and particularly speaking are still a pain in the neck. I hope to improve them in the near future since I've gotten a chance to connect with a lot more Internet friends so I need to be able to communicate with them better.
                            </p>
                        </div>
                    </div>
                    <div data-id="lang-jp" className={`flex flex-col sm:flex-row gap-6 items-start reveal-on-scroll delay-200 ${revealedIds.includes('lang-jp') ? 'is-visible' : ''}`}>
                        <div className="w-16 h-16 shrink-0">
                            <img src = "/About/japanese.svg" />
                        </div>
                        <div className="text-(--textColor)">
                            <h3 className="text-3xl font-bold mb-4">Japanese</h3>
                            <p className="text-lg opacity-80 leading-relaxed">
                                Another obvious choice for a huge anime fan like me. Understanding animes and mangas is my sole motive for learning Japanese so I merely focus on reading and listening skills. Though it would be even more awesome if I could be able to practice writing and speaking as well but as for now the first two skills are already too much for me 💀. 
                            </p>
                        </div>
                    </div>
                    <div data-id="lang-ru" className={`flex flex-col sm:flex-row gap-6 items-start reveal-on-scroll delay-100 ${revealedIds.includes('lang-ru') ? 'is-visible' : ''}`}>
                        <div className="w-16 h-16 shrink-0">
                            <img src = "/About/russian.svg" />
                        </div>
                        <div className="text-(--textColor)">
                            <h3 className="text-3xl font-bold mb-4">Russian</h3>
                            <p className="text-lg opacity-80 leading-relaxed">
                                Not English, Russian is actually the first one that stepped into my life, back when I was just a toddler. I did have fun learning some simple words but then just lost my grip on it as I grew up. My parents both know Russian and they've encouraged me to learn a lot, I also want to make a comeback too but still havent gotten around to do it yet D:. 
                            </p>
                        </div>
                    </div>
                    <div data-id="lang-es" className={`flex flex-col sm:flex-row gap-6 items-start reveal-on-scroll delay-200 ${revealedIds.includes('lang-es') ? 'is-visible' : ''}`}>
                        <div className="w-16 h-16 shrink-0">
                            <img src = "/About/spanish.svg" />
                        </div>
                        <div className="text-(--textColor)">
                                <h3 className="text-3xl font-bold mb-4">Spanish</h3>
                                <p className="text-lg opacity-80 leading-relaxed">
                                    I've gotten to see a lot of Spanish contents in my favorite fields, e.g. games and football so it would be cool to be able to understand what they are actually saying.
                                </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Others Section ====== */}
            <section id="others-section" className="px-4 max-w-6xl mx-auto">
                <h1 className="text-center text-6xl font-extrabold m-20 text-(--textColor)">Others</h1>
                <div className="flex flex-col md:flex-row gap-0 md:gap-10 relative">
                    <div className="flashlight-buttons-container relative w-full md:w-1/3 flex flex-col gap-4 pt-5 z-50">
                        {['drawing', 'penspinning', 'origami', 'card games', 'sports'].map(tab => (
                            <button 
                                key={tab} 
                                onClick={() => setActiveTab(tab)} 
                                className={`flashlight-bar relative flex items-center justify-center md:justify-start w-full text-(--textColor) gap-3.5 p-7 rounded-l-xl border-none cursor-pointer ${revealedTabs.includes(tab) ? 'slide-in' : ''} ${activeTab === tab ? 'active' : ''}`}
                            >
                                <div className={`w-2.5 h-2.5 bg-current rounded-full transition-all duration-300 ${activeTab === tab ? 'opacity-100 shadow-[0_0_10px_var(--hoverColor),0_0_20px_var(--hoverColor)]' : 'opacity-50'}`}></div>
                                <span className="text-xl font-bold capitalize">{tab}</span>
                            </button>
                        ))}
                    </div>
                    <div id="content-display" className={`relative grid items-center mt-10 md:mt-0 p-8 md:p-6 w-full md:w-2/3 text-(--textColor) rounded-3xl border border-(--textColor)/10 overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isOthersRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="absolute left-0 w-full pointer-events-none transition-all duration-500 ease-in-out opacity-0 md:opacity-100"></div>
                        {/* Tab Contents */}
                        <div className={`col-start-1 row-start-1 w-full min-w-0 transition-all duration-800 ease-out ${activeTab === 'drawing' ? 'opacity-100 visible pointer-events-auto translate-x-0' : 'opacity-0 invisible pointer-events-none translate-x-8'}`}>
                            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Drawing</h2>
                            <p className="text-lg font-medium leading-relaxed mb-6">I love drawing anime characters, even though I am only capable of copying from original picture for now but I will definitely try to actually make a proper fanart sometimes soon.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="group relative col-span-1 h-40 md:h-48 bg-white/5 rounded-xl border border-white/20 shadow-lg overflow-hidden cursor-pointer">
                                    <img src="/About/drawing1.jpg" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="group relative col-span-1 h-40 md:h-48 bg-white/5 rounded-xl border border-white/20 shadow-lg overflow-hidden cursor-pointer">
                                    <img src="/About/drawing2.jpg" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="group relative col-span-2 h-40 md:h-48 bg-white/5 rounded-xl border border-white/20 shadow-lg overflow-hidden cursor-pointer">
                                    <img src="/About/drawing3.jpg" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            </div>
                        </div>
                        <div className={`col-start-1 row-start-1 w-full min-w-0 transition-all duration-800 ease-out ${activeTab === 'penspinning' ? 'opacity-100 visible pointer-events-auto translate-x-0' : 'opacity-0 invisible pointer-events-none translate-x-8'}`}>
                            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Penspinning</h2>
                            <p className="text-lg leading-relaxed font-medium">Started learning for fun since 2023, this is such a cool activity to relax and flex on others 😎. Here is a quick grasp of my learning pathway even though I've only known some beginner tricks and linkages.</p>
                            <ul className="list-none mt-4 space-y-3 text-lg">
                                <li className="bg-white/10 p-2 rounded-lg"><span className="font-bold">✅ Mastered:</span> Thumbaround harmonic, Double charge, Sonic, Infinity, Palmspin, some short linkages</li>
                                <li className="bg-white/10 p-2 rounded-lg"><span className="font-bold">🖋️ Learning:</span> Iteza, Tornado, Swivel, Shadow</li>
                                <li className="bg-white/10 p-2 rounded-lg"><span className="font-bold">❌ Plan to learn:</span> Powerpass, Multiple Thumbaround and Bust, more longer linkages</li>
                            </ul>
                        </div>
                        <div className={`col-start-1 row-start-1 w-full min-w-0 transition-all duration-800 ease-out ${activeTab === 'origami' ? 'opacity-100 visible pointer-events-auto translate-x-0' : 'opacity-0 invisible pointer-events-none translate-x-8'}`}>
                            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Origami</h2>
                            <p className="text-lg leading-relaxed font-medium">Have always been keen on this since childhood but never truly got the time to practice seriously. Plane is the only thing I could fold which ease but lately I've learned to fold more of these stuff too!</p>
                            <div className="mt-6 flex justify-center gap-6 text-6xl">
                                <div id="origami-grid" className="grid grid-cols-2 md:grid-cols-6 gap-4">
                                    {origamiData.map((item, i) => (
                                        <div key={i} className={`group relative h-40 md:h-48 bg-white/5 rounded-xl border border-white/20 overflow-hidden cursor-pointer ${item.spanClass}`}>
                                            <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                                                <span className="font-bold text-xl tracking-widest">{item.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`col-start-1 row-start-1 w-full min-w-0 transition-all duration-800 ease-out ${activeTab === 'card games' ? 'opacity-100 visible pointer-events-auto translate-x-0' : 'opacity-0 invisible pointer-events-none translate-x-8'}`}>
                            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Card Games</h2>
                            <p className="text-lg leading-relaxed mb-6 font-medium">Playing card games has been my fixation ever since I was a kid. I love learning more card games and sharing them with friends so that I could play with them for fun. This is ordered by how confident I am at playing them and clicking on each card would move you to a tutorial video in case you want to know more about it.</p>
                            <div className="flex overflow-x-auto gap-4 pb-4 snap-x scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-(--textColor)/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                                {cardGamesList.map((game, i) => (
                                    <a key={i} href={game.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center flex-none w-34 p-3 snap-start bg-white/5 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer">
                                        <img src={game.img} alt={game.name} className="w-full h-30 object-cover rounded-lg mb-3 shadow-md" />
                                        <span className="font-bold text-center leading-tight">{game.name}</span>
                                        <span className="text-xs font-medium opacity-60 text-center mt-1">{game.alt}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className={`col-start-1 row-start-1 w-full min-w-0 transition-all duration-800 ease-out ${activeTab === 'sports' ? 'opacity-100 visible pointer-events-auto translate-x-0' : 'opacity-0 invisible pointer-events-none translate-x-8'}`}>
                            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Sports</h2>
                            <p className="text-lg leading-relaxed font-medium">I am not an exercise guy but I still have my favorite sports too! Here are the sports that I like</p>
                            <ul className="list-none mt-4 space-y-3 text-lg">
                                <li className="bg-white/10 p-2 rounded-lg"><span className="font-bold">⚽ Football:</span> Mainly just watch major tournaments such as Euro and WC, also read news about clubs that I like, but my actual football skill is a joke.</li>
                                <li className="bg-white/10 p-2 rounded-lg"><span className="font-bold">🏸 Badminton:</span>  Play a bit better than football, don't watch any tournament tho</li>
                                <li className="bg-white/10 p-2 rounded-lg"><span className="font-bold">🏓 Table tennis:</span>  Just learned recently, quite hard as first but really fun tbh</li>
                                <li className="bg-white/10 p-2 rounded-lg"><span className="font-bold">🏐 Volleyball:</span>  Also just learned last semester, not so good at this but still kinda fun to play</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Social Section ====== */}
            <section id="social-section" className="py-24 px-4 w-full max-w-6xl mx-auto flex flex-col gap-8 overflow-hidden">
                <h1 className="text-center text-6xl font-extrabold m-20 text-(--textColor)">Social</h1>
                <div className="social-row left flex items-center w-full py-2.5" style={{"--brand-color": "linear-gradient(45deg, #30baf5, #0446aa)", "--brand-glow": "#1877F2", "--delay": "0s"}}>
                    <a data-id="soc-fb" className={`social-item relative mx-2.5 md:mx-25 z-10 cursor-pointer ${revealedIds.includes('soc-fb') ? 'active' : ''}`} href="https://www.facebook.com/profile.php?id=100013302840565&locale=vi_VN" target="_blank" rel="noreferrer">
                        <div className="social-icon-circle flex items-center justify-center w-14 md:w-20 h-14 md:h-20 rounded-full border-2 border-(--textColor) z-20">
                            <img src="/Photos/facebook.png" alt="FB" className="w-7 md:w-10 h-7 md:h-10" />
                        </div>
                        <div className="social-tape-wrapper absolute left-1/2 top-1/2 w-0 h-10 md:h-12.5 opacity-0 -translate-y-1/2 z-10">
                            <div className="social-tape flex items-center w-full h-full pl-13 rounded-r-md">
                                <span className="tape-content font-bold text-(--bgColor) text-sm md:text-lg tracking-widest opacity-0">FACEBOOK</span>
                            </div>
                        </div>
                    </a>
                    <div className="tech-line relative grow h-0.5 mx-3 md:mx-7 opacity-0"></div>
                </div>
                <div className="social-row right flex items-center w-full py-2.5" style={{"--brand-color": "linear-gradient(45deg, #f93969, #d30404)", "--brand-glow": "#ff0000", "--delay": "0.1s"}}>
                    <a data-id="soc-yt" className={`social-item pull-left relative mx-2.5 md:mx-25 z-10 cursor-pointer ${revealedIds.includes('soc-yt') ? 'active' : ''}`} href="https://youtube.com/@Hanabi1801" target="_blank" rel="noreferrer">
                        <div className="social-icon-circle flex items-center justify-center w-14 md:w-20 h-14 md:h-20 rounded-full border-2 border-(--textColor) z-20">
                            <img src="/Photos/youtube.png" alt="YT" className="w-7 md:w-10 h-7 md:h-10" />
                        </div>
                        <div className="social-tape-wrapper absolute right-1/2 top-1/2 w-0 h-10 md:h-12.5 opacity-0 -translate-y-1/2 z-10">
                            <div className="social-tape flex items-center justify-end w-full h-full pr-7.5 md:pr-13 rounded-l-md">
                                <span className="tape-content font-bold text-(--bgColor) text-sm md:text-lg tracking-widest opacity-0">YOUTUBE</span>
                            </div>
                        </div>
                    </a>
                    <div className="tech-line relative grow order-first h-0.5 mx-3 md:mx-7 opacity-0"></div>
                </div>
                <div className="social-row left flex items-center w-full py-2.5" style={{"--brand-color": "linear-gradient(135deg, #921fde, #5865F2)", "--brand-glow": "#8958f2", "--delay": "0.2s"}}>
                    <a data-id="soc-dc" className={`social-item relative mx-2.5 md:mx-25 z-10 cursor-pointer ${revealedIds.includes('soc-dc') ? 'active' : ''}`} href="http://discord.com/users/785306828661456906" target="_blank" rel="noreferrer">
                        <div className="social-icon-circle flex items-center justify-center w-14 md:w-20 h-14 md:h-20 rounded-full border-2 border-(--textColor) z-20">
                            <img src="/Photos/discord.png" alt="DC" className="w-7 md:w-10 h-7 md:h-10" />
                        </div>
                        <div className="social-tape-wrapper absolute left-1/2 top-1/2 w-0 h-10 md:h-12.5 opacity-0 -translate-y-1/2 z-10">
                            <div className="social-tape flex items-center w-full h-full pl-13 rounded-r-md">
                                <span className="tape-content font-bold text-(--bgColor) text-sm md:text-lg tracking-widest opacity-0">DISCORD</span>
                            </div>
                        </div>
                    </a>
                    <div className="tech-line relative grow h-0.5 mx-3 md:mx-7 opacity-0"></div>
                </div>
                <div className="social-row right flex items-center w-full py-2.5" style={{"--brand-color": "linear-gradient(45deg, #ea00bc, #fc2b5f, #ffd269)", "--brand-glow": "#fc2b5f", "--delay": "0.3s"}}>
                    <a data-id="soc-ig" className={`social-item pull-left relative mx-2.5 md:mx-25 z-10 cursor-pointer ${revealedIds.includes('soc-ig') ? 'active' : ''}`} href="https://www.instagram.com/l___hanabi___l/" target="_blank" rel="noreferrer">
                        <div className="social-icon-circle flex items-center justify-center w-14 md:w-20 h-14 md:h-20 rounded-full border-2 border-(--textColor) z-20">
                            <img src="/Photos/instagram.png" alt="IG" className="w-7 md:w-10 h-7 md:h-10" />
                        </div>
                        <div className="social-tape-wrapper absolute right-1/2 top-1/2 w-0 h-10 md:h-12.5 opacity-0 -translate-y-1/2 z-10">
                            <div className="social-tape flex items-center justify-end w-full h-full pr-7.5 md:pr-13 rounded-l-md">
                                <span className="tape-content font-bold text-(--bgColor) text-sm md:text-lg tracking-widest opacity-0">INSTAGRAM</span>
                            </div>
                        </div>
                    </a>
                    <div className="tech-line relative grow order-first h-0.5 mx-3 md:mx-7 opacity-0"></div>
                </div>
            </section>
        </main>
    );
}