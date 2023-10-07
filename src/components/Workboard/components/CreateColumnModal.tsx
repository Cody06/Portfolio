import { useState } from 'react';
import Modal from '@/components/Modal';
import ModalBody from '@/components/Modal/ModalBody';

interface Props {
    isOpen: boolean;
    onCreateColumn: (colTitle: string) => void;
    requestClose: () => void;
}

const CreateColumnModal: React.FC<Props> = ({ isOpen, onCreateColumn, requestClose }) => {
    const [title, setTitle] = useState('');
    const disabled = title.length === 0;

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value);

    const clearInputAndClose = () => {
        setTitle('');
        requestClose();
    };

    return (
        <Modal isOpen={isOpen} title="Add a column" requestClose={clearInputAndClose}>
            <ModalBody>
                <div className="flex flex-col items-center gap-y-4">
                    <input
                        autoFocus
                        type="text"
                        className="p-2 rounded-md"
                        placeholder="Enter a column title"
                        value={title}
                        onChange={handleChange}
                    />
                    <button
                        className={`w-max p-2 rounded-md
                            ${
                                disabled
                                    ? 'text-grey-100 bg-grey-90'
                                    : 'text-white bg-blue-100b hover:brightness-90 active:brightness-75'
                            } `}
                        disabled={disabled}
                        onClick={() => {
                            onCreateColumn(title);
                            clearInputAndClose();
                        }}
                    >
                        Create column
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default CreateColumnModal;
