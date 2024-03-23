import { useState } from 'react';
import Modal from '@/components/Modal';
import ModalBody from '@/components/Modal/ModalBody';
import useStore from '../../Store';

type Props = {
    boardId: string;
    isOpen: boolean;
    requestClose: () => void;
};

export default function CreateColumnModal({ boardId, isOpen, requestClose }: Props) {
    const [title, setTitle] = useState('');
    const { createColumn } = useStore();

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
                        className={`w-max p-2 text-white bg-blue-500 rounded-md
                            ${!title ? 'opacity-25' : 'hover:brightness-90 active:brightness-75'} `}
                        disabled={!title}
                        onClick={() => {
                            createColumn(boardId, title);
                            clearInputAndClose();
                        }}
                    >
                        Create column
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
}
