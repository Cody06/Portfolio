'use client';
import DeletePostModal from './DeletePostModal';
import PostContainer from './PostContainer';
import useStore from './Store';

export default function AllPosts() {
    const { posts } = useStore();
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
