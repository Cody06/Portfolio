import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { ColumnData } from './index';
import Dropdown from './Dropdown';
import DeleteColumnModal from './DeleteColumnModal';

interface Props {
    column: ColumnData;
    onCreateCard: (colId: string, newCardText: string) => void;
    onDeleteColumn: (colId: string) => void;
    onEditColumn: (colId: string, newColTitle: string) => void;
}

const Column: React.FC<Props> = ({ column, onCreateCard, onDeleteColumn, onEditColumn }) => {
    const [showCreateCard, setShowCreateCard] = useState(false);
    const [newCardText, setNewCardText] = useState('');
    const [isDeleteColumnModalOpen, setIsDeleteColumnModalOpen] = useState(false);
    const [showEditCol, setShowEditCol] = useState(false);
    const [newColTitle, setNewColTitle] = useState(column.title);

    const handleCardChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) =>
        setNewCardText(ev.target.value);

    const NewCard = (
        <textarea
            className="p-2 rounded-md shadow-md"
            value={newCardText}
            onChange={handleCardChange}
            placeholder="Enter a note"
        />
    );

    const clearAndCloseTextInput = () => {
        setNewCardText('');
        setShowCreateCard(false);
    };

    const CardsList = column.cards.map((card) => (
        <div className="p-2 bg-white rounded-md shadow-md" key={card.id}>
            {card.text}
        </div>
    ));

    const disabled = newCardText.length === 0;

    const colExtraButtons = [
        {
            label: 'Edit',
            onClick: () => setShowEditCol(true),
        },
        {
            label: 'Delete',
            onClick: () => setIsDeleteColumnModalOpen(true),
        },
    ];

    const handleColChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
        setNewColTitle(ev.target.value);

    return (
        <>
            <div className="bg-grey-90 min-w-[300px] rounded-lg">
                <div className="flex justify-between p-2 bg-primary-80 rounded-t-lg">
                    {showEditCol ? (
                        <div className="flex gap-x-2">
                            <input
                                autoFocus
                                className="bg-white w-[240px]"
                                type="text"
                                value={newColTitle}
                                onChange={handleColChange}
                            />
                            <button
                                className="text-grey-100 hover:text-[#007bff]"
                                onClick={() => {
                                    onEditColumn(column.id, newColTitle);
                                    setShowEditCol(false);
                                    setNewColTitle(column.title);
                                }}
                            >
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button
                                className="text-grey-100 hover:text-secondary-100"
                                onClick={() => {
                                    setNewColTitle(column.title);
                                    setShowEditCol(false);
                                }}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    ) : (
                        <>
                            <span className="font-bold">{column.title}</span>
                            <Dropdown buttonsList={colExtraButtons} />
                        </>
                    )}
                </div>
                <div className="flex flex-col gap-y-2 p-1 min-h-[80px]">
                    {CardsList}
                    {showCreateCard && NewCard}
                    {showCreateCard ? (
                        <div className="flex gap-x-2">
                            <button
                                className={`w-1/2  rounded-md 
                                    ${
                                        disabled
                                            ? 'text-grey-100 bg-grey-90'
                                            : 'text-white bg-[#007bff] hover:brightness-75'
                                    }`}
                                disabled={disabled}
                                onClick={() => {
                                    onCreateCard(column.id, newCardText);
                                    clearAndCloseTextInput();
                                }}
                            >
                                Add
                            </button>
                            <button
                                className="w-1/2 text-white bg-secondary-110 rounded-md hover:brightness-75"
                                onClick={clearAndCloseTextInput}
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setShowCreateCard(!showCreateCard)}
                            className="text-primary-110 mt-auto hover:text-[#007bff]"
                        >
                            + Add card
                        </button>
                    )}
                </div>
            </div>
            <DeleteColumnModal
                colId={column.id}
                isOpen={isDeleteColumnModalOpen}
                title={column.title}
                onDeleteColumn={onDeleteColumn}
                requestClose={() => setIsDeleteColumnModalOpen(false)}
            />
        </>
    );
};

export default Column;
