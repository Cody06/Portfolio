interface Props {
    showAnimation: boolean;
}

const Logo: React.FC<Props> = ({ showAnimation }) => {
    const parallelogramShape =
        'bg-orange-100 w-[6rem] h-[7rem] skew-y-[30deg] rotate-[-60deg] rounded-3xl';

    const topLayer = (
        <div
            className={`relative bg-opacity-80 ${parallelogramShape}
                group-hover:-translate-y-7 ease-in duration-200`}
        />
    );

    const middleLayer = (
        <div
            className={`relative -top-[5rem] bg-opacity-60 ${parallelogramShape}
                group-hover:translate-x-7 ease-in duration-200`}
        />
    );

    const bottomLayer = (
        <div
            className={`relative -top-[10rem] bg-opacity-40 ${parallelogramShape}
                group-hover:translate-y-7 ease-in duration-200`}
        />
    );

    return (
        <div
            className={`group pl-9 w-[10.5rem] h-[10rem] ${
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
