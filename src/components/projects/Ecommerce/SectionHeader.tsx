type Props = {
    title: string;
};

export default function SectionHeader({ title }: Props) {
    return <h1 className="text-2xl font-bold my-10">{title}</h1>;
}
