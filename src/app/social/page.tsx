import AllPosts from '@/components/projects/Social/AllPosts';
import NewPostForm from '@/components/projects/Social/NewPostForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Social',
    description: 'Social platform to connect with like minded people',
};

export default function Page() {
    return (
        <main>
            <h1 className="text-lg text-center mb-4">All Posts</h1>
            <NewPostForm />
            <AllPosts />
        </main>
    );
}
