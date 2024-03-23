import Link from 'next/link';
import { Metadata } from 'next';
import Nav from '@/components/projects/Social/Nav';

export const metadata: Metadata = {
    title: {
        template: 'Social | %s',
        default: 'Social',
    },
    description: 'Social platform to connect with like minded people',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <body>
            <header className="fixed w-full bg-sky-600 shadow-md">
                <div className="flex justify-between max-w-[55rem] mx-auto p-2 text-white">
                    <span className="text-2xl font-bold">Social</span>
                    <Link href="/" className="hover:text-amber-500">
                        Back to Portfolio
                    </Link>
                </div>
            </header>
            <div className="max-w-[55rem] mx-auto p-4">
                <Nav />
                <div className="md:mt-16 mt-32 md:ml-[13rem]">{children}</div>
            </div>
        </body>
    );
}
