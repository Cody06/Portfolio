import Profile from '@/components/projects/Social/Profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Profile',
    description: "User's profile page",
};

export default function Page({ params }: { params: { id: string } }) {
    return (
        <main className="min-w-[20rem]">
            <Profile profileId={params.id} />
        </main>
    );
}
