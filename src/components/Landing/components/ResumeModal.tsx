import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

interface Props {
    isOpen: boolean;
    requestClose: () => void;
}

const ResumeModal: React.FC<Props> = ({ isOpen, requestClose }) => {
    useEffect(() => {
        // Prevent scroll
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isOpen]);

    return isOpen ? (
        <div
            className="fixed z-50 top-0 w-[100vw] h-[100vh] md:p-8 flex justify-center bg-black bg-opacity-50"
            onClick={requestClose}
        >
            <div className="w-full max-w-[1400px] p-4 bg-white md:rounded-3xl">
                <button
                    className="float-right mb-2 w-6 rounded-full border
                            hover:bg-secondary-100 hover:border-secondary-100"
                    onClick={requestClose}
                >
                    <FontAwesomeIcon icon={['fas', 'xmark']} />
                </button>

                <iframe
                    className="w-full h-[95%] rounded-2xl"
                    src={
                        process.env.PUBLIC_URL + '/assets/Cody Miu - Software Developer - 2023.pdf'
                    }
                />
            </div>
        </div>
    ) : null;
};

export default ResumeModal;

/*
Notes:
To position the modal relative to the viewport, set position to fixed
*/
