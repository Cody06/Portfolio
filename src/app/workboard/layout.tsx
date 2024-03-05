import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: {
        template: 'Workboard | %s',
        default: 'Workboard',
    },
    description: 'App to track projects progress',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <body className="bg-blue-100">
            <nav className="flex justify-between mb-8 bg-blue-110 p-4 text-white">
                <span className="font-bold">Workboard</span>
                <Link href="/" className="hover:text-orange-100" scroll={false}>
                    Back to Portfolio
                </Link>
            </nav>
            {children}
        </body>
    );
}
