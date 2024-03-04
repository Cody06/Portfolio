import { ColToDelete } from '../types';
import Modal from '@/components/Modal';
import ModalBody from '@/components/Modal/ModalBody';

type Props = {
    isOpen: boolean;
    col: ColToDelete | undefined;
    onDeleteCol: (colId: string) => void;
    requestClose: () => void;
};

export default function DeleteColumnModal({ isOpen, col, onDeleteCol, requestClose }: Props) {
    if (!col) return;

    return (
        <Modal isOpen={isOpen} title="Delete column" requestClose={requestClose}>
            <ModalBody>
                <h1 className="mb-5">
                    Are you sure you want to delete: <br />
                    <strong>{col.text}</strong>
                </h1>
                <div className="flex gap-x-4">
                    <button
                        className="w-full p-1 text-white bg-red border border-red rounded-md
                            hover:brightness-90 active:brightness-75"
                        onClick={() => {
                            onDeleteCol(col.id);
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
}
