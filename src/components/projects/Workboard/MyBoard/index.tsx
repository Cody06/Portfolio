'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import List from './components/List';
import CreateListModal from '../modals/CreateListModal';
import DeleteListModal from '../modals/DeleteListModal';
import { ListToDelete } from '../types';
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
    const [isCreateListModalOpen, setIsCreateListModalOpen] = useState(false);
    const [isDeleteBoardModalOpen, setIsDeleteBoardModalOpen] = useState(false);
    const [isDeleteListModalOpen, setIsDeleteListModalOpen] = useState(false);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [listToDelete, setListToDelete] = useState<ListToDelete>();
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
                    {selectedBoard?.lists.map((list) => (
                        <List
                            key={list.id}
                            boardId={boardId}
                            list={list}
                            setListToDelete={setListToDelete}
                            setIsDeleteListModalOpen={setIsDeleteListModalOpen}
                        />
                    ))}
                    <button
                        className={`text-white font-medium min-w-[18.75rem] h-[5rem] border border-dashed rounded-lg
                            hover:bg-sky-900 hover:border-solid ${transitionTiming}`}
                        onClick={() => setIsCreateListModalOpen(true)}
                    >
                        + Add list
                    </button>
                </div>
            </main>
            <CreateListModal
                boardId={boardId}
                isOpen={isCreateListModalOpen}
                requestClose={() => setIsCreateListModalOpen(false)}
            />
            <DeleteBoardModal
                boardId={boardId}
                boardTitle={selectedBoard?.title}
                isOpen={isDeleteBoardModalOpen}
                requestClose={() => setIsDeleteBoardModalOpen(false)}
            />
            <DeleteListModal
                boardId={boardId}
                list={listToDelete}
                isOpen={isDeleteListModalOpen}
                requestClose={() => setIsDeleteListModalOpen(false)}
            />
        </>
    );
}
