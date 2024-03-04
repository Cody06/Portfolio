'use client';
import PostContainer from './PostContainer';
import useStore from './Store';
import { loggedUserId } from './data';

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

    return (
        <section>
            {followingPosts.map((post) => (
                <PostContainer key={post.id} post={post} />
            ))}
        </section>
    );
}
