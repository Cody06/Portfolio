export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <article
            className="rounded-xl bg-white shadow-lg px-8 py-10
            hover:shadow-xl hover:scale-[1.01] ease-linear duration-100"
        >
            {children}
        </article>
    );
}
