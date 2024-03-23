import React, { useEffect, useState } from 'react';
import { ColumnData, ColToDelete } from '../../types';
import Card from './Card';
import Dropdown from './Dropdown';
import NewCardInput from './NewCardInput';
import useStore from '../../Store';

type Props = {
    boardId: string;
    column: ColumnData;
    setColToDelete: React.Dispatch<React.SetStateAction<ColToDelete | undefined>>;
    setIsDeleteColumnModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Column({
    boardId,
    column,
    setColToDelete,
    setIsDeleteColumnModalOpen,
}: Props) {
    const [colTitle, setColTitle] = useState(column.title);
    const [showCreateCard, setShowCreateCard] = useState(false);
    const [showEditCol, setShowEditCol] = useState(false);
    const [container, setContainer] = useState<Element | null>();
    const { editColumn, setColumnToDropCard } = useStore();

    const colExtraButtons = [
        {
            label: 'Edit column',
            onClick: () => setShowEditCol(true),
        },
        {
            label: 'Delete column',
            onClick: () => {
                setColToDelete({ id: column.id, text: column.title });
                setIsDeleteColumnModalOpen(true);
            },
        },
    ];

    const handleClickOutside = () => {
        editColumn(boardId, column.id, colTitle);
        setShowEditCol(false);
    };

    useEffect(() => {
        setContainer(document.querySelector(`#${column.id}`));
    }, []);

    const handleDragOver = (ev: any) => {
        if (!container) return;
        ev.preventDefault();
        const nextCard = getDragAfterElement(container, ev.clientY);
        setColumnToDropCard({ newColId: column.id, nextCardId: nextCard?.id });
    };

    const getDragAfterElement = (container: any, mousePosY: number) => {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        return draggableElements.reduce(
            (closest, containerChild) => {
                const boundingBox = containerChild.getBoundingClientRect();
                const offset = mousePosY - boundingBox.top - boundingBox.height / 2;
                const aboveElementHoveringOver = offset < 0;
                const aboveClosestElement = offset > closest.offset;

                if (aboveElementHoveringOver && aboveClosestElement) {
                    return { offset: offset, element: containerChild };
                } else {
                    return closest;
                }
            },
            {
                offset: Number.NEGATIVE_INFINITY,
            },
        ).element;
    };

    return (
        <div className="bg-neutral-100 w-[18.75rem] rounded-lg">
            <div className="flex justify-between p-2 bg-neutral-100 brightness-95 rounded-t-lg">
                {showEditCol ? (
                    <input
                        autoFocus
                        className="bg-white w-full p-1"
                        type="text"
                        value={colTitle}
                        onBlur={handleClickOutside}
                        onChange={(e) => setColTitle(e.target.value)}
                    />
                ) : (
                    <>
                        <span className="font-bold my-auto overflow-hidden">{column.title}</span>
                        <Dropdown
                            buttonsList={colExtraButtons}
                            elipsisStyle="text-neutral-500 hover:text-amber-500"
                        />
                    </>
                )}
            </div>

            <div
                id={column.id}
                className={`flex flex-col gap-y-2 p-1 ${!showCreateCard && 'min-h-[2.5rem]'}`}
                onDragOver={handleDragOver}
            >
                {column.cards.map((card) => (
                    <Card key={card.id} boardId={boardId} colId={column.id} card={card} />
                ))}
            </div>

            <div className="text-center p-1">
                {showCreateCard ? (
                    <NewCardInput
                        boardId={boardId}
                        columnId={column.id}
                        setShowCreateCard={setShowCreateCard}
                    />
                ) : (
                    <button
                        onClick={() => setShowCreateCard(!showCreateCard)}
                        className="p-1 text-grey-110 mt-auto hover:text-amber-500"
                    >
                        + Add card
                    </button>
                )}
            </div>
        </div>
    );
}
