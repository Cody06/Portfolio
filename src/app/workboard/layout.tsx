import { hoverTextStyle } from '@/components/ui/tailwindStyles';
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
        <body className="bg-sky-600">
            <nav className="flex justify-between mb-8 bg-sky-900 p-4 text-white">
                <Link href="/workboard" className={`font-bold ${hoverTextStyle}`}>
                    Workboard
                </Link>
                <Link href="/" className={`font-medium ${hoverTextStyle}`}>
                    Back to Portfolio
                </Link>
            </nav>
            {children}
        </body>
    );
}
