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

export default function CreateListModal({ boardId, isOpen, requestClose }: Props) {
    const [title, setTitle] = useState('');
    const { createList } = useStore();

    const clearInputAndClose = () => {
        setTitle('');
        requestClose();
    };

    const handleSubmit = () => {
        createList(boardId, title);
        clearInputAndClose();
    };

    return (
        <Modal isOpen={isOpen} title="Add a list" requestClose={clearInputAndClose}>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <Input
                        id="title"
                        label="Enter list title"
                        maxLength={MAX_BOARD_TITLE_LENGTH}
                        name="title"
                        type="text"
                        shadow
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <PrimaryButton label="Create list" disabled={!title} type="submit" />
                </form>
            </ModalBody>
        </Modal>
    );
}
