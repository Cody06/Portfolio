import Workboard from '@/components/projects/Workboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Workboard',
    description: 'App to track projects progress',
};

export default function Page() {
    return (
        <body className="bg-blue-100">
            <Workboard />
        </body>
    );
}
