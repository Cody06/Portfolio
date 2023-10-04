import Modal from '../Modal';
import ModalBody from '../Modal/ModalBody';

interface Props {
    colId: string;
    isOpen: boolean;
    title: string;
    onDeleteColumn: (id: string) => void;
    requestClose: () => void;
}

const DeleteColumnModal: React.FC<Props> = ({
    colId,
    isOpen,
    title,
    onDeleteColumn,
    requestClose,
}) => (
    <Modal isOpen={isOpen} title="Delete column" requestClose={requestClose}>
        <ModalBody>
            <h1 className="mb-5">
                Are you sure you want to delete: <br />
                <strong>{title}</strong>
            </h1>
            <div className="flex gap-x-4">
                <button
                    className="w-1/2 p-1 text-white bg-error-100 border border-error-100 rounded-md
                        hover:brightness-75"
                    onClick={() => {
                        onDeleteColumn(colId);
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

export default DeleteColumnModal;
