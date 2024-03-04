import AllPosts from '@/components/projects/Social/AllPosts';
import NewPostForm from '@/components/projects/Social/NewPostForm';

export default function Page() {
    return (
        <main className="min-w-[20rem]">
            <h1 className="text-lg text-center mb-4">All Posts</h1>
            <NewPostForm />
            <AllPosts />
        </main>
    );
}
