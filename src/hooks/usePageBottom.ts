import { useEffect, useState } from 'react';

const usePageBottom = (distanceFromPageBottom: number) => {
    const [reachedBottom, setReachedBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const documentHeight = document.documentElement.offsetHeight;
            const windowHeight = window.innerHeight;
            const pixelsScrolled = document.documentElement.scrollTop;
            const hasReachedBottom =
                documentHeight - (windowHeight + pixelsScrolled) <= distanceFromPageBottom;
            setReachedBottom(hasReachedBottom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [distanceFromPageBottom]);

    return reachedBottom;
};

export default usePageBottom;
