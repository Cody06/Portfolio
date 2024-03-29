'use client';
import NewPostForm from '@/components/projects/Social/NewPostForm';
import PostsCollection from '@/components/projects/Social/PostsCollection';
import useStore from '@/components/projects/Social/Store';

export default function Page() {
    const { posts } = useStore();
    return (
        <main className="flex flex-col items-center space-y-4 min-w-[20rem]">
            <h1 className="text-lg font-bold">All Posts</h1>
            <NewPostForm />
            <PostsCollection posts={posts} />
        </main>
    );
}
