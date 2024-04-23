import React, { useEffect, useState } from 'react';
import { ListData, ListToDelete } from '../../types';
import Card from './Card';
import Dropdown from './Dropdown';
import NewCardInput from './NewCardInput';
import useStore from '../../Store';
import { baseIconStyle } from '../../ui/tailwindStyles';

type Props = {
    boardId: string;
    list: ListData;
    setListToDelete: React.Dispatch<React.SetStateAction<ListToDelete | undefined>>;
    setIsDeleteListModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function List({ boardId, list, setListToDelete, setIsDeleteListModalOpen }: Props) {
    const [listTitle, setListTitle] = useState(list.title);
    const [showCreateCard, setShowCreateCard] = useState(false);
    const [showEditList, setShowEditList] = useState(false);
    const [container, setContainer] = useState<Element | null>();
    const { editList, setListToDropCard } = useStore();

    const listExtraButtons = [
        {
            label: 'Edit list',
            onClick: () => setShowEditList(true),
        },
        {
            label: 'Delete list',
            onClick: () => {
                setListToDelete({ id: list.id, text: list.title });
                setIsDeleteListModalOpen(true);
            },
        },
    ];

    const handleClickOutside = () => {
        editList(boardId, list.id, listTitle);
        setShowEditList(false);
    };

    useEffect(() => {
        setContainer(document.querySelector(`#${list.id}`));
    }, []);

    const handleDragOver = (ev: any) => {
        if (!container) return;
        ev.preventDefault();
        const nextCard = getDragAfterElement(container, ev.clientY);
        setListToDropCard({ newListId: list.id, nextCardId: nextCard?.id });
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
        <article className="bg-neutral-100 w-[18.75rem] rounded-xl">
            <section className="flex justify-between px-3 py-2 bg-neutral-100 brightness-95 rounded-t-xl">
                {showEditList ? (
                    <input
                        autoFocus
                        className="bg-white w-full p-1"
                        type="text"
                        value={listTitle}
                        onBlur={handleClickOutside}
                        onChange={(e) => setListTitle(e.target.value)}
                    />
                ) : (
                    <>
                        <span className="font-bold my-auto overflow-hidden">{list.title}</span>
                        <Dropdown
                            buttonsList={listExtraButtons}
                            elipsisStyle={`text-neutral-500 ${baseIconStyle}`}
                        />
                    </>
                )}
            </section>

            <section
                id={list.id}
                className={`flex flex-col gap-y-3 mb-2 p-1 ${!showCreateCard && 'min-h-[2.5rem]'}`}
                onDragOver={handleDragOver}
            >
                {list.cards.map((card) => (
                    <Card key={card.id} boardId={boardId} listId={list.id} card={card} />
                ))}
            </section>

            <section className="text-center p-1">
                {showCreateCard ? (
                    <NewCardInput
                        boardId={boardId}
                        listId={list.id}
                        setShowCreateCard={setShowCreateCard}
                    />
                ) : (
                    <button
                        onClick={() => setShowCreateCard(!showCreateCard)}
                        className={`text-neutral-500 font-medium mt-auto ${baseIconStyle}`}
                    >
                        + Add card
                    </button>
                )}
            </section>
        </article>
    );
}
