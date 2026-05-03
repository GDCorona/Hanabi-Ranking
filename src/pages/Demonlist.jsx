import { useState, useEffect, useMemo } from 'react';
import { useNavigate} from 'react-router-dom';
import { CONFIG } from '../config';
import { demonList as initialDemonList } from '../data/demondata';
import './demonlist.css';
import Comments from '../components/Comments';

const opinionChangelogData = [
    { date: "May 3, 2026", desc: "This new demonlist was created!" },
]; 

const aredlChangelogData = [
    { date: "May 3, 2026", desc: "This new demonlist was created!" },
];
export default function Demonlist() {
    const navigate  = useNavigate();
    const [demons, setDemons] = useState(initialDemonList);
    const [isLoading, setIsLoading] = useState(false);
    const [showChangelog, setShowChangelog] = useState(false);

    // --- Data Fetching ---
    useEffect(() => {
        const fetchAredlRanks = async () => {
            try {
                const res = await fetch(`${CONFIG.API_BASE_URL}/api/demons`);
                const aredlData = await res.json();
                const rankMap = {};
                aredlData.forEach(level => {
                    rankMap[level.name.toLowerCase()] = level.aredlRank;
                });
                // Update the demons array with the fetched ranks
                const updatedDemons = initialDemonList.map(demon => {
                    let foundRank = rankMap[demon.name.toLowerCase()];
                    if (foundRank === undefined && demon.fallbackName) {
                        foundRank = rankMap[demon.fallbackName.toLowerCase()];
                    }
                    return {
                        ...demon,
                        aredlRank: foundRank !== undefined ? foundRank : NaN
                    };
                });
                setDemons(updatedDemons);
            } catch (err) {
                console.error("Failed to fetch AREDL data", err);
            }
        };
        fetchAredlRanks();
    }, []);

    // --- Sorting Logic ---
    const [sortByAredl, setSortByAredl] = useState(() => {
        return localStorage.getItem("sort-state") === "true";
    });
    const [appliedSort, setAppliedSort] = useState(sortByAredl);
    const sortedDemons = useMemo(() => {
        const filteredList = demons.filter(demon => {
            const vis = demon.visibility || "both"; 
            if (appliedSort) {
                return vis === "both" || vis === "aredl";
            } else {
                return vis === "both" || vis === "opinion";
            }
        });
        if (appliedSort) {
            return filteredList.sort((a, b) => (a.aredlRank || Infinity) - (b.aredlRank || Infinity));
        } else {
            return filteredList.sort((a, b) => b.difficultyValue - a.difficultyValue);
        }
    }, [demons, appliedSort]);
    const top30 = sortedDemons.slice(0, 30);
    const legacy = sortedDemons.slice(30);
    const handleSortToggle = () => {
        const newState = !sortByAredl;
        setIsLoading(true);
        setSortByAredl(newState);
        localStorage.setItem("sort-state", newState);
        setTimeout(() => {
            setAppliedSort(newState);
            setIsLoading(false);
        }, 1000);
    };
    const descText = appliedSort
        ? <p>Now you are viewing my top 30 according to the AREDL (All Rated Extreme Demons List) placement. Note that the legacy list below will change too. You can find more info about the AREDL <a href="https://aredl.net/" target="_blank" rel="noreferrer" className="font-extrabold underline text-(--shadowColor) hover:text-(--textColor) transition-colors duration-300 cursor-pointer">here</a>.</p>
        : <p>The demons are ranked solely based on my opinion. Just wanna make clear that I want to rank them in the rawest form, which means I highly prioritize 60hz factor and I dont want things like high refresh rate or CBF to heavily affect the difficulty. Thus skill-based levels with hard wave and ship will be placed really high.</p>;

    const DemonCard = ({ demon, index }) => (
        <li 
            onClick={() => handleDemonClick(demon, index)}
            className="listElement flex flex-col md:flex-row gap-10 bg-(--buttonColor) text-(--textColor) w-[87%] my-20 p-14 border-4 rounded-3xl shadow-xl cursor-pointer"
        >
            <img src={demon.image} alt={demon.name} className="demonImg w-full object-cover md:max-w-76 rounded-2xl" />
            <div className="demonInfo text-center md:text-left">
                <p className="demonText text-2xl sm:text-[2.5rem] font-extrabold tracking-wide mb-2">
                    {demon.name}
                </p>
                <p className="text-xl md:text-2xl italic opacity-80 font-medium mb-4">
                    by {demon.creator}
                </p>
                {appliedSort && (
                    <p className="w-fit mx-auto md:mx-0 bg-(--bgColor) text-base sm:text-2xl text-(--shadowColor) font-bold italic px-5 py-1.5 rounded-full shadow-md">
                        AREDL #{demon.aredlRank}
                    </p>
                )}
            </div>
        </li>
    );

    const handleDemonClick = (demon, index) => {
        const query = encodeURIComponent(demon.name);
        const position = index < 30 ? index + 1 : 'Legacy';
        navigate(`/demoninfo?name=${query}&position=${position}`);
    };
    return(
        <main>
            {/* Loading Overlay */}
            <div className={`fixed inset-0 bg-(--textColor)/40 items-center justify-center z-999 ${isLoading ? 'flex' : 'hidden'}`}>
                <div className="relative w-27 h-27">
                    <div className="absolute inset-0 border-4 border-t-transparent border-(--bgColor) rounded-full animate-spin"></div>
                    <img src="/Photos/loadIcon.png" alt="icon" className="absolute inset-0 m-auto w-13 h-13 animate-spin contrast-200" />
                </div>
            </div>
            {/* Title Section */}
            <div id="title" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-25 bg-cover bg-center bg-no-repeat">
                <img src="/Demonlist/demonlistBG.jpg" alt="titleBG" className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-40 contrast-100 -z-2" />
                <h1 className="relative text-center font-extrabold text-5xl md:text-8xl text-(--textColor) mb-10 drop-shadow-xl z-1">
                <span className="text-neon-gradient title-font">MY TOP 30 HARDEST DEMONS</span>
                </h1>
            </div>
            {/* List view mode */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10 text-base sm:text-xl">
                <span className="text-(--textColor) font-bold">You are viewing the list based on:</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    {/* Switch track */}
                    <div className="w-55 sm:w-72 h-12 bg-(--buttonColor) rounded-full flex items-center justify-between px-1 relative">
                        <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={sortByAredl} 
                            onChange={handleSortToggle} 
                        />
                        {/* Option texts */}
                        <span className="w-1/2 text-center text-(--textColor) font-bold pointer-events-none peer-not-checked:text-(--bgColor) z-10">My Opinion</span>
                        <span className="w-1/2 text-center text-(--textColor) font-bold pointer-events-none peer-checked:text-(--bgColor) z-10">AREDL</span>
                        {/* Slider */}
                        <div 
                            className="absolute top-1 left-1 w-[calc(50%-0.25rem)] h-10 bg-(--shadowColor) rounded-full transition-transform duration-1000 ease-in-out"
                            style={{ transform: sortByAredl ? "translateX(100%)" : "translateX(0)" }}
                        >
                        </div>
                    </div>
                </label>
            </div>
            <span className = "flex justify-center text-base sm:text-xl font-semibold text-(--textColor) m-10">{descText}</span>
            {/* Main list */}
            <ul className="demonlist flex flex-col items-center justify-center">
                {top30.map((demon, i) => (
                    <DemonCard key={demon.name} demon={demon} index={i} />
                ))}
            </ul>
            {/* Legacy list */}
            <div id="legacy-section" className="flex flex-col items-center justify-center w-full mt-32">
                <div className="max-w-6xl mx-auto my-10 px-10">
                    <hr className="border-t-4 border-(--shadowColor)/50 rounded-full mb-10" />
                    <h1 className="text-center text-5xl md:text-6xl font-extrabold text-(--textColor) drop-shadow-md tracking-wider mb-16">LEGACY DEMONS</h1>
                    <p className="text-lg md:text-xl font-medium text-(--textColor) opacity-80 mb-5 text-center px-4 max-w-4xl">
                        Here are the demons that were on my top 30 at the time this new site came out but are no longer on the list. You can view the changelog by clicking the button below. For the old changelog, you can download it <a href="/Demonlist/oldchangelog.txt" download className="font-extrabold underline text-(--shadowColor) hover:text-(--textColor) transition-colors duration-300 cursor-pointer">here</a>.
                    </p>
                </div>
                {/* Changelog Button */}
                <button 
                    onClick={() => setShowChangelog(!showChangelog)}
                    className="px-6 py-2 bg-transparent border-2 border-(--shadowColor) text-(--textColor) font-bold rounded-full transition-all duration-300 hover:bg-(--shadowColor) hover:text-(--bgColor) shadow-[0_0_10px_transparent] hover:shadow-[0_0_15px_var(--shadowColor)] cursor-pointer"
                >    
                    {showChangelog ? (
                        <>Hide Changelog <span className="ml-1">✖</span></>
                    ) : (
                        <>View Changelog</>
                    )}
                </button>
                {/* Changelog Timeline */}
                <div className= {`flex flex-col w-[87%] max-w-4xl mx-auto mt-8 p-8 bg-(--buttonColor) rounded-3xl border-4 border-(--shadowColor)/50 shadow-xl overflow-hidden ${showChangelog ? '' : 'hidden'}`}>
                    <h2 className="title-font text-3xl font-extrabold text-(--textColor) mb-8 border-b-2 border-(--shadowColor)/30 pb-4">Changelog</h2>
                    <div className="relative border-l-4 border-(--shadowColor)/30 ml-4 md:ml-6 flex flex-col gap-8">
                        {(appliedSort ? aredlChangelogData : opinionChangelogData).map((log, index) => (
                            <div key={index} className="relative pl-8 md:pl-10 group">
                                <div className= "absolute w-5 h-5 rounded-full bg-(--shadowColor) shadow-[0_0_10px_var(--shadowColor)] -left-[0.7rem] top-1.5 border-4 border-(--buttonColor) transition-transform duration-300 group-hover:scale-125"></div>
                                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1">
                                    <span className="text-sm md:text-base font-bold text-(--shadowColor) whitespace-nowrap">{log.date}</span>
                                </div>
                                <p className="text-base md:text-lg text-(--textColor) opacity-80 font-medium">{log.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {legacy.length > 0 ? (
                    <ul className="legacylist flex flex-col items-center justify-center w-full">
                        {legacy.map((demon, i) => (
                            <DemonCard key={demon.name} demon={demon} index={i + 30} />
                        ))}
                    </ul>
                ) : (
                    <p className="text-2xl md:text-3xl font-extrabold text-(--textColor) italic mt-20 mb-20 tracking-wider">
                        Nothing here yet :/
                    </p>
                )}
            </div>
            { /*Comment Section */ }
            <Comments pageName="demonlist" />
        </main>
    );
}   