import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageTitle from './components/PageTitle';
import Layout from './components/Layout';
import Home from './pages/Home';
import Demonlist from './pages/Demonlist';
import Demoninfo from './pages/Demoninfo';
import Waifu from './pages/Waifu';
import About from './pages/About';
import { demonList } from './data/demondata';

export default function App() {
    useEffect(() => {
        // --- Global Asset Preloader ---
        const preloadImage = (src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = resolve;
                img.src = src;
            });
        };
        const runPreloader = async () => {
            const bgImages = [
                '/Photos/homeBG.gif',            
                '/Demonlist/demonlistBG.jpg',    
                '/Waifu/waifuBG.jpg',            
                '/About/background.gif',
                '/About/background1.gif',
                '/About/background2.gif',
                '/About/background3.gif',
                '/About/background4.gif',
                '/About/background5.gif',
                '/About/background6.gif',
                '/About/background7.gif',
            ];
            // Load all backgrounds
            await Promise.all(bgImages.map(preloadImage));
            // Load all demon thumbnails
            const demonThumbnails = demonList.map(demon => demon.image);
            await Promise.all(demonThumbnails.map(preloadImage));
        };
        runPreloader();
    }, []);
    return (
        <>
            <PageTitle />  
            <Routes>                
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="demonlist" element={<Demonlist />} />
                    <Route path="demoninfo" element={<Demoninfo />} />
                    <Route path="waifu" element={<Waifu />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </>
    );
}
