'use client';
import Link from 'next/link';
import useStore from './Store';
import { useRetrieveBoards } from './useRetrieveBoards';
import { transitionTiming } from '@/components/ui/tailwindStyles';

type BoardCardProps = {
    id: string;
    title: string;
    creationDate: string;
};

function BoardCard({ id, title, creationDate }: BoardCardProps) {
    return (
        // TOOD: Pass the bg the color of the board
        <article
            className={`p-3 text-white rounded-lg shadow-lg bg-sky-600 hover:brightness-90 ${transitionTiming}`}
        >
            <Link href={`/workboard/board/${id}`}>
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <p className="text-sm">Created: {creationDate}</p>
            </Link>
        </article>
    );
}

export default function BoardsCollection() {
    const { boards } = useStore();
    useRetrieveBoards();

    return (
        <section className="flex flex-col w-full bg-neutral-100 rounded-xl p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">My boards</h2>
            {boards.length > 0 ? (
                <div className="space-y-2">
                    {boards.map(({ id, title, creationDate }) => (
                        <BoardCard key={id} id={id} title={title} creationDate={creationDate} />
                    ))}
                </div>
            ) : (
                <h3 className="text-center">Your created boards will be listed here...</h3>
            )}
        </section>
    );
}
