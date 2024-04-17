import { faCircle as circleRegular } from '@fortawesome/free-regular-svg-icons';
import {
    faCircle as circleSolid,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type Props = {
    children: {
        item: JSX.Element;
        title: string;
    }[];
};

export default function Carousel({ children }: Props) {
    const [imageIndex, setImageIndex] = useState(0);

    const showNextImage = () => {
        setImageIndex((index) => {
            if (index === children.length - 1) return 0;
            return index + 1;
        });
    };

    const showPrevImage = () => {
        setImageIndex((index) => {
            if (index === 0) return children.length - 1;
            return index - 1;
        });
    };

    const prevAndNextStyle = `absolute p-2 top-0 bottom-0
        hover:bg-neutral-800 hover:bg-opacity-30
        focus-visible:bg-neutral-800 focus-visible:bg-opacity-30
        ease-in-out duration-200`;

    return (
        <section aria-label="Carousel" className="relative max-h-full text-neutral-800">
            <div className="flex w-full h-full overflow-hidden">
                {children.map(({ item, title }) => (
                    <div
                        key={title}
                        style={{
                            translate: `${-100 * imageIndex}%`,
                            transition: 'translate 300ms ease-in-out',
                        }}
                        className="flex-shrink-0 flex-grow-0 w-full h-full"
                    >
                        {item}
                    </div>
                ))}
            </div>
            <button
                aria-label="View previous image"
                className={`left-0 ${prevAndNextStyle}`}
                onClick={showPrevImage}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="animate-squish" />
            </button>
            <button
                aria-label="View next image"
                className={`right-0 ${prevAndNextStyle}`}
                onClick={showNextImage}
            >
                <FontAwesomeIcon icon={faChevronRight} className="animate-squish" />
            </button>
            <div className="flex justify-center gap-x-2">
                {children.map((_, index) => (
                    <button
                        key={_.title}
                        aria-label={`View image ${index + 1}`}
                        className="hover:scale-125 focus-visible:scale-125 ease-in-out duration-200"
                        onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? (
                            <FontAwesomeIcon icon={circleSolid} className="w-[0.7rem]" />
                        ) : (
                            <FontAwesomeIcon icon={circleRegular} className="w-[0.7rem]" />
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
}
