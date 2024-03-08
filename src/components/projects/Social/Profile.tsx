'use client';
import DeletePostModal from './DeletePostModal';
import PostContainer from './PostContainer';
import useStore from './Store';
import { loggedUserId } from './data';

type Props = {
    profileId: string;
};

export default function Profile({ profileId }: Props) {
    const { followingAndFollowers, posts, followUser, unfollowUser } = useStore();
    const userPosts = posts.filter((post) => post.creator === profileId);
    const isLoggedUserProfile = loggedUserId === profileId;
    const isUserFollowed = followingAndFollowers[loggedUserId].following.includes(profileId);

    const { numOfFollowers, numOfFollowing } = {
        numOfFollowers: followingAndFollowers[profileId].followers.length,
        numOfFollowing: followingAndFollowers[profileId].following.length,
    };

    return (
        <>
            <DeletePostModal />
            <section className="text-center mb-4">
                <h1 className="text-lg font-bold inline mr-4">{profileId}&apos;s posts</h1>
                {!isLoggedUserProfile &&
                    (isUserFollowed ? (
                        <button
                            className="text-sm p-1 rounded-md bg-grey-90 shadow-md"
                            title={`Unfollow ${profileId}`}
                            onClick={() => unfollowUser(profileId)}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            className="text-sm p-1 rounded-md bg-blue-100 text-white shadow-md"
                            title={`Follow ${profileId}`}
                            onClick={() => followUser(profileId)}
                        >
                            Follow
                        </button>
                    ))}
            </section>

            <section className="flex justify-center gap-x-5 text-sm text-center mb-4">
                <h2 className="space-x-2">
                    <span className="font-bold">{numOfFollowers}</span>
                    <span>followers</span>
                </h2>
                <h2 className="space-x-2">
                    <span className="font-bold">{numOfFollowing}</span>
                    <span>following</span>
                </h2>
            </section>

            <section>
                {userPosts.map((post) => (
                    <PostContainer key={post.id} post={post} />
                ))}
            </section>
        </>
    );
}
