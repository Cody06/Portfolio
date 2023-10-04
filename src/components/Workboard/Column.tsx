import React, { useState } from 'react';
import { ColumnData } from './index';
import Dropdown from './Dropdown';

interface Props {
    column: ColumnData;
    onCreateCard: (colId: string, newCardText: string) => void;
}

const Column: React.FC<Props> = ({ column, onCreateCard }) => {
    const [showCreateCard, setShowCreateCard] = useState(false);
    const [newCardText, setNewCardText] = useState('');

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
            onClick: () => console.log('Edit item'),
        },
        {
            label: 'Delete',
            onClick: () => console.log('Delete item'),
        },
    ];

    return (
        <div className="bg-grey-90 min-w-[300px] rounded-lg">
            <div className="flex justify-between p-2 bg-primary-80 rounded-t-lg">
                <span className="font-bold">{column.title}</span>
                {/* TODO: Implement dropdown with the corect button calls */}
                {/* <Dropdown buttonsList={colExtraButtons} /> */}
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
    );
};

export default Column;
