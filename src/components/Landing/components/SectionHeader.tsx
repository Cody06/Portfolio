interface Props {
    title: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => (
    <h2 className="text-2xl font-bold text-center text-primary-100 uppercase border-bottom-gradient">
        {title}
    </h2>
);

export default SectionHeader;
