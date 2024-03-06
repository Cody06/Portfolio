'use client';
import Link from 'next/link';
import useStore from './Store';

type BoardCardProps = {
    id: string;
    title: string;
    creationDate: string;
};

function BoardCard({ id, title, creationDate }: BoardCardProps) {
    return (
        <article
            className="p-3 text-white rounded-lg shadow-md"
            style={{ backgroundColor: 'green' }}
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
    return (
        <section className="flex flex-col w-full bg-grey-90 rounded-xl p-4">
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
