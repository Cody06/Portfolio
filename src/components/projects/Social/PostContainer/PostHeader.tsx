import Link from 'next/link';
import { HeaderProps } from './types';

export default function PostHeader({ creator, date, edited, isPostCreator }: HeaderProps) {
    return (
        <div className="flex justify-between">
            {isPostCreator ? (
                <span className="font-bold">{creator}</span>
            ) : (
                <Link
                    className="font-bold text-sky-600 hover:text-sky-900"
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
        </div>
    );
}
