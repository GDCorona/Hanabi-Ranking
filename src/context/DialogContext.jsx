import { createContext, useContext, useState, useEffect, useRef } from 'react';

const DialogContext = createContext();

export const useDialog = () => useContext(DialogContext);

export const DialogProvider = ({ children }) => {
    const [modal, setModal] = useState({ isOpen: false, message: "", options: {} });
    const [inputValue, setInputValue] = useState("");
    const promiseRef = useRef(null);
    useEffect(() => {
        const preloadImage = new Image();
        preloadImage.src = "/Photos/meme.jpg"; 
    }, []);
    
    const showDialog = (message, options = {}) => {
        setInputValue(options.defaultValue || "");
        setModal({ isOpen: true, message, options });
        return new Promise((resolve) => {
            promiseRef.current = resolve;
        });
    };

    const handleClose = (result) => {
        setModal(prev => ({ ...prev, isOpen: false }));
        setTimeout(() => {
            if (promiseRef.current) promiseRef.current(result);
        }, 300);
    };

    const handleInputResize = (e) => {
        setInputValue(e.target.value);
        e.target.style.height = "auto";
        e.target.style.height = (e.target.scrollHeight + 4) + "px";
    };

    return (
        <DialogContext.Provider value={{ showDialog }}>
            {/* Render whole website */}
            {children}
            {/* --- Custom Dialog --- */}
            <div 
                id="overlay" 
                className={`fixed inset-0 bg-(--textColor)/80 overflow-y-auto z-100 flex min-h-full items-center justify-center p-4 transition-opacity duration-300 ease-out ${modal.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div 
                    id="message-box" 
                    className={`flex flex-col bg-(--bgColor) text-(--textColor) rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-[80%] md:max-w-lg transition-all duration-500 ease-out transform ${modal.isOpen ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}`}
                >
                    <div id="message-text" className="text-base md:text-lg mb-2 font-medium leading-relaxed">
                        <p>{modal.message}</p>
                        
                        {modal.options.showMeme && (
                            <div className="mt-4 md:mt-6 flex justify-center w-full">
                                <img className="meme w-auto max-w-full h-auto max-h-50 md:max-h-70 rounded-xl shadow-lg" src="/Photos/meme.jpg" alt="Meme" />
                            </div>
                        )}

                        {modal.options.input && (
                            <textarea 
                                className="w-full p-3 md:p-4 my-3 md:my-4 font-medium border-2 border-(--shadowColor)/30 rounded-xl bg-(--buttonColor)/50 focus:outline-none focus:border-(--shadowColor) resize-none overflow-y-auto min-h-20 max-h-50 shadow-inner text-(--textColor)"
                                value={inputValue}
                                onChange={handleInputResize}
                                autoFocus
                            />
                        )}
                    </div>
                    <div id="message-actions" className="text-sm md:text-base flex flex-col-reverse items-end md:flex-row md:items-center justify-end gap-3 md:gap-4 shrink-0 mt-4">
                        {modal.options.confirm ? (
                            <>
                                <button onClick={() => handleClose(modal.options.input ? null : false)} className="no-btn cursor-pointer bg-(--textColor)/10 text-(--textColor) font-semibold px-6 py-2 rounded-xl hover:bg-(--hoverColor)/40 transition-colors">
                                    Cancel
                                </button>
                                <button onClick={() => handleClose(modal.options.input ? inputValue.trim() : true)} className="cursor-pointer bg-(--buttonColor) text-(--textColor) font-bold px-6 py-2 rounded-xl shadow-lg hover:bg-(--hoverColor) hover:text-(--shadowColor) hover:shadow-[0_0_10px_var(--shadowColor)] transition-all">
                                    {modal.options.yesText || "OK"}
                                </button>
                            </>
                        ) : (
                            <button onClick={() => handleClose(undefined)} className="cursor-pointer bg-(--buttonColor) text-(--textColor) font-bold px-6 py-2 rounded-xl shadow-lg hover:bg-(--hoverColor) hover:text-(--shadowColor) hover:shadow-[0_0_10px_var(--shadowColor)] transition-all">
                                Close
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </DialogContext.Provider>
    );
};