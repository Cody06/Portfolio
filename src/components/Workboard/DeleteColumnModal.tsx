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
}) => {
    console.log('Render delete COlumn Modal');

    return (
        <Modal isOpen={isOpen} title="Delete column" requestClose={requestClose}>
            <ModalBody>
                <h1>
                    Are you sure you want to delete: <span>{title}</span>
                </h1>
                <button onClick={() => onDeleteColumn(colId)}>Yes, delete</button>
                <button onClick={requestClose}>Cancel</button>
            </ModalBody>
        </Modal>
    );
};

export default DeleteColumnModal;
