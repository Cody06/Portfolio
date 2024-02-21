import NewPostInput from './NewPostInput';
import PostContainer from './PostContainer';
import { Post } from '../types';

type Props = {
    allPosts: Post[];
    onCreatePost: (newPost: string) => void;
    onShowSelectedUserProfile: (selectedUserId: string) => void;
    onToggleLike: (postId: string) => void;
};

export default function AllPosts({
    allPosts,
    onCreatePost,
    onShowSelectedUserProfile,
    onToggleLike,
}: Props) {
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
}
