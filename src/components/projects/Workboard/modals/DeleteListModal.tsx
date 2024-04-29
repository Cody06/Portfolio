import { ListToDelete } from '../types';
import Modal from '@/components/ui/Modal';
import ModalBody from '@/components/ui/Modal/ModalBody';
import useStore from '../Store';
import CancelButton from '../ui/CancelButton';
import DeleteButton from '../ui/DeleteButton';

type Props = {
    boardId: string;
    isOpen: boolean;
    list?: ListToDelete;
    requestClose: () => void;
};

export default function DeleteListModal({ boardId, isOpen, list, requestClose }: Props) {
    const { deleteList } = useStore();
    if (!list) return;

    return (
        <Modal isOpen={isOpen} title="Delete list" requestClose={requestClose}>
            <ModalBody>
                <h1 className="mb-5">
                    Are you sure you want to delete list: <br />
                    <strong>{list.title}</strong>
                </h1>
                <div className="flex gap-x-4">
                    <CancelButton onClick={requestClose} />
                    <DeleteButton
                        label="Delete list"
                        onClick={() => {
                            deleteList(boardId, list.id);
                            requestClose();
                        }}
                    />
                </div>
            </ModalBody>
        </Modal>
    );
}
