import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Post } from '../types';

interface Props {
    post: Post;
    toggleLike?: (postId: string) => void;
}

const PostContainer: React.FC<Props> = ({ post, toggleLike }) => (
    <div className="space-y-4 p-4 rounded-xl shadow-md">
        <div className="flex justify-between">
            <span className="font-bold">{post.creator}</span>
            <span className="text-grey-100">{post.date}</span>
        </div>
        <p>{post.content}</p>
        {toggleLike ? (
            <button
                className="text-grey-100 space-x-2 hover:text-red"
                onClick={() => toggleLike(post.id)}
            >
                <FontAwesomeIcon icon={faHeart} />
                <span>{post.likes.length}</span>
            </button>
        ) : (
            <div className="text-grey-100 space-x-2">
                <FontAwesomeIcon icon={faHeart} />
                <span>{post.likes.length}</span>
            </div>
        )}
    </div>
);

export default PostContainer;
