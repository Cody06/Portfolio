import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Cody Miu',
    description: 'Personal portfolio created with NextJs, React and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="en">{children}</html>;
}
