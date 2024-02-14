import NewPostInput from './NewPostInput';
import { Post } from '../types';
import PostContainer from './PostContainer';

interface Props {
    allPosts: Post[];
    loggedUserId: string;
    onEditPost: (postId: string, editedContent: string) => void;
    savePost: (newPost: string) => void;
    showSelectedUserProfile: (selectedUserId: string) => void;
    toggleLike: (postId: string) => void;
}

const AllPosts: React.FC<Props> = ({
    allPosts,
    loggedUserId,
    onEditPost,
    savePost,
    showSelectedUserProfile,
    toggleLike,
}) => {
    return (
        <main>
            <h1 className="text-lg text-center mb-4">All Posts</h1>

            <NewPostInput savePost={savePost} />

            <section className="space-y-4">
                {allPosts.map((post) => (
                    <PostContainer
                        key={post.id}
                        post={post}
                        loggedUserId={loggedUserId}
                        onEditPost={onEditPost}
                        showSelectedUserProfile={showSelectedUserProfile}
                        toggleLike={toggleLike}
                    />
                ))}
            </section>
        </main>
    );
};

export default AllPosts;
