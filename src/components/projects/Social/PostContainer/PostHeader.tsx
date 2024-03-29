import Link from 'next/link';
import { iconHoverBg } from '@/components/ui/tailwindStyles';

type HeaderProps = {
    creator: string;
    date: string;
    edited: boolean;
    isPostCreator: boolean;
};

export default function PostHeader({ creator, date, edited, isPostCreator }: HeaderProps) {
    const commonStyle = `border border-neutral-300 rounded-full px-2 font-bold`;
    return (
        <section className="flex justify-between">
            {isPostCreator ? (
                <span className={commonStyle}>{creator}</span>
            ) : (
                <Link
                    className={`text-sky-600 ${commonStyle} ${iconHoverBg}`}
                    href={`/social/profile/${creator}`}
                >
                    {creator}
                </Link>
            )}
            <span className="text-neutral-500 space-x-2">
                {edited && (
                    <>
                        <em className="text-xs">Edited</em>
                        <span>-</span>
                    </>
                )}
                <span>{date}</span>
            </span>
        </section>
    );
}
