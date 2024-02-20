import { faCircle as circleRegular } from '@fortawesome/free-regular-svg-icons';
import {
    faCircle as circleSolid,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
    images: { url: string; alt: string }[];
}

const ImageSlider: React.FC<Props> = ({ images }) => {
    const [imageIndex, setImageIndex] = useState(0);

    const showNextImage = () => {
        setImageIndex((index) => {
            if (index === images.length - 1) return 0;
            return index + 1;
        });
    };

    const showPrevImage = () => {
        setImageIndex((index) => {
            if (index === 0) return images.length - 1;
            return index - 1;
        });
    };

    const prevAndNextStyle = `absolute p-2 top-0 bottom-0
        hover:bg-grey-120 hover:bg-opacity-30
        focus-visible:bg-grey-120 focus-visible:bg-opacity-30
        ease-in-out duration-200`;

    return (
        <section aria-label="Image slider" className="relative w-full h-full text-grey-120">
            <div className="flex border w-full h-full overflow-hidden">
                {images.map(({ url, alt }, index) => (
                    <Image
                        key={url}
                        // Show only the image that is selected by index
                        aria-hidden={index !== imageIndex}
                        src={url}
                        width={400}
                        height={400}
                        alt={alt}
                        style={{
                            translate: `${-100 * imageIndex}%`,
                            transition: 'translate 300ms ease-in-out',
                        }}
                        className="flex-shrink-0 flex-grow-0 w-full h-full"
                    />
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
            <div className="absolute bottom-[0.5rem] left-[50%] -translate-x-[50%] flex gap-x-2">
                {images.map((_, index) => (
                    <button
                        key={_.url}
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
};

export default ImageSlider;
