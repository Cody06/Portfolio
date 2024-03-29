import { ColToDelete } from '../types';
import Modal from '@/components/ui/Modal';
import ModalBody from '@/components/ui/Modal/ModalBody';
import useStore from '../Store';
import CancelButton from '../ui/CancelButton';
import DeleteButton from '../ui/DeleteButton';

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
                    <CancelButton onClick={requestClose} />
                    <DeleteButton
                        label="Delete column"
                        onClick={() => {
                            deleteColumn(boardId, col.id);
                            requestClose();
                        }}
                    />
                </div>
            </ModalBody>
        </Modal>
    );
}
