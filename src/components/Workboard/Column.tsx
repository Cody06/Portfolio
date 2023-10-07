import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import { ColumnData, ItemToDelete } from './types';
import Dropdown from './Dropdown';
import NewCardInput from './NewCardInput';
import Card from './Card';

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
    const colTitleRef = useRef<HTMLDivElement>(null);

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

    const cancelEditColumn = () => {
        setColTitle(column.title);
        setShowEditCol(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (colTitleRef.current && !colTitleRef.current.contains(event.target)) {
                return cancelEditColumn();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    });

    return (
        <div className="bg-grey-90 w-[300px] rounded-lg">
            <div className="flex justify-between p-2 bg-grey-90 brightness-95 rounded-t-lg">
                {showEditCol ? (
                    <div ref={colTitleRef} className="flex gap-x-2">
                        <input
                            autoFocus
                            className="bg-white w-[240px]"
                            type="text"
                            value={colTitle}
                            onChange={handleChange}
                        />
                        <button
                            className="w-8 h-8 text-grey-100 rounded-full
                                hover:text-blue-100b hover:bg-grey-100 hover:bg-opacity-20"
                            onClick={() => {
                                onEditColumn(column.id, colTitle);
                                setShowEditCol(false);
                            }}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                    </div>
                ) : (
                    <>
                        <span className="font-bold my-auto">{column.title}</span>
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
                        onDeleteCard={onDeleteCard}
                        setItemToDelete={setItemToDelete}
                    />
                ))}

                {showCreateCard ? (
                    <NewCardInput
                        columnId={column.id}
                        onCreateCard={onCreateCard}
                        setShowCreateCard={setShowCreateCard}
                    />
                ) : (
                    <button
                        onClick={() => setShowCreateCard(!showCreateCard)}
                        className="w-max mx-auto p-1 text-grey-110 mt-auto hover:text-blue-100b"
                    >
                        + Add card
                    </button>
                )}
            </div>
        </div>
    );
};

export default Column;
