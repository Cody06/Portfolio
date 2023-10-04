import Workboard from '@/components/Workboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Workboard',
    description: 'App to track projects progress',
};

export default function WorkboardPage() {
    return <Workboard />;
}
