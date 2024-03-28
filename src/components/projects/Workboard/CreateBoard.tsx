'use client';
import { FormEvent, useState } from 'react';
import useStore from './Store';
import Input from '@/components/ui/Input';
import { MAX_BOARD_TITLE_LENGTH } from './data';
import PrimaryButton from './ui/PrimaryButton';

export default function CreateBoard() {
    const [boardTitle, setBoardTitle] = useState('');
    const { createBoard } = useStore();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createBoard(boardTitle);
        setBoardTitle('');
    };

    return (
        <section className="flex flex-col w-full bg-neutral-100 rounded-xl p-4">
            <h2 className="text-2xl font-bold text-center">Start a new project</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    id="title"
                    label="Title"
                    maxLength={MAX_BOARD_TITLE_LENGTH}
                    name="title"
                    type="text"
                    value={boardTitle}
                    onChange={(e) => setBoardTitle(e.target.value)}
                />
                <PrimaryButton label="Create board" disabled={!boardTitle} type="submit" />
            </form>
        </section>
    );
}
