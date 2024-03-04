import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement & HTMLLIElement>(null);

    useEffect(() => {
        const onOutsideClick = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('click', onOutsideClick, true);

        return () => {
            document.removeEventListener('click', onOutsideClick, true);
        };
    }, [ref]);

    return ref;
};

export default useOutsideClick;
