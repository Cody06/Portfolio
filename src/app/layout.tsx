// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Cody Miu',
    description: 'Personal portfolio created with NextJs, React and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // html and body are required in RootLayout
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
