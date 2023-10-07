interface Props {
    showAnimation: boolean;
}

const Logo: React.FC<Props> = ({ showAnimation }) => {
    const parallelogramShape =
        'bg-orange-100 w-[6rem] h-[7rem] skew-y-[30deg] rotate-[-60deg] rounded-3xl';

    const topLayer = <div className={`absolute left-9 bg-opacity-80 ${parallelogramShape}`} />;

    const middleLayer = (
        <div className={`absolute top-6 left-9 bg-opacity-60 ${parallelogramShape}`} />
    );

    const bottomLayer = (
        <div className={`absolute top-12 left-9 bg-opacity-40 ${parallelogramShape}`} />
    );

    return (
        <div
            className={`relative w-[10.5rem] h-[10rem] ${
                showAnimation && 'animate-slide-rigth-to-left'
            }`}
        >
            {topLayer}
            {middleLayer}
            {bottomLayer}
        </div>
    );
};

export default Logo;
