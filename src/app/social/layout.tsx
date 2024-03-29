import Link from 'next/link';
import { Metadata } from 'next';
import Nav from '@/components/projects/Social/Nav';
import { hoverTextStyle } from '@/components/ui/tailwindStyles';

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
                <div className="flex justify-between items-center max-w-[55rem] mx-auto p-2 text-white">
                    <Link href="/social" className={`text-xl font-bold ${hoverTextStyle}`}>
                        Social
                    </Link>
                    <Link href="/" className={`font-medium ${hoverTextStyle}`}>
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
