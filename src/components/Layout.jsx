import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isGatesClosed, setIsGatesClosed] = useState(false);
    const [lockState, setLockState] = useState('idle');

    // No scrollbar when gates are closed
    useEffect(() => {
        if (isGatesClosed) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isGatesClosed]);
    // Gates transition logic
    const triggerTransition = (targetPath) => {
        if (targetPath === location.pathname) return;
        setIsGatesClosed(true);
        setTimeout(() => {
            setLockState('fadeIn');
            setTimeout(() => {
                navigate(targetPath);
                window.scrollTo(0, 0);
                setLockState('fadeOut');
                setTimeout(() => {
                    setIsGatesClosed(false); 
                    setLockState('idle');
                }, 800);
            }, 1500);
        }, 800); 
        
    };

    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
            {/* Navbar */}
            <Navbar onNavigate={triggerTransition} />
            {/* Page content */}
            <div className="grow flex flex-col w-full relative z-0">
                <Outlet context={{ triggerTransition, isGatesClosed }} />
            </div>
            {/* Footer */}
            <Footer onNavigate={triggerTransition} />
            {/* Transition gates */}
            <div 
                id="transition-container" 
                className={`active-transition pointer-events-none flex items-center justify-center ${isGatesClosed ? 'pointer-events-auto!' : 'pointer-events-none! gates-open'}`}
            >
                <div className="gate-red"></div>
                <div className="gate-cyan"></div>                
                {/* Lock icon */}
                <div className={`relative w-24 h-24 z-10 transition-opacity duration-300 ${lockState === 'idle' ? 'opacity-0' : (lockState === 'fadeIn' ? 'lock-animation-reverse' : 'lock-animation')}`}>
                    <img src="/Photos/lockIcon.png" alt="Lock" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    );
}