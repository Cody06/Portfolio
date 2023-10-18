import React, { useState } from 'react';
import { ColumnData, ItemToDelete } from '../types';
import Card from './Card';
import Dropdown from './Dropdown';
import NewCardInput from './NewCardInput';

interface Props {
    column: ColumnData;
    onCreateCard: (colId: string, cardText: string) => void;
    onDeleteCard: (item: ItemToDelete) => void;
    onEditCard: (cardId: string, cardText: string) => void;
    onEditColumn: (colId: string, colTitle: string) => void;
    setItemToDelete: React.Dispatch<React.SetStateAction<ItemToDelete | undefined>>;
}

const Column: React.FC<Props> = ({
    column,
    onCreateCard,
    onDeleteCard,
    onEditCard,
    onEditColumn,
    setItemToDelete,
}) => {
    const [colTitle, setColTitle] = useState(column.title);
    const [showCreateCard, setShowCreateCard] = useState(false);
    const [showEditCol, setShowEditCol] = useState(false);

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

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => setColTitle(ev.target.value);

    const handleClickOutside = () => {
        onEditColumn(column.id, colTitle);
        setShowEditCol(false);
    };

    return (
        <div className="bg-grey-90 w-[18.75rem] rounded-lg">
            <div className="flex justify-between p-2 bg-grey-90 brightness-95 rounded-t-lg">
                {showEditCol ? (
                    <input
                        autoFocus
                        className="bg-white w-full p-1"
                        type="text"
                        value={colTitle}
                        onBlur={handleClickOutside}
                        onChange={handleChange}
                    />
                ) : (
                    <>
                        <span className="font-bold my-auto overflow-hidden">{column.title}</span>
                        <Dropdown buttonsList={colExtraButtons} />
                    </>
                )}
            </div>

            <div
                id={column.id}
                className={`container flex flex-col gap-y-2 p-1 ${
                    !showCreateCard && 'min-h-[1rem]'
                }`}
            >
                {column.cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        onEditCard={onEditCard}
                        onDeleteCard={onDeleteCard}
                    />
                ))}
            </div>

            <div className="text-center p-1">
                {showCreateCard ? (
                    <NewCardInput
                        columnId={column.id}
                        onCreateCard={onCreateCard}
                        setShowCreateCard={setShowCreateCard}
                    />
                ) : (
                    <button
                        onClick={() => setShowCreateCard(!showCreateCard)}
                        className="p-1 text-grey-110 mt-auto hover:text-blue-100b"
                    >
                        + Add card
                    </button>
                )}
            </div>
        </div>
    );
};

export default Column;
