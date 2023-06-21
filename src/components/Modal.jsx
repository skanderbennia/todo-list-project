import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from "framer-motion"
const Modal = ({ isOpen, onOk, onClose, children }) => {
    const [isBrowser, setIsBrowser] = useState(false);


    useEffect(() => {
        setIsBrowser(true);
    }, []);


    if (!isOpen || !isBrowser) {
        return null;
    }


    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full z-50 text-gray-600">
            <div className="flex items-center justify-center w-full h-full">
                <div className="modal-overlay absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
                <AnimatePresence>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="modal-container bg-white w-2/5 md:max-w-md px-6 py-4 rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-6">
                                <div className="text-base cursor-pointer" onClick={onClose}>Cancel</div>
                                <button
                                    onClick={onOk}
                                    className="cursor-pointer bg-gray-400 text-white py-2 px-10 rounded-md"
                                >
                                    Add
                                </button>
                            </div>
                            {children}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
