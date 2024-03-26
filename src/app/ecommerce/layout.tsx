import Nav from '@/components/projects/Ecommerce/Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <body>
            <header className="bg-sky-900">
                <Nav />
            </header>
            <div className="content-max-width mx-auto">{children}</div>
        </body>
    );
}
