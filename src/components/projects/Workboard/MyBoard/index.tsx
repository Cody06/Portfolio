'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import Column from './components/Column';
import CreateColumnModal from './components/CreateColumnModal';
import DeleteColumnModal from './components/DeleteColumnModal';
import { ColToDelete } from '../types';
import useStore from '../Store';
import Link from 'next/link';
import Dropdown from './components/Dropdown';
import DeleteBoardModal from './components/DeleteBoardModal';

type Props = {
    boardId: string;
};

export default function MyBoard({ boardId }: Props) {
    const [isCreateColumnModalOpen, setIsCreateColumnModalOpen] = useState(false);
    const [isDeleteBoardModalOpen, setIsDeleteBoardModalOpen] = useState(false);
    const [isDeleteColumnModalOpen, setIsDeleteColumnModalOpen] = useState(false);
    const [colToDelete, setColToDelete] = useState<ColToDelete>();
    const { boards } = useStore();

    const selectedBoard = boards.filter((board) => board.id === boardId)[0];

    // TODO: Re-enable in the future
    // useEffect(() => {
    //     const savedColumns = localStorage.getItem('columns');
    //     if (savedColumns) setColumns(JSON.parse(savedColumns));
    // }, []);
    // const saveColumns = (cols: ColumnData[]) => {
    //     setColumns(cols);
    //     localStorage.setItem('columns', JSON.stringify(cols));
    // };

    const titleExtraButtons = [
        {
            label: 'Edit title',
            onClick: () => console.log('editing title'),
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
            <header className="flex gap-x-4 items-center px-4">
                <Link href="/workboard" className="group">
                    <FontAwesomeIcon
                        className="text-white h-6 group-hover:text-orange-100"
                        icon={faCircleLeft}
                    />
                </Link>
                <h1 className="text-2xl text-white font-bold">{selectedBoard?.title}</h1>
                <Dropdown
                    buttonsList={titleExtraButtons}
                    elipsisStyle="text-white hover:text-orange-100"
                />
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
                        className="text-white min-w-[18.75rem] h-[5rem] border border-dashed rounded-lg
                            ease-in duration-200 hover:bg-blue-110 hover:border-solid"
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
