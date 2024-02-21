import PostContainer from './PostContainer';
import { Post } from '../types';

type Props = {
    followingPosts: Post[];
    onShowSelectedUserProfile: (selectedUserId: string) => void;
    onToggleLike: (postId: string) => void;
};

export default function Following({
    followingPosts,
    onShowSelectedUserProfile,
    onToggleLike,
}: Props) {
    if (followingPosts.length === 0) {
        return (
            <div className="mx-auto text-center text-2xl font-bold">
                You are not following anyone.
            </div>
        );
    }

    return (
        <main>
            <h1 className="text-center text-2xl font-bold mb-5">Following</h1>
            <section>
                {followingPosts.map((post) => (
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
