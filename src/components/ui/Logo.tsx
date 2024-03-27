type Props = {
    size?: 'sm' | 'lg';
    showAnimation?: boolean;
};

export default function Logo({ size = 'sm', showAnimation = false }: Props) {
    const dimensions = {
        mainContainer: {
            sm: 'pl-[0.41rem] w-[1.91rem] h-[2rem]',
            lg: 'pl-9 w-[10.5rem] h-[11rem]',
        },
        parallelogramShape: {
            sm: 'w-[1.1rem] h-[1.27rem] rounded',
            lg: 'w-[6rem] h-[7rem] rounded-3xl',
        },
        topLayer: {
            sm: 'group-hover:-translate-y-1',
            lg: 'group-hover:-translate-y-7',
        },
        middleLayer: {
            sm: '-top-[1rem] group-hover:translate-x-1',
            lg: '-top-[5rem] group-hover:translate-x-7',
        },
        bottomLayer: {
            sm: '-top-[2rem] group-hover:translate-y-1',
            lg: '-top-[10rem] group-hover:translate-y-7',
        },
    };

    const parallelogramShape = `bg-amber-500 skew-y-[30deg] rotate-[-60deg] shadow-lg
            ${dimensions.parallelogramShape[size]}`;

    const topLayer = (
        <div
            className={`relative bg-opacity-80 ${parallelogramShape}
                ${dimensions.topLayer[size]} ease-in duration-200`}
        />
    );

    const middleLayer = (
        <div
            className={`relative bg-opacity-60 ${parallelogramShape}
                ${dimensions.middleLayer[size]} ease-in duration-200`}
        />
    );

    const bottomLayer = (
        <div
            className={`relative bg-opacity-40 ${parallelogramShape}
                ${dimensions.bottomLayer[size]} ease-in duration-200`}
        />
    );

    return (
        <div
            className={`group ${dimensions.mainContainer[size]} ${
                showAnimation && 'animate-slide-rigth-to-left'
            }`}
        >
            {topLayer}
            {middleLayer}
            {bottomLayer}
        </div>
    );
}
