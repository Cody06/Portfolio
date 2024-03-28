import Modal from '@/components/Modal';
import ModalBody from '@/components/Modal/ModalBody';
import useStore from '../../Store';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CancelButton from '../../ui/CancelButton';
import DeleteButton from '../../ui/DeleteButton';

type Props = {
    boardId: string;
    isOpen: boolean;
    boardTitle?: string;
    requestClose: () => void;
};

export default function DeleteBoardModal({ boardId, boardTitle, isOpen, requestClose }: Props) {
    const [titleInput, setTitleInput] = useState('');
    const isDisabled = titleInput !== boardTitle;
    const { deleteBoard } = useStore();
    const router = useRouter();
    if (!boardTitle) return;

    const clearInputAndClose = () => {
        setTitleInput('');
        requestClose();
    };

    return (
        <Modal isOpen={isOpen} title="Delete board" requestClose={clearInputAndClose}>
            <ModalBody>
                <h1 className="mb-5 font-bold">
                    You are about to delete board: <br />
                    <strong>{boardTitle}</strong>
                </h1>
                <h2 className="mb-5">
                    Once you delete a board, there is no going back. Please be certain.
                </h2>
                <div className="flex flex-col gap-y-3">
                    <label htmlFor="titleInput">
                        Type <strong>{boardTitle}</strong> to proceed with the deletion:
                    </label>
                    <input
                        id="titleInput"
                        className="border border-neutral-800 rounded-lg p-2"
                        type="text"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                    />
                    <div className="flex gap-x-4">
                        <CancelButton onClick={clearInputAndClose} />
                        <DeleteButton
                            label="Delete board"
                            disabled={isDisabled}
                            onClick={() => {
                                clearInputAndClose();
                                deleteBoard(boardId);
                                router.push('/workboard');
                            }}
                        />
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
}
