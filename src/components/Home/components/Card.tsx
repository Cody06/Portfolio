export default function Card({ children }: { children: React.ReactNode }) {
    return <article className="rounded-xl bg-white shadow-lg px-8 py-10">{children}</article>;
}
