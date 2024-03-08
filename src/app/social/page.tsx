import AllPosts from '@/components/projects/Social/AllPosts';
import NewPostForm from '@/components/projects/Social/NewPostForm';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-w-[20rem]">
            <h1 className="text-lg font-bold mb-4">All Posts</h1>
            <NewPostForm />
            <AllPosts />
        </main>
    );
}
