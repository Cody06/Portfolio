import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FooterProps } from './types';
import useStore from '../Store';

export default function PostFooter({
    isPostCreator,
    numOfLikes,
    postId,
    setIsEditingPost,
}: FooterProps) {
    const { setIsDeletePostModalOpen, toggleLike } = useStore();
    return (
        <div className="space-x-4 text-grey-100">
            <button
                className="space-x-2 hover:text-red"
                title="Like"
                onClick={() => toggleLike(postId)}
            >
                <FontAwesomeIcon icon={faHeart} />
                <span>{numOfLikes}</span>
            </button>
            {isPostCreator && (
                <>
                    <button className="hover:text-blue-110" onClick={() => setIsEditingPost(true)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>

                    <button
                        className="hover:text-blue-110"
                        onClick={() => setIsDeletePostModalOpen(true, postId)}
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </>
            )}
        </div>
    );
}
