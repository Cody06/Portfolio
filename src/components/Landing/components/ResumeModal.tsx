import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
    isOpen: boolean;
    requestClose: () => void;
}

const ResumeModal: React.FC<Props> = ({ isOpen, requestClose }) => {
    if (isOpen) {
        // Prevent scroll
        document.body.style.overflow = 'hidden';

        return (
            <div
                className="fixed z-50 top-0 w-[100vw] h-[100vh] md:p-8 flex justify-center bg-black bg-opacity-50"
                onClick={requestClose}
            >
                <div className="w-full max-w-[1400px] p-4 bg-white md:rounded-3xl">
                    <button
                        className="float-right mb-2 w-6 rounded-full border
                            hover:bg-orange-100 hover:border-orange-100"
                        onClick={requestClose}
                    >
                        <FontAwesomeIcon icon={['fas', 'xmark']} />
                    </button>

                    <iframe
                        className="w-full h-[95%] rounded-2xl"
                        src={
                            process.env.PUBLIC_URL +
                            '/assets/Cody Miu - Software Developer - 2023.pdf'
                        }
                    />
                </div>
            </div>
        );
    }

    document.body.style.overflow = 'visible';
    return null;
};

export default ResumeModal;

/*
Notes:
To position the modal relative to the viewport, set position to fixed
*/
