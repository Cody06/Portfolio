import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import ModalBody from '@/components/ui/Modal/ModalBody';
import useStore from '../Store';
import PrimaryButton from '../ui/PrimaryButton';
import Input from '@/components/ui/Input';
import { MAX_BOARD_TITLE_LENGTH } from '../data';

type Props = {
    boardId: string;
    isOpen: boolean;
    requestClose: () => void;
};

export default function CreateColumnModal({ boardId, isOpen, requestClose }: Props) {
    const [title, setTitle] = useState('');
    const { createColumn } = useStore();

    const clearInputAndClose = () => {
        setTitle('');
        requestClose();
    };

    const handleSubmit = () => {
        createColumn(boardId, title);
        clearInputAndClose();
    };

    return (
        <Modal isOpen={isOpen} title="Add a column" requestClose={clearInputAndClose}>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <Input
                        id="title"
                        label="Enter a column title"
                        maxLength={MAX_BOARD_TITLE_LENGTH}
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <PrimaryButton label="Create column" disabled={!title} type="submit" />
                </form>
            </ModalBody>
        </Modal>
    );
}
