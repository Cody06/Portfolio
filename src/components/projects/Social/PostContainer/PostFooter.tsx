import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FooterProps } from './types';
import useStore from '../Store';
import { iconBgHover } from '@/components/ui/tailwindStyles';

export default function PostFooter({
    isPostCreator,
    numOfLikes,
    postId,
    setIsEditingPost,
}: FooterProps) {
    const { setIsDeletePostModalOpen, toggleLike } = useStore();
    const commonStyle = `rounded-full px-2 py-1 ${iconBgHover}`;

    return (
        <section className="flex gap-x-4 text-neutral-500">
            <div className="flex items-center gap-x-2">
                <button className={commonStyle} title="Like" onClick={() => toggleLike(postId)}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <span>{numOfLikes}</span>
            </div>
            {isPostCreator && (
                <>
                    <button
                        className={commonStyle}
                        title="Edit"
                        onClick={() => setIsEditingPost(true)}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>

                    <button
                        className={commonStyle}
                        title="Delete"
                        onClick={() => setIsDeletePostModalOpen(true, postId)}
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </>
            )}
        </section>
    );
}
