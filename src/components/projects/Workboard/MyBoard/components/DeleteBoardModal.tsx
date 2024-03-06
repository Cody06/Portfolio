import Modal from '@/components/Modal';
import ModalBody from '@/components/Modal/ModalBody';
import useStore from '../../Store';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
    boardId: string;
    isOpen: boolean;
    boardTitle?: string;
    requestClose: () => void;
};

export default function DeleteBoardModal({ boardId, boardTitle, isOpen, requestClose }: Props) {
    const [titleInput, setTitleInput] = useState('');
    const disabled = titleInput !== boardTitle;
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
                        className="border border-grey-120 rounded-md px-2"
                        type="text"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                    />
                    <div className="flex gap-x-4">
                        <button
                            className={`w-full p-1 rounded-md ${
                                disabled
                                    ? 'text-grey-120 bg-grey-100'
                                    : 'text-white bg-red border border-red hover:brightness-90 active:brightness-75'
                            }`}
                            disabled={disabled}
                            onClick={() => {
                                clearInputAndClose();
                                deleteBoard(boardId);
                                router.push('/workboard');
                            }}
                        >
                            Delete board
                        </button>
                        <button
                            className="w-full p-1 text-grey-120 border border-grey-120 rounded-md
                            hover:bg-grey-100 hover:bg-opacity-20"
                            onClick={clearInputAndClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
}
