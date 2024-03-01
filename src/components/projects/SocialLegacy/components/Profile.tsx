import { useState } from 'react';

import DeletePostModal from './DeletePostModal';
import PostContainer from './PostContainer';
import { FollowingAndFollowers, Post } from '../types';
import { loggedUserId } from '../data';

type Props = {
    followingAndFollowers: FollowingAndFollowers;
    selectedUserId: string;
    userPosts: Post[];
    onDeletePost: (postId: string) => void;
    onEditPost: (postId: string, editedContent: string) => void;
    onFollowUser: (followingUserId: string) => void;
    onToggleLike: (postId: string) => void;
    onUnfollowUser: (followingUserId: string) => void;
};

export default function Profile({
    followingAndFollowers,
    selectedUserId,
    userPosts,
    onDeletePost,
    onEditPost,
    onFollowUser,
    onToggleLike,
    onUnfollowUser,
}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState<string | null>(null);
    const isLoggedUserProfile = loggedUserId === selectedUserId;

    const data = {
        numOfFollowers: followingAndFollowers[selectedUserId].followers.length,
        numOfFollowing: followingAndFollowers[selectedUserId].following.length,
    };

    const isSelectedUserFollowed =
        followingAndFollowers[loggedUserId].following.includes(selectedUserId);

    const openModal = (postId: string) => {
        setPostToDelete(postId);
        setIsOpen(true);
    };

    return (
        <>
            <DeletePostModal
                isOpen={isOpen}
                postId={postToDelete}
                onDeletePost={onDeletePost}
                requestClose={() => setIsOpen(false)}
            />
            <main>
                <div className="text-center space-x-4 mb-3">
                    <h1 className="inline text-2xl font-bold mb-4">
                        {selectedUserId}&apos;s posts
                    </h1>
                    {!isLoggedUserProfile &&
                        (isSelectedUserFollowed ? (
                            <button
                                className="text-sm p-1 rounded-md bg-grey-90 shadow-md"
                                title={`Unfollow ${selectedUserId}`}
                                onClick={() => onUnfollowUser(selectedUserId)}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                className="text-sm p-1 rounded-md bg-blue-100 text-white shadow-md"
                                title={`Follow ${selectedUserId}`}
                                onClick={() => onFollowUser(selectedUserId)}
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
                            onToggleLike={onToggleLike}
                            onOpenDeletePostModal={openModal}
                            onEditPost={onEditPost}
                        />
                    ))}
                </section>
            </main>
        </>
    );
}
