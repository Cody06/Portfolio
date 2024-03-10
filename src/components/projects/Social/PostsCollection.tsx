'use client';
import DeletePostModal from './DeletePostModal';
import PostContainer from './PostContainer';
import { Post } from './types';

type Props = {
    posts: Post[];
};

export default function PostsCollection({ posts }: Props) {
    return (
        <>
            <DeletePostModal />
            <section className="space-y-4">
                {posts.map((post) => (
                    <PostContainer key={post.id} post={post} />
                ))}
            </section>
        </>
    );
}
