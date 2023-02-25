import React from 'react';

const SuccessModal = ({ isOpen, message, onClose }) => {
    return (
        <div
            className={`${isOpen ? 'block' : 'hidden'
                } fixed z-10 inset-0 overflow-y-auto`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-center justify-center min-h-screen p-4 bg-gray-500 bg-opacity-50">

                <div className="modal-content bg-white rounded-lg overflow-hidden shadow-md ">
                    <div className="p-4 flex flex-col items-center">
                        <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <h3 className=" font-medium mb-2 mt-4 text-center" id="modal-title">
                            Success
                        </h3>
                        <p className="text-gray-500 text-center text-sm">{message}</p>
                    </div>
                    <div className="p-4  text-center">
                        <button
                            className="px-4 py-2 text-sm w-full  rounded-sm bg-black text-white hover:bg-green-600"
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

export default SuccessModal;
