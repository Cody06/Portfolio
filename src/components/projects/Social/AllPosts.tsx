'use client';
import useStore from './Store';
import PostsCollection from './PostsCollection';

export default function AllPosts() {
    const { posts } = useStore();

    return <PostsCollection posts={posts} />;
}
