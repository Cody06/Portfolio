import { ItemToDelete } from './types';
import Modal from '../Modal';
import ModalBody from '../Modal/ModalBody';

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
                    className="w-1/2 p-1 text-white bg-error-100 border border-error-100 rounded-md
                        hover:brightness-75"
                    onClick={() => {
                        onDeleteItem(item);
                        requestClose();
                    }}
                >
                    Yes, delete
                </button>
                <button
                    className="w-1/2 p-1 border rounded-md hover:text-secondary-100"
                    onClick={requestClose}
                >
                    Cancel
                </button>
            </div>
        </ModalBody>
    </Modal>
);

export default DeleteModal;
