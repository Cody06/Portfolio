'use client';
import useStore from './Store';
import { loggedUserId } from './data';
import PostsCollection from './PostsCollection';

export default function Following() {
    const { followingAndFollowers, posts } = useStore();
    const followingPosts = posts.filter((post) =>
        followingAndFollowers[loggedUserId].following.includes(post.creator),
    );

    if (followingPosts.length === 0) {
        return (
            <div className="mx-auto text-center text-2xl font-bold">
                You are not following anyone.
            </div>
        );
    }

    return <PostsCollection posts={followingPosts} />;
}
