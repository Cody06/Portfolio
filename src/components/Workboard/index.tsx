'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Column from './components/Column';
import CreateColumnModal from './components/CreateColumnModal';
import DeleteColumnModal from './components/DeleteColumnModal';
import getUniqueId from '@/utils/getUniqueId';
import { CardData, ColumnData, DropColumn, ColToDelete } from './types';

const Workboard = () => {
    const [isCreateColumnModalOpen, setIsCreateColumnModalOpen] = useState(false);
    const [isDeleteColumnModalOpen, setIsDeleteColumnModalOpen] = useState(false);
    const [colToDelete, setColToDelete] = useState<ColToDelete>();
    const [columns, setColumns] = useState<ColumnData[]>([]);
    const [dropCol, setDropCol] = useState<DropColumn>({
        newColId: undefined,
        nextCardId: undefined,
    });

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

    const insertBeforeAnotherCard = (dropCard: CardData) => {
        saveColumns(
            columns
                .map((oldCol) => {
                    return {
                        ...oldCol,
                        cards: oldCol.cards.filter((card) => card.id !== dropCard.id),
                    };
                })
                .map((col) => {
                    if (col.id === dropCol.newColId) {
                        const nextCardIndex = col.cards.findIndex(
                            (card) => card.id === dropCol.nextCardId,
                        );

                        return {
                            ...col,
                            cards: col.cards.toSpliced(nextCardIndex, 0, dropCard),
                        };
                    } else {
                        return col;
                    }
                }),
        );
    };

    const addToEndOfColumn = (dropCard: CardData) => {
        saveColumns(
            columns
                .map((oldCol) => {
                    return {
                        ...oldCol,
                        cards: oldCol.cards.filter((card) => card.id !== dropCard.id),
                    };
                })
                .map((col) => {
                    if (col.id === dropCol.newColId) {
                        return {
                            ...col,
                            cards: [...col.cards, dropCard],
                        };
                    } else {
                        return col;
                    }
                }),
        );
    };

    const handleDrop = (dropCard: CardData) => {
        if (dropCol.nextCardId) {
            insertBeforeAnotherCard(dropCard);
        } else {
            addToEndOfColumn(dropCard);
        }
    };

    return (
        <>
            <nav className="flex justify-between p-4 text-white bg-blue-110">
                <span className="font-bold">Workboard</span>
                <Link href="/" className="hover:text-orange-100" scroll={false}>
                    Back to Portfolio
                </Link>
            </nav>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 flex-wrap p-4">
                {columns.map((column) => (
                    <Column
                        key={column.id}
                        column={column}
                        onCreateCard={handleCreateCard}
                        onDeleteCard={handleDeleteCard}
                        onDrop={handleDrop}
                        onEditCard={handleEditCard}
                        onEditColumn={handleEditColumn}
                        setDropCol={setDropCol}
                        setColToDelete={setColToDelete}
                        setIsDeleteColumnModalOpen={setIsDeleteColumnModalOpen}
                    />
                ))}
                <button
                    className="text-white min-w-[18.75rem] h-[5rem] border border-dashed rounded-lg
                            ease-in duration-200 hover:bg-blue-110 hover:border-solid"
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

            <DeleteColumnModal
                isOpen={isDeleteColumnModalOpen}
                col={colToDelete}
                onDeleteCol={handleDeleteColumn}
                requestClose={() => setIsDeleteColumnModalOpen(false)}
            />
        </>
    );
};

export default Workboard;
