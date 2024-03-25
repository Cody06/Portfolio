import Nav from '@/components/projects/Ecommerce/Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <body>
            <Nav />
            {children}
        </body>
    );
}
