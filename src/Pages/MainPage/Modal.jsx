import React from 'react';

const Modal = ({ title, isOpen, message, onClose }) => {
    return (
        <div
            className={`${isOpen ? 'block' : 'hidden'
                } fixed z-10 inset-0 overflow-y-auto`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-center justify-center min-h-screen p-4 bg-gray-500 bg-opacity-50">

                <div className="modal-content bg-white rounded-md overflow-hidden shadow-md ">
                    <div className="p-4 flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>


                        <h3 className=" font-medium mb-2 mt-2 text-center" id="modal-title">
                            {title}
                        </h3>
                        <p className="text-gray-500 text-center text-sm">{message}</p>
                    </div>
                    <div className="p-4  text-center">
                        <button
                            className="px-4 py-2 text-sm w-full  rounded-sm bg-black text-white hover:bg-gray-600"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;
