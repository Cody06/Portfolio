import { Post } from '../types';
import PostContainer from './PostContainer';

interface Props {
    followingPosts: Post[];
    loggedUserId: string;
    showSelectedUserProfile: (selectedUserId: string) => void;
    toggleLike: (postId: string) => void;
    onEditPost: (postId: string, editedContent: string) => void;
}

const Following: React.FC<Props> = ({
    followingPosts,
    loggedUserId,
    showSelectedUserProfile,
    toggleLike,
    onEditPost,
}) => {
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
                        loggedUserId={loggedUserId}
                        showSelectedUserProfile={showSelectedUserProfile}
                        toggleLike={toggleLike}
                        onEditPost={onEditPost}
                    />
                ))}
            </section>
        </main>
    );
};

export default Following;
