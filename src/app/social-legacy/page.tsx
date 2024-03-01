import Social from '@/components/projects/SocialLegacy';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Social',
    description: 'Social platform to connect with like minded people',
};

export default function Page() {
    return <Social />;
}
