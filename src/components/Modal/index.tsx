import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import { useEffect } from 'react';

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

    return isOpen ? (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-primary-80 max-w-[1400px] h-max p-5 rounded-2xl">
                <ModalHeader title={title} requestClose={requestClose} />
                <ModalBody>{children}</ModalBody>
            </div>
        </div>
    ) : null;
};

Modal.Body = ModalBody;

export default Modal;
