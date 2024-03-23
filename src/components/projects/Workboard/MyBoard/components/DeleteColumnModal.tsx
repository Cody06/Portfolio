import { ColToDelete } from '../../types';
import Modal from '@/components/Modal';
import ModalBody from '@/components/Modal/ModalBody';
import useStore from '../../Store';

type Props = {
    boardId: string;
    isOpen: boolean;
    col?: ColToDelete;
    requestClose: () => void;
};

export default function DeleteColumnModal({ boardId, isOpen, col, requestClose }: Props) {
    const { deleteColumn } = useStore();
    if (!col) return;

    return (
        <Modal isOpen={isOpen} title="Delete column" requestClose={requestClose}>
            <ModalBody>
                <h1 className="mb-5">
                    Are you sure you want to delete column: <br />
                    <strong>{col.text}</strong>
                </h1>
                <div className="flex gap-x-4">
                    <button
                        className="w-full p-1 text-white bg-red border border-red rounded-md
                            hover:brightness-90 active:brightness-75"
                        onClick={() => {
                            deleteColumn(boardId, col.id);
                            requestClose();
                        }}
                    >
                        Delete column
                    </button>
                    <button
                        className="w-full p-1 text-neutral-800 border border-neutral-800 rounded-md
                            hover:bg-neutral-500 hover:bg-opacity-20"
                        onClick={requestClose}
                    >
                        Cancel
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
}
