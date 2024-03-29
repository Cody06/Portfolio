'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import Column from './components/Column';
import CreateColumnModal from '../modals/CreateColumnModal';
import DeleteColumnModal from '../modals/DeleteColumnModal';
import { ColToDelete } from '../types';
import useStore from '../Store';
import Link from 'next/link';
import Dropdown from './components/Dropdown';
import DeleteBoardModal from '../modals/DeleteBoardModal';
import TitleInput from './components/TitleInput';
import { useRetrieveBoards } from '../useRetrieveBoards';
import { opaqueIconStyle } from '../ui/tailwindStyles';
import { transitionTiming } from '@/components/ui/tailwindStyles';

type Props = {
    boardId: string;
};

export default function MyBoard({ boardId }: Props) {
    const [isCreateColumnModalOpen, setIsCreateColumnModalOpen] = useState(false);
    const [isDeleteBoardModalOpen, setIsDeleteBoardModalOpen] = useState(false);
    const [isDeleteColumnModalOpen, setIsDeleteColumnModalOpen] = useState(false);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [colToDelete, setColToDelete] = useState<ColToDelete>();
    const { boards } = useStore();
    useRetrieveBoards();

    const selectedBoard = boards.filter((board) => board.id === boardId)[0];

    const titleExtraButtons = [
        {
            label: 'Edit title',
            onClick: () => setIsEditingTitle(true),
        },
        {
            label: 'Delete board',
            onClick: () => {
                setIsDeleteBoardModalOpen(true);
            },
        },
    ];

    return (
        <>
            <header className="flex gap-x-4 px-4">
                <Link href="/workboard" className={opaqueIconStyle}>
                    <FontAwesomeIcon icon={faCircleLeft} size="xl" />
                </Link>
                {isEditingTitle ? (
                    <TitleInput
                        boardId={boardId}
                        boardTitle={selectedBoard.title}
                        setIsEditingTitle={setIsEditingTitle}
                    />
                ) : (
                    <div className="flex gap-x-4 items-center">
                        <h1 className="text-2xl text-white font-bold">{selectedBoard?.title}</h1>
                        <Dropdown buttonsList={titleExtraButtons} elipsisStyle={opaqueIconStyle} />
                    </div>
                )}
            </header>
            <main className=" p-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-x-2 gap-y-6 flex-wrap">
                    {selectedBoard?.columns.map((column) => (
                        <Column
                            key={column.id}
                            boardId={boardId}
                            column={column}
                            setColToDelete={setColToDelete}
                            setIsDeleteColumnModalOpen={setIsDeleteColumnModalOpen}
                        />
                    ))}
                    <button
                        className={`text-white font-medium min-w-[18.75rem] h-[5rem] border border-dashed rounded-lg
                            hover:bg-sky-900 hover:border-solid ${transitionTiming}`}
                        onClick={() => setIsCreateColumnModalOpen(true)}
                    >
                        + Add column
                    </button>
                </div>
            </main>
            <CreateColumnModal
                boardId={boardId}
                isOpen={isCreateColumnModalOpen}
                requestClose={() => setIsCreateColumnModalOpen(false)}
            />
            <DeleteBoardModal
                boardId={boardId}
                boardTitle={selectedBoard?.title}
                isOpen={isDeleteBoardModalOpen}
                requestClose={() => setIsDeleteBoardModalOpen(false)}
            />
            <DeleteColumnModal
                boardId={boardId}
                col={colToDelete}
                isOpen={isDeleteColumnModalOpen}
                requestClose={() => setIsDeleteColumnModalOpen(false)}
            />
        </>
    );
}
