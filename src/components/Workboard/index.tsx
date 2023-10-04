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

    const handleDeleteColumn = (colId: string) =>
        setColumns(columns.filter((col) => col.id !== colId));

    const handleDeleteItem = (item: ItemToDelete) => {
        if (item.kind === 'card') handleDeleteCard(item.id);
        if (item.kind === 'column') handleDeleteColumn(item.id);
    };

    const handleEditColumn = (colId: string, newColTitle: string) => {
        setColumns(
            columns.map((col) => {
                if (col.id === colId) {
                    return {
                        ...col,
                        title: newColTitle,
                    };
                } else {
                    return col;
                }
            }),
        );
    };

    const handleCreateCard = (colId: string, newCardText: string) => {
        const nextCard = {
            id: `card-${getUniqueId(newCardText)}`,
            text: newCardText,
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

    return (
        <>
            <div className="fixed inset-0 bg-[#0079BF]">
                <nav className="flex justify-between p-4 text-white bg-[#094C72]">
                    <span className="font-bold">Workboard</span>
                    <Link href="/" className="hover:text-secondary-100">
                        Back to Portfolio
                    </Link>
                </nav>

                <div className="flex gap-2 items-start flex-wrap p-4">
                    {columns.map((column) => (
                        <Column
                            key={column.id}
                            column={column}
                            onCreateCard={handleCreateCard}
                            setItemToDelete={setItemToDelete}
                            onEditColumn={handleEditColumn}
                        />
                    ))}
                    <button
                        className="text-white min-w-[300px] h-[80px] border border-dashed rounded-lg 
                            hover:text-secondary-100"
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
