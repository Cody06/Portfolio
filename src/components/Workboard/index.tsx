'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Column from './components/Column';
import CreateColumnModal from './components/CreateColumnModal';
import DeleteModal from './components/DeleteModal';
import getUniqueId from '@/utils/getUniqueId';
import { ColumnData, ItemToDelete } from './types';

const Workboard = () => {
    const [isCreateColumnModalOpen, setIsCreateColumnModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<ItemToDelete>();
    const [columns, setColumns] = useState<ColumnData[]>([]);

    useEffect(() => {
        document.body.className = 'bg-blue-100';

        const savedColumns = localStorage.getItem('columns');
        if (savedColumns) setColumns(JSON.parse(savedColumns));
    }, []);

    const saveColumns = (cols: ColumnData[]) => {
        setColumns(cols);
        localStorage.setItem('columns', JSON.stringify(cols));
    };

    const handleCreateColumn = (colTitle: string) => {
        const randomId = `col-${getUniqueId(colTitle)}`;
        saveColumns([...columns, { id: randomId, title: colTitle, cards: [] }]);
    };

    const handleCreateCard = (colId: string, cardText: string) => {
        const newCard = {
            id: `card-${getUniqueId(cardText)}`,
            text: cardText,
        };

        saveColumns(
            columns.map((col) => {
                if (col.id === colId) {
                    return {
                        ...col,
                        cards: [...col.cards, newCard],
                    };
                } else {
                    return col;
                }
            }),
        );
    };

    const handleDeleteColumn = (colId: string) =>
        saveColumns(columns.filter((col) => col.id !== colId));

    const handleDeleteCard = (cardId: string) => {
        saveColumns(
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
        saveColumns(
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
        saveColumns(
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
            <nav className="flex justify-between p-4 text-white bg-blue-110">
                <span className="font-bold">Workboard</span>
                <Link href="/" className="hover:text-orange-100" scroll={false}>
                    Back to Portfolio
                </Link>
            </nav>

            <div className="flex gap-2 items-start flex-wrap p-4">
                {columns.map((column) => (
                    <Column
                        key={column.id}
                        column={column}
                        onCreateCard={handleCreateCard}
                        onDeleteCard={handleDeleteItem}
                        onEditCard={handleEditCard}
                        onEditColumn={handleEditColumn}
                        setItemToDelete={setItemToDelete}
                    />
                ))}
                <button
                    className="text-white min-w-[18.75rem] h-[5rem] border border-dashed rounded-lg 
                            hover:bg-blue-110 hover:border-solid"
                    onClick={() => setIsCreateColumnModalOpen(true)}
                >
                    + Add column
                </button>
            </div>
            <CreateColumnModal
                isOpen={isCreateColumnModalOpen}
                onCreateColumn={handleCreateColumn}
                requestClose={() => setIsCreateColumnModalOpen(false)}
            />
            {!!itemToDelete && (
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
