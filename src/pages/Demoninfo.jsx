import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { CONFIG } from '../config';
import { demonList, tiers } from '../data/demondata';

export default function Demoninfo() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const name = searchParams.get('name');
    const position = searchParams.get('position');
    const baseDemon = useMemo(() => demonList.find(d => d.name === name), [name]);
    const [demonData, setDemonData] = useState(baseDemon);

    // --- Fetch AREDL data ---
    useEffect(() => {
        if (!baseDemon) return;
        window.scrollTo(0, 0);
        const fetchAredlData = async () => {
            try {
                const res = await fetch(`${CONFIG.API_BASE_URL}/api/demons?name=${encodeURIComponent(name)}`);
                const aredlData = await res.json();
                if (aredlData) {
                    let newDifficulty = baseDemon.difficulty;
                    if (aredlData.aredlRank && aredlData.aredlRank <= 150) {
                        newDifficulty = `Top ${aredlData.aredlRank} Demon`;
                    } else if (aredlData.difficulty) {
                        newDifficulty = aredlData.difficulty + " tier NLW";
                    }
                    // Update state with fetched difficulty
                    setDemonData(prev => ({ ...prev, difficulty: newDifficulty }));
                }
            } catch (err) {
                console.error("Failed to fetch AREDL data:", err);
            }
        };
        fetchAredlData();
    }, [name, baseDemon]);

    // --- Difficulty Bar ---
    const [barWidth, setBarWidth] = useState(0);
    const barRef = useRef(null);
    const diffValue = demonData?.difficultyValue || 0;
    const tierFloor = Math.floor(diffValue);
    const tierCeil = Math.ceil(diffValue);
    const progress = (diffValue - tierFloor) * 100;
    const leftTier = tiers[tierFloor] || { name: "", color: "#ccc" };
    const rightTier = tiers[tierCeil] || { name: "", color: "#ccc" };

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setBarWidth(progress);
                }
            });
        }, { threshold: 0.3 });
        if (barRef.current) observer.observe(barRef.current);
        return () => observer.disconnect();
    }, [progress]);

    // --- Get opinion from difficulty value ---
    const getOpinionFromValue = (value, demonOpinion) => {
        const tierIndex = Math.floor(value);
        const nextTierIndex = tierIndex + 1;
        const prevTierIndex = tierIndex - 1;
        const tier = tiers[tierIndex] ? tiers[tierIndex].name : "Unknown";
        const nextTier = tiers[nextTierIndex] ? tiers[nextTierIndex].name : null;
        const prevTier = tiers[prevTierIndex] ? tiers[prevTierIndex].name : null;
        const decimal = Number(value - tierIndex).toFixed(2);

        if (tierIndex >= tiers.length - 2) { // List worthy
            if (decimal < 0.1 && tierIndex === tiers.length - 2) {
                return `High ${prevTier} tier NLW/ Top 150 Demonlist`; // Borderline NLW
            }
            return demonOpinion;
        } 
        else {
            if (decimal < 0.1 && prevTier) {
                return `High ${prevTier}/ Low ${tier} tier NLW`;
            }
            if (decimal > 0.9 && nextTier) {
                if (tierIndex === tiers.length - 3) {
                    return `High ${tier} tier NLW/ Top 150 Demonlist`; // Borderline list worthy
                }
                return `High ${tier}/ Low ${nextTier} tier NLW`;
            }
            // Normal ranges
            if (decimal <= 0.3) return `Low ${tier} tier NLW`;
            if (decimal <= 0.4) return `Low - Mid ${tier} tier NLW`;
            if (decimal <= 0.6) return `Mid ${tier} tier NLW`;
            if (decimal <= 0.7) return `Mid - High ${tier} tier NLW`;
            return `High ${tier} tier NLW`;
        }
    };
    if (!demonData) {
        return (
            <main className="min-h-screen pt-40 flex justify-center">
                <p className="text-red-400 text-3xl font-bold">Demon not found.</p>
            </main>
        );
    }

    // -- Info fields --
    const fields = [
        { label: "Creator", value: demonData.creator },
        { label: "FPS", value: demonData.fps },
        { label: "Attempts", value: demonData.attempts },
        { label: "Worst Fail", value: demonData.worstFail },
        { label: "Enjoyment", value: demonData.enjoyment },
        { label: "Completion Date", value: demonData.date },
        demonData.peakRank ? { label: "List placement when completed", value: demonData.peakRank } : null,
        { label: "Difficulty", value: demonData.difficulty },
        { label: "My Difficulty", value: getOpinionFromValue(demonData.difficultyValue, demonData.opinion) }
    ].filter(Boolean); // Removes null entries if undefined

    return (
        <main className="relative min-h-screen pt-40 pb-20">
            {/* Demon Background */}
            {createPortal(
                <div
                    className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-1 blur-sm brightness-50 contrast-120"
                    style={{ backgroundImage: `url(${demonData.image})` }}
                />, 
                document.body
            )}
            <div className="max-w-6xl mx-auto text-2xl text-(--textColor) leading-12 px-4 sm:px-6">
                <div className="bg-(--bgColor)/50 p-8 rounded-lg shadow-lg space-y-6">
                    <h2 className="text-center font-extrabold md:text-6xl text-4xl wrap-break-word mt-5 mb-15">
                        {position === 'Legacy' ? demonData.name : `#${position} - ${demonData.name}`}
                    </h2>
                    <hr className="border-t-2 border-(--textColor)/50" />
                    <div>
                        <div className="flex flex-col md:flex-row gap-20 items-start mb-8">
                            {/* Left column: Video */}
                            <div className="w-full md:w-1/2 mt-4">
                                <iframe 
                                    className="rounded aspect-video w-full" 
                                    src={`https://www.youtube.com/embed/${demonData.video}`} 
                                    title="YouTube video player" 
                                    allowFullScreen
                                ></iframe>
                            </div> 
                            {/* Right column: Info */}
                            <div className="w-full md:w-1/2 text-left">
                                {fields.map((field, index) => (
                                    <p key={index} className="font-bold">
                                        <strong>{field.label}: </strong>
                                        <span className="font-normal whitespace-pre-wrap">{field.value}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <br />
                        {/* Difficulty Bar */}
                        <div className="mt-4">
                            <div className="flex justify-between text-2xl font-bold mb-2">
                                <span style={{ color: leftTier.color }}>{leftTier.name}</span>
                                <span style={{ color: rightTier.color }}>{rightTier.name}</span>
                            </div>
                            <div className="relative w-full h-9 bg-gray-300 rounded overflow-hidden">
                                <div 
                                    ref={barRef}
                                    className="absolute top-0 left-0 h-full transition-all duration-1500 ease-out" 
                                    style={{ 
                                        width: `${barWidth}%`, 
                                        background: `linear-gradient(to right, ${leftTier.color}, ${rightTier.color})` 
                                    }}
                                ></div>
                            </div>
                        </div>
                        {/* Back Button */}
                        <div className="flex justify-center">
                            <button 
                                onClick={() => navigate(-1)} 
                                className="mt-10 bg-(--buttonColor) text-(--textColor) font-bold px-5 py-2 rounded-xl shadow-lg ring-2 transition-all duration-500 ease-in-out hover:bg-(--hoverColor) hover:shadow-[0_0_10px_var(--shadowColor)] hover:text-(--shadowColor) cursor-pointer"
                            >
                                ← Back to list
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}