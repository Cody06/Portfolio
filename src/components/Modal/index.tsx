import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import { useEffect, useState } from 'react';

interface Props {
    children: React.ReactNode;
    isOpen: boolean;
    title: string;
    requestClose: () => void;
}

interface ModalComponent extends React.FC<Props> {
    Body: typeof ModalBody;
}

const Modal: ModalComponent = ({ children, isOpen, title, requestClose }) => {
    // Prevent scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isOpen]);

    const fadeOut = () => {
        const modal = document.getElementById('modal-container');
        if (modal) modal.style.animation = 'modal_fade_out 200ms';
        setTimeout(() => {
            if (modal) {
                modal.style.display = 'none';
                modal.style.animation = '';
            }
            requestClose();
        }, 200);
    };

    return isOpen ? (
        <div
            id="modal-container"
            className="fixed inset-0 z-50 flex justify-center pt-10 md:pt-0 md:items-center
                bg-black bg-opacity-50 animate-modal-fade-in"
        >
            <div className="content-max-width h-max p-5 bg-grey-90 rounded-2xl">
                <ModalHeader title={title} requestClose={fadeOut} />
                <ModalBody>{children}</ModalBody>
            </div>
        </div>
    ) : null;
};

Modal.Body = ModalBody;

export default Modal;
