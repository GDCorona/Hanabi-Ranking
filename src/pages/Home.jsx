import { useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import './home.css';

const creditsData = [
    {
        imgSrc: "/Photos/github.png", imgAlt: "github",
        text: "Github allows me to host this website for free. Huge thanks to them for providing a useful, easy-to-use hosting service!",
        linkHref: "https://github.com/", linkText: "Check out Github →"
    },
    {
        imgSrc: "/Photos/flaticon.jpg", imgAlt: "flaticon",
        text: "All of the icons used in the older version of this website are provided by Flaticon. Huge shout-out to them!",
        linkHref: "https://www.flaticon.com/", linkText: "Check out Flaticon →"
    },
    {
        imgSrc: "/Photos/svgRepo.jpg", imgAlt: "SVG Repo",
        text: "SVG Repo is also a great place for finding stylish icons. This new version uses a lot of SVG vectors and icons from there.",
        linkHref: "https://www.svgrepo.com/", linkText: "Check out SVG Repo →"
    },
    {
        imgSrc: "/Photos/MyAnimeList.png", imgAlt: "MyAnimeList",
        text: "MyAnimeList is a truthful source that I used to get information about my favorite animes and waifus.",
        linkHref: "https://myanimelist.net/", linkText: "Check out MyAnimeList →"
    },
    {
        imgSrc: "/Photos/pinterest.png", imgAlt: "pinterest",
        text: "Pinterest is where I found and stored most of the beautiful images used in this website.",
        linkHref: "https://www.pinterest.com/", linkText: "Check out Pinterest →"
    }
];
const extendedCredits = [creditsData[creditsData.length - 1], ...creditsData, creditsData[0]];

export default function Home() {
    // ==== Ranking Features Section ====
    const { triggerTransition } = useOutletContext();
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);
    const handleIconClick = (e, targetUrl) => {
        e.preventDefault();
        const wrapper = e.currentTarget;
        const icon = wrapper.querySelector('img');
        wrapper.style.pointerEvents = "none";
        let duration = 10;
        icon.style.animation = `spin ${duration}s linear infinite`;
        const interval = setInterval(() => {
            duration -= 1;
            if (duration <= 1) {
                duration = 1;
                clearInterval(interval);
            }
            icon.style.animation = `spin ${duration}s linear infinite`;
        }, 100); // Gradually speed up spin every 100ms
        setTimeout(() => {
            triggerTransition(targetUrl);
        }, 1000);
    };

    // ==== Coming Soon Section ====
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const type = el.dataset.animate;
                    const delay = el.dataset.delay || 0;    
                    setTimeout(() => {
                        if (type === "grow") el.classList.add("animate-grow");
                        if (type === "branch") el.classList.add("animate-branch");
                        if (type === "fadeIn") el.classList.add("animate-fadeIn");
                    }, delay);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0 });
        document.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // ====== Credits Section ======
    const [currentIndex, setCurrentIndex] = useState(1);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const isTransitioning = useRef(false);
    const nextSlide = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        setTransitionEnabled(true);
        setCurrentIndex(prev => prev + 1);
    };
    const prevSlide = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        setTransitionEnabled(true);
        setCurrentIndex(prev => prev - 1);
    };
    const jumpToDot = (index) => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        setTransitionEnabled(true);
        setCurrentIndex(index + 1);
    };
    const handleTransitionEnd = () => {
        isTransitioning.current = false;
        if (currentIndex === extendedCredits.length - 1) {
            setTransitionEnabled(false);
            setCurrentIndex(1); // Jump silently to real first
        } else if (currentIndex === 0) {
            setTransitionEnabled(false);
            setCurrentIndex(extendedCredits.length - 2); // Jump silently to real last
        }
    };
    // Auto-play interval
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);
    // Calculate active dot
    const activeDotIndex = currentIndex === 0 ? creditsData.length - 1 
                        : currentIndex === extendedCredits.length - 1 ? 0 
                        : currentIndex - 1;

    return (
        <main>
            {/* Title */}
            <div id="title" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-30 bg-cover bg-center bg-no-repeat">
                <img src="/Photos/homeBG.gif" alt="titleBG" className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-40 contrast-100 -z-2" />
                <h1 className="relative text-center font-extrabold text-4xl md:text-6xl text-(--textColor) mb-15 md:mb-30 drop-shadow-xl z-1">
                    <span className="text-neon-gradient home-font"> Welcome to Hanabi's official website!</span>
                </h1>
                <div className="w-[90%] md:w-[70%] h-0.5 bg-linear-45 from-(-shadowColor) via-(--titleColor) to-transparent opacity-60 mb-4"></div>
                <h2 className="relative text-center font-semibold italic text-xl md:text-3xl text-(--textColor) z-1 m-5">
                    <span className="text-neon-gradient home-font">The place where I rank all kind of stuff that I like</span>
                </h2>
                <div className="w-[60%] md:w-[40%] h-0.5 bg-linear-45 from-(-shadowColor) via-(--titleColor) to-transparent opacity-40 mt-4"></div>
            </div>
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20 md:h-32 text-(--shadowColor) -mt-10 md:-mt-15 relative z-10">
                <path fill="currentColor" fillOpacity="1" d="M0,90 C340,-50 1000,300 1440,60 L1540,300 C1380,360 440,40 -50,350 Z"></path>
            </svg>
            {/* Features */}
            <h2 className="text-center font-extrabold text-4xl md:text-6xl text-(--textColor) m-10">What I rank</h2>
            {/* Demonlist Block */}
            <div className="flex flex-col md:flex-row items-center justify-between relative w-full py-40 md:px-24 gap-15">
                <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-70 -z-1">
                    <source src="/Photos/demonlist.mp4" type="video/mp4" />
                </video>
                <div className="flex justify-center flex-col w-full md:w-1/2 gap-10 text-center md:text-left z-10 text-highlight">
                    <h2 className="font-extrabold text-5xl md:text-6xl text-(--textColor)">Demonlist</h2>
                    <h3 className="text-xl md:text-3xl text-(--textColor)">This is where I rank my hardest demons in Geometry Dash</h3>
                </div>
                <div className="flex items-center flex-col text-highlight z-10">
                    <h3 className="font-bold text-2xl md:text-3xl text-(--textColor)">Check it out</h3>
                    <span className="hidden md:block font-extrabold text-7xl text-(--textColor) transform scale-x-300">→</span>
                    <span className="block md:hidden font-extrabold text-5xl mt-2 text-(--textColor)">↓</span>
                </div>
                <div onClick={(e) => handleIconClick(e, '/demonlist')} className="z-10 shrink-0 cursor-pointer">
                    <img src="/Photos/lockIcon.png" className="icon-link w-24 h-24 md:w-30 md:h-30 transition-all duration-1000 hover:scale-110 hover:brightness-150 hover:drop-shadow-[0_0_10px_var(--shadowColor)]" style={{ animation: 'spin 10s linear infinite' }} />
                </div>
            </div>
            {/* Waifu Block */}
            <div className="flex flex-col md:flex-row items-center justify-between relative w-full py-40 md:px-24 gap-15">
                <img src="/Photos/waifu.gif" className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-70 -z-1" />
                <div className="flex justify-center flex-col w-full md:w-1/2 gap-6 md:gap-10 text-highlight text-center md:text-right z-10 order-1 md:order-3">
                    <h2 className="font-extrabold text-5xl md:text-6xl text-(--textColor)">Waifu</h2>
                    <h3 className="text-xl md:text-3xl text-(--textColor)">Here you can view my top favorite waifus, ranked by 3 categories and my in-deep thought about them</h3>
                </div>
                <div className="flex items-center flex-col text-highlight z-10 order-2 md:order-2">
                    <h3 className="font-bold text-2xl md:text-3xl text-(--textColor)">Check it out</h3>
                    <span className="hidden md:block font-extrabold text-7xl text-(--textColor) transform scale-x-300">←</span>
                    <span className="block md:hidden font-extrabold text-5xl mt-2 text-(--textColor)">↓</span>
                </div>
                <div onClick={(e) => handleIconClick(e, '/waifu')} className="z-10 order-3 md:order-1 shrink-0 cursor-pointer">
                    <img src="/Photos/lockIcon.png" className="icon-link w-24 h-24 md:w-30 md:h-30 transition-all duration-1000 hover:scale-110 hover:brightness-150 hover:drop-shadow-[0_0_10px_var(--shadowColor)]" style={{ animation: 'spin 10s linear infinite' }} />
                </div>
            </div>
            {/* Coming Soon */}
            <div className="py-16 max-w-screen overflow-hidden bg-linear-0 from-(--buttonColor) to-(--bgColor)">
                <h2 className="text-center font-extrabold text-4xl md:text-6xl text-(--textColor) mb-10 tracking-tight drop-shadow-lg">
                    Coming soon<span className="opacity-10 font-normal italic">'t</span>
                </h2>
                <div className="relative text-(--textColor) px-4 max-w-6xl mx-auto">
                    <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-screen z-10 pointer-events-none">
                        <div className="h-0.75 bg-(--textColor) opacity-100" data-animate="grow"></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around items-center md:items-start pt-0 md:pt-30 gap-16 md:gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="hidden md:block branch rounded-full bg-linear-to-b from-(--textColor) to-transparent opacity-70" data-animate="branch" data-delay="500"></div>
                            <div className="icon-anime w-20 h-20 mb-6 opacity-0 filter drop-shadow-[0_0_8px_var(--shadowColor)]" data-animate="fadeIn" data-delay="700"></div>
                            <h3 className="font-extrabold text-2xl md:text-3xl opacity-0 mb-3 tracking-wide drop-shadow-md" data-animate="fadeIn" data-delay="1000">Anime</h3>
                            <p className="max-w-xs font-medium text-lg opacity-0 leading-relaxed text-(--textColor)/80 px-2" data-animate="fadeIn" data-delay="1000">
                                Ranking of the best animes I've watched, based on various categories such as story, art, music, etc. Moreover you can know more about my backstory and my honest feeling about them.
                            </p>
                        </div>
                        <div className="block md:hidden w-0.75 rounded-full bg-linear-to-b from-(--textColor) to-transparent opacity-50" data-animate="branch" data-delay="1200"></div>
                        <div className="flex flex-col items-center text-center">
                            <div className="hidden md:block branch rounded-full bg-linear-to-b from-(--textColor) to-transparent opacity-70" data-animate="branch" data-delay="1000"></div>
                            <div className="icon-song w-20 h-20 mb-6 opacity-0 filter drop-shadow-[0_0_8px_var(--shadowColor)]" data-animate="fadeIn" data-delay="1200"></div>
                            <h3 className="font-extrabold text-2xl md:text-3xl opacity-0 mb-3 tracking-wide drop-shadow-md" data-animate="fadeIn" data-delay="1500">Song</h3>
                            <p className="max-w-xs font-medium text-lg opacity-0 leading-relaxed text-(--textColor)/80 px-2" data-animate="fadeIn" data-delay="1500">
                                The place that is gonna be a realm of all my favorite songs, from a bunch of my favorite artists, games and films. You could listen to them right at this place and get to know my music taste better!
                            </p>
                        </div>
                        <div className="block md:hidden w-0.75 rounded-full bg-linear-to-b from-(--textColor) to-transparent opacity-50" data-animate="branch" data-delay="1800"></div>
                        <div className="flex flex-col items-center text-center">
                            <div className="hidden md:block branch rounded-full bg-linear-to-b from-(--textColor) to-transparent opacity-70" data-animate="branch" data-delay="1500"></div>
                            <div className="icon-more w-20 h-20 mb-7 opacity-0 filter drop-shadow-[0_0_8px_var(--shadowColor)]" data-animate="fadeIn" data-delay="1700"></div>
                            <h3 className="font-bold text-2xl md:text-3xl opacity-0 tracking-wide text-(--textColor)/70" data-animate="fadeIn" data-delay="2000">And more to come...</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Credits */}
            <h2 className="text-center font-extrabold text-4xl md:text-6xl text-(--textColor) m-10">Credits</h2>
            <div className="flex items-center justify-center p-4 md:p-10 text-(--textColor)">
                <button onClick={prevSlide} className="font-extrabold text-4xl md:text-6xl px-2 md:px-6 z-10 cursor-pointer">⟨</button>
                <div className="relative overflow-hidden w-full max-w-70 sm:max-w-md md:max-w-3xl">
                    <div 
                        className="flex"
                        onTransitionEnd={handleTransitionEnd}
                        style={{ 
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: transitionEnabled ? 'transform 0.7s ease-in-out' : 'none'
                        }}
                    >
                        {extendedCredits.map((credit, idx) => (
                            <div key={idx} className="w-full shrink-0 flex flex-col items-center gap-5">
                                <img src={credit.imgSrc} alt={credit.imgAlt} className="w-20 md:w-25 rounded-2xl" />
                                <p className="max-w-xl font-semibold text-lg md:text-xl text-center px-2">{credit.text}</p>
                                <a className="font-bold underline text-lg md:text-xl" target="_blank" rel="noreferrer" href={credit.linkHref}>{credit.linkText}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={nextSlide} className="font-extrabold text-4xl md:text-6xl px-2 md:px-6 z-10 cursor-pointer">⟩</button>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6 mb-16">
                {creditsData.map((_, idx) => (
                    <span 
                        key={idx} 
                        onClick={() => jumpToDot(idx)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${idx === activeDotIndex ? 'bg-(--textColor)' : 'bg-(--textColor)/40'}`}
                    ></span>
                ))}
            </div>
        </main>
    );
}