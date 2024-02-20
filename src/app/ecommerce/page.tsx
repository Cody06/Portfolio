import ECommerce from '@/components/projects/ECommerce';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ECommerce',
    description: 'Ecommerce site for programming books',
};

export default function ECommercePage() {
    return <ECommerce />;
}
