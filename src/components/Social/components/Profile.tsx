import { FollowingAndFollowers, Post } from '../types';
import PostContainer from './PostContainer';

interface Props {
    followingAndFollowers: FollowingAndFollowers;
    loggedUserId: string;
    selectedUserId: string;
    userPosts: Post[];
    toggleLike: (postId: string) => void;
    followUser: (followingUserId: string) => void;
    unfollowUser: (followingUserId: string) => void;
}

const Profile: React.FC<Props> = ({
    followingAndFollowers,
    loggedUserId,
    selectedUserId,
    userPosts,
    toggleLike,
    followUser,
    unfollowUser,
}) => {
    const isLoggedUserProfile = loggedUserId === selectedUserId;

    const data = {
        numOfFollowers: followingAndFollowers[selectedUserId].followers.length,
        numOfFollowing: followingAndFollowers[selectedUserId].following.length,
    };

    const isSelectedUserFollowed =
        followingAndFollowers[loggedUserId].following.includes(selectedUserId);

    return (
        <main className="max-w-[1000rem] mx-auto">
            <div className="text-center space-x-4 mb-3">
                <h1 className="inline text-2xl font-bold mb-4">{selectedUserId}&apos;s posts</h1>
                {!isLoggedUserProfile &&
                    (isSelectedUserFollowed ? (
                        <button
                            className="text-sm p-1 rounded-md bg-grey-90 shadow-md"
                            title={`Unfollow ${selectedUserId}`}
                            onClick={() => unfollowUser(selectedUserId)}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            className="text-sm p-1 rounded-md bg-blue-100 text-white shadow-md"
                            title={`Follow ${selectedUserId}`}
                            onClick={() => followUser(selectedUserId)}
                        >
                            Follow
                        </button>
                    ))}
            </div>
            <div className="flex justify-center gap-x-5 text-sm text-center mb-4">
                <div>
                    <p>{data.numOfFollowers}</p>
                    <p>followers</p>
                </div>
                <div>
                    <p>{data.numOfFollowing}</p>
                    <p>following</p>
                </div>
            </div>

            <section className="min-w-[24rem]">
                {userPosts.map((post) => (
                    <PostContainer
                        key={post.id}
                        post={post}
                        loggedUserId={selectedUserId}
                        toggleLike={toggleLike}
                    />
                ))}
            </section>
        </main>
    );
};

export default Profile;
