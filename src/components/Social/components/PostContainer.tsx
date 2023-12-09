import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Post } from '../types';

interface Props {
    post: Post;
    loggedUserId: string;
    toggleLike: (postId: string) => void;
    showSelectedUserProfile?: (selectedUserId: string) => void;
}

const PostContainer: React.FC<Props> = ({
    post,
    loggedUserId,
    showSelectedUserProfile,
    toggleLike,
}) => (
    <div className="space-y-4 p-4 rounded-xl shadow-md">
        <div className="flex justify-between">
            {post.creator !== loggedUserId && showSelectedUserProfile ? (
                <button
                    className="font-bold text-blue-100 hover:text-blue-110"
                    onClick={() => showSelectedUserProfile(post.creator)}
                >
                    {post.creator}
                </button>
            ) : (
                <span className="font-bold">{post.creator}</span>
            )}
            <span className="text-grey-100">{post.date}</span>
        </div>
        <p>{post.content}</p>
        <button
            className="text-grey-100 space-x-2 hover:text-red"
            onClick={() => toggleLike(post.id)}
        >
            <FontAwesomeIcon icon={faHeart} />
            <span>{post.likes.length}</span>
        </button>
    </div>
);

export default PostContainer;
