import ECommerce from '@/components/projects/ECommerce';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'E-Commerce',
    description: 'Ecommerce site for programming books',
};

export default function Page() {
    return (
        <body>
            <ECommerce />
        </body>
    );
}
