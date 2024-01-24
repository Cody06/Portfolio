interface Props {
    title: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => (
    <h2 className="text-2xl font-bold text-center text-grey-100 uppercase mb-12 border-bottom-gradient">
        {title}
    </h2>
);

export default SectionHeader;
