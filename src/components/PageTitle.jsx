import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTitle() {
    const location = useLocation();
    useEffect(() => {
        const path = location.pathname;
        let title = "Hanabi Ranking";
        if (path === '/demonlist') {
            title = "Demonlist - Hanabi Ranking";
        } else if (path.includes('/demoninfo')) {
            const searchParams = new URLSearchParams(location.search);
            const name = searchParams.get('name');
            const position = searchParams.get('position');
            if (name && position) {
                if (position === 'Legacy') {
                    title = `${name}`;
                } else {
                    title = `#${position} - ${name}`;
                }
            } else {
                title = "Demon Info - Hanabi Ranking";
            }
        } else if (path === '/waifu') {
            title = "Waifu - Hanabi Ranking";
        } else if (path === '/about') {
            title = "About - Hanabi Ranking";
        }
        document.title = title;
    }, [location.pathname, location.search]);
    return null;
}