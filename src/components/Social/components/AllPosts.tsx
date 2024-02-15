import NewPostInput from './NewPostInput';
import PostContainer from './PostContainer';
import { Post } from '../types';

interface Props {
    allPosts: Post[];
    onCreatePost: (newPost: string) => void;
    onShowSelectedUserProfile: (selectedUserId: string) => void;
    onToggleLike: (postId: string) => void;
}

const AllPosts: React.FC<Props> = ({
    allPosts,
    onCreatePost,
    onShowSelectedUserProfile,
    onToggleLike,
}) => {
    return (
        <main>
            <h1 className="text-lg text-center mb-4">All Posts</h1>

            <NewPostInput onCreatePost={onCreatePost} />

            <section className="space-y-4">
                {allPosts.map((post) => (
                    <PostContainer
                        key={post.id}
                        post={post}
                        onShowSelectedUserProfile={onShowSelectedUserProfile}
                        onToggleLike={onToggleLike}
                    />
                ))}
            </section>
        </main>
    );
};

export default AllPosts;
