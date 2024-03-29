export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-w-full max-w-[40rem] px-3 py-2 rounded-xl shadow-md">{children}</div>
    );
}
