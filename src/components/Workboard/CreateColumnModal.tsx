import { useState } from 'react';
import Modal from '../Modal';
import ModalBody from '../Modal/ModalBody';

interface Props {
    isOpen: boolean;
    onCreateColumn: (colName: string) => void;
    requestClose: () => void;
}

const CreateColumnModal: React.FC<Props> = ({ isOpen, onCreateColumn, requestClose }) => {
    const [colName, setColName] = useState('');

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => setColName(ev.target.value);

    const disabled = colName.length === 0;

    return (
        <Modal isOpen={isOpen} title="Add a column" requestClose={requestClose}>
            <ModalBody>
                <div className="flex flex-col items-center gap-y-4">
                    <input
                        type="text"
                        className="p-2 rounded-md"
                        placeholder="Enter a column title"
                        value={colName}
                        onChange={handleChange}
                    />
                    <button
                        className={`w-max p-2 rounded-md
                            ${
                                disabled
                                    ? 'text-grey-100 bg-grey-90'
                                    : 'text-white bg-[#007bff] hover:brightness-90 active:brightness-75'
                            } `}
                        disabled={disabled}
                        onClick={() => {
                            onCreateColumn(colName);
                            setColName('');
                            requestClose();
                        }}
                    >
                        Create column
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default CreateColumnModal;
