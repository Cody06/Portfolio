'use client';
import { useState } from 'react';
import useStore from './Store';
import Input from '@/components/ui/Input';
import { MAX_BOARD_TITLE_LENGTH } from './data';

export default function CreateBoard() {
    const [boardTitle, setBoardTitle] = useState('');
    const { createBoard } = useStore();
    return (
        <section className="flex flex-col w-full bg-grey-90 rounded-xl p-4">
            <h2 className="text-2xl font-bold text-center">Start a new project</h2>
            <Input
                id="title"
                label="Title"
                maxLength={MAX_BOARD_TITLE_LENGTH}
                name="title"
                type="text"
                value={boardTitle}
                onChange={(e) => setBoardTitle(e.target.value)}
            />
            <button
                className="mt-2 bg-blue-100b rounded-md p-2 font-bold text-white"
                disabled={!boardTitle}
                onClick={() => {
                    createBoard(boardTitle);
                    setBoardTitle('');
                }}
            >
                Create board
            </button>
        </section>
    );
}
