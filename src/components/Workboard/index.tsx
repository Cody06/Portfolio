'use client';
import Link from 'next/link';
import { useState } from 'react';
import Column from './Column';
import CreateColumnModal from './CreateColumnModal';
import getUniqueId from '@/utils/getUniqueId';
import DeleteColumnModal from './DeleteColumnModal';

export type CardData = {
    id: string;
    text: string;
};

export type ColumnData = {
    id: string;
    title: string;
    cards: CardData[];
};

const Workboard = () => {
    const [showCreateColumnModal, setShowCreateColumnModal] = useState(false);
    const [showDeleteColumnModal, setShowDeleteColumnModal] = useState(false);
    const [columns, setColumns] = useState<ColumnData[]>([]);

    const handleCreateColumn = (colTitle: string) => {
        const randomId = `col-${getUniqueId(colTitle)}`;
        setColumns((oldCols) => [...oldCols, { id: randomId, title: colTitle, cards: [] }]);
    };

    const handleDeleteColumn = (id: string) => alert(`Deleting col: ${id}`);

    const handleCreateCard = (colId: string, newCardText: string) => {
        const nextCard = {
            id: `card-${getUniqueId(newCardText)}`,
            text: newCardText,
        };

        const updatedColumns = columns.map((col) => {
            if (col.id === colId) {
                return {
                    ...col,
                    cards: [...col.cards, nextCard],
                };
            } else {
                return col;
            }
        });
        setColumns(updatedColumns);
    };

    return (
        <div className="fixed inset-0 bg-[#0079BF]">
            <nav className="flex justify-between p-4 text-white bg-[#094C72]">
                <span className="font-bold">Workboard</span>
                <Link href="/" className="hover:text-secondary-100">
                    Back to Portfolio
                </Link>
            </nav>

            <div className="flex gap-2 items-start flex-wrap p-4">
                {columns.map((column) => (
                    <Column key={column.id} column={column} onCreateCard={handleCreateCard} />
                ))}
                <button
                    className="text-white min-w-[300px] h-[80px] border border-dashed rounded-lg 
                        hover:text-secondary-100"
                    onClick={() => setShowCreateColumnModal(true)}
                >
                    + Add column
                </button>
            </div>

            <CreateColumnModal
                isOpen={showCreateColumnModal}
                onCreateColumn={handleCreateColumn}
                requestClose={() => setShowCreateColumnModal(false)}
            />
            <DeleteColumnModal
                colId="TBD"
                isOpen={showDeleteColumnModal}
                title="TBD"
                onDeleteColumn={handleDeleteColumn}
                requestClose={() => setShowDeleteColumnModal(false)}
            />
        </div>
    );
};

export default Workboard;
