type Props = {
    title: string;
};

export default function SectionHeader({ title }: Props) {
    return (
        <h2 className="text-2xl font-bold text-center text-neutral-500 uppercase mb-14 border-bottom-gradient">
            {title}
        </h2>
    );
}
