import NewPostInput from './NewPostInput';
import { Post } from '../types';
import PostContainer from './PostContainer';

interface Props {
    userId: string;
    allPosts: Post[];
    savePost: (newPost: string) => void;
    toggleLike: (postId: string) => void;
}

const AllPosts: React.FC<Props> = ({ userId, allPosts, savePost, toggleLike }) => {
    return (
        <div className="max-w-[100rem] mx-auto">
            <h1 className="text-lg text-center mb-4">All Posts</h1>

            <NewPostInput savePost={savePost} />

            <div className="space-y-4">
                {allPosts.map((post) => (
                    <PostContainer key={post.id} post={post} toggleLike={toggleLike} />
                ))}
            </div>
        </div>
    );
};

export default AllPosts;
