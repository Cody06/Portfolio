import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
    imageUrls: string[];
}

const ImageSlider: React.FC<Props> = ({ imageUrls }) => {
    const [imageIndex, setImageIndex] = useState(0);

    const showNextImage = () => {
        setImageIndex((index) => {
            if (index === imageUrls.length - 1) return 0;
            return index + 1;
        });
    };

    const showPrevImage = () => {
        setImageIndex((index) => {
            if (index === 0) return imageUrls.length - 1;
            return index - 1;
        });
    };
    return (
        <div className="relative w-max h-full">
            <Image src={imageUrls[imageIndex]} width={400} height={400} alt="image" />
            <button
                onClick={showPrevImage}
                className="absolute p-2 top-0 bottom-0 left-0
                    hover:bg-grey-120 hover:bg-opacity-30 ease-in-out duration-200"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
            </button>
            <button
                onClick={showNextImage}
                className="absolute p-2 top-0 bottom-0 right-0
                    hover:bg-grey-120 hover:bg-opacity-30 ease-in-out duration-200"
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-white" />
            </button>
        </div>
    );
};

export default ImageSlider;
