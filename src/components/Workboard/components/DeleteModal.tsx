import { ItemToDelete } from '../types';
import Modal from '@/components/Modal';
import ModalBody from '@/components/Modal/ModalBody';

interface Props {
    isOpen: boolean;
    item: ItemToDelete;
    onDeleteItem: (item: ItemToDelete) => void;
    requestClose: () => void;
}

const DeleteModal: React.FC<Props> = ({ isOpen, item, onDeleteItem, requestClose }) => (
    <Modal isOpen={isOpen} title={`Delete ${item.kind}`} requestClose={requestClose}>
        <ModalBody>
            <h1 className="mb-5">
                Are you sure you want to delete: <br />
                <strong>{item.text}</strong>
            </h1>
            <div className="flex gap-x-4">
                <button
                    className="w-full p-1 text-white bg-red border border-red rounded-md
                        hover:brightness-90 active:brightness-75"
                    onClick={() => {
                        onDeleteItem(item);
                        requestClose();
                    }}
                >
                    Yes, delete
                </button>
                <button
                    className="w-full p-1 text-grey-120 border border-grey-120 rounded-md
                        hover:bg-grey-100 hover:bg-opacity-20"
                    onClick={requestClose}
                >
                    Cancel
                </button>
            </div>
        </ModalBody>
    </Modal>
);

export default DeleteModal;
