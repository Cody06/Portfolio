'use client';
import DeletePostModal from './modals/DeletePostModal';
import PostsCollection from './PostsCollection';
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
    const commonStyle = 'px-2 py-1 rounded-full text-sm font-medium shadow-md hover:brightness-90';

    return (
        <>
            <section className="text-center mb-4">
                <h1 className="text-lg font-bold inline mr-4">{profileId}&apos;s posts</h1>
                {!isLoggedUserProfile &&
                    (isUserFollowed ? (
                        <button
                            className={`bg-neutral-100 text-neutral-600 ${commonStyle}`}
                            title={`Unfollow ${profileId}`}
                            onClick={() => unfollowUser(profileId)}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            className={`bg-sky-600 text-white ${commonStyle}`}
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

            <PostsCollection posts={userPosts} />
            <DeletePostModal />
        </>
    );
}
