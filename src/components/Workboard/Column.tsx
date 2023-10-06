import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { ColumnData, ItemToDelete } from './types';
import Dropdown from './Dropdown';
import NewCardInput from './NewCardInput';
import Card from './Card';

interface Props {
    column: ColumnData;
    onCreateCard: (colId: string, cardText: string) => void;
    onEditCard: (cardId: string, cardText: string) => void;
    onEditColumn: (colId: string, colTitle: string) => void;
    setItemToDelete: React.Dispatch<React.SetStateAction<ItemToDelete | undefined>>;
}

const Column: React.FC<Props> = ({
    column,
    onCreateCard,
    onEditCard,
    onEditColumn,
    setItemToDelete,
}) => {
    const [colTitle, setColTitle] = useState(column.title);
    const [isEditCardShown, setIsEditCardShown] = useState(false);
    const [newCardText, setNewCardText] = useState('');
    const [showCreateCard, setShowCreateCard] = useState(false);
    const [showEditCol, setShowEditCol] = useState(false);

    const disabled = newCardText.length === 0;

    const colExtraButtons = [
        {
            label: 'Edit column',
            onClick: () => setShowEditCol(true),
        },
        {
            label: 'Delete column',
            onClick: () => setItemToDelete({ id: column.id, kind: 'column', text: column.title }),
        },
    ];

    const handleCardChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) =>
        setNewCardText(ev.target.value);

    const clearAndCloseTextInput = () => {
        setNewCardText('');
        setShowCreateCard(false);
    };

    const handleColChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
        setColTitle(ev.target.value);

    return (
        <div className="bg-grey-90 w-[300px] rounded-lg">
            <div className="flex justify-between p-2 bg-grey-90 brightness-95 rounded-t-lg">
                {showEditCol ? (
                    <div className="flex gap-x-2">
                        <input
                            autoFocus
                            className="bg-white w-[240px]"
                            type="text"
                            value={colTitle}
                            onChange={handleColChange}
                        />
                        <button
                            className="text-grey-100 hover:text-blue-100b"
                            onClick={() => {
                                onEditColumn(column.id, colTitle);
                                setShowEditCol(false);
                                setColTitle(column.title);
                            }}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button
                            className="text-grey-100 hover:text-orange-100"
                            onClick={() => {
                                setColTitle(column.title);
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
                {column.cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        onEditCard={onEditCard}
                        setIsEditCardShown={setIsEditCardShown}
                        setItemToDelete={setItemToDelete}
                    />
                ))}

                {showCreateCard ? (
                    <>
                        <NewCardInput value={newCardText} onChange={handleCardChange} />
                        <div className="flex gap-x-2">
                            <button
                                className={`w-1/2 rounded-md 
                                    ${
                                        disabled
                                            ? 'text-grey-100 bg-grey-90'
                                            : 'text-white bg-blue-100b hover:brightness-90'
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
                                className="w-1/2 text-white bg-orange-100 rounded-md hover:brightness-90"
                                onClick={clearAndCloseTextInput}
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    !isEditCardShown && (
                        <button
                            onClick={() => setShowCreateCard(!showCreateCard)}
                            className="text-grey-110 mt-auto hover:text-blue-100b"
                        >
                            + Add card
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

export default Column;
