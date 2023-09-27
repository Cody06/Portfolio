import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cody Miu',
    description: 'Personal portfolio create with NextJs, React and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
