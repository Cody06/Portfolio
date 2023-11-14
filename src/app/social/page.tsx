import Social from '@/components/Social';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Social',
    description: 'Social platform to connect with like minded people',
};

export default function SocialPage() {
    return <Social />;
}
