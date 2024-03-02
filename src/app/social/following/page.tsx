import Following from '@/components/projects/Social/Following';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Following',
    description: 'Posts from people you are following',
};

export default function Page() {
    return (
        <main className="min-w-[20rem]">
            <h1 className="text-lg text-center mb-4">Following</h1>
            <Following />
        </main>
    );
}
