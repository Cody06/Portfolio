'use client';
import Link from 'next/link';
import { useState } from 'react';
import Column from './Column';
import CreateColumnModal from './CreateColumnModal';
import getUniqueId from '@/utils/getUniqueId';
import DeleteModal from './DeleteModal';
import { ColumnData, ItemToDelete } from './types';

const Workboard = () => {
    const [isCreateColumnModalOpen, setIsCreateColumnModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<ItemToDelete>();
    const [columns, setColumns] = useState<ColumnData[]>([]);

    const handleCreateColumn = (colTitle: string) => {
        const randomId = `col-${getUniqueId(colTitle)}`;
        setColumns((oldCols) => [...oldCols, { id: randomId, title: colTitle, cards: [] }]);
    };

    const handleCreateCard = (colId: string, cardText: string) => {
        const nextCard = {
            id: `card-${getUniqueId(cardText)}`,
            text: cardText,
        };

        setColumns(
            columns.map((col) => {
                if (col.id === colId) {
                    return {
                        ...col,
                        cards: [...col.cards, nextCard],
                    };
                } else {
                    return col;
                }
            }),
        );
    };

    const handleDeleteColumn = (colId: string) =>
        setColumns(columns.filter((col) => col.id !== colId));

    const handleDeleteCard = (cardId: string) => {
        setColumns(
            columns.map((col) => {
                return {
                    ...col,
                    cards: col.cards.filter((card) => card.id !== cardId),
                };
            }),
        );
    };

    const handleDeleteItem = (item: ItemToDelete) => {
        if (item.kind === 'card') handleDeleteCard(item.id);
        if (item.kind === 'column') handleDeleteColumn(item.id);
    };

    const handleEditColumn = (colId: string, colTitle: string) => {
        setColumns(
            columns.map((col) => {
                if (col.id === colId) {
                    return {
                        ...col,
                        title: colTitle,
                    };
                } else {
                    return col;
                }
            }),
        );
    };

    const handleEditCard = (cardId: string, cardText: string) => {
        setColumns(
            columns.map((col) => {
                return {
                    ...col,
                    cards: col.cards.map((card) => {
                        if (card.id === cardId) {
                            return {
                                ...card,
                                text: cardText,
                            };
                        } else {
                            return card;
                        }
                    }),
                };
            }),
        );
    };

    return (
        <>
            <div className="fixed inset-0 bg-blue-100">
                <nav className="flex justify-between p-4 text-white bg-blue-110">
                    <span className="font-bold">Workboard</span>
                    <Link href="/" className="hover:text-orange-100">
                        Back to Portfolio
                    </Link>
                </nav>

                <div className="flex gap-2 items-start flex-wrap p-4">
                    {columns.map((column) => (
                        <Column
                            key={column.id}
                            column={column}
                            onCreateCard={handleCreateCard}
                            onEditCard={handleEditCard}
                            onEditColumn={handleEditColumn}
                            setItemToDelete={setItemToDelete}
                        />
                    ))}
                    <button
                        className="text-white min-w-[300px] h-[80px] border border-dashed rounded-lg 
                            hover:text-orange-100"
                        onClick={() => setIsCreateColumnModalOpen(true)}
                    >
                        + Add column
                    </button>
                </div>
            </div>
            <CreateColumnModal
                isOpen={isCreateColumnModalOpen}
                onCreateColumn={handleCreateColumn}
                requestClose={() => setIsCreateColumnModalOpen(false)}
            />
            {itemToDelete && (
                <DeleteModal
                    isOpen={!!itemToDelete}
                    item={itemToDelete}
                    onDeleteItem={handleDeleteItem}
                    requestClose={() => setItemToDelete(undefined)}
                />
            )}
        </>
    );
};

export default Workboard;
