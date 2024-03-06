import { useEffect } from 'react';
import useStore from './Store';

export const useRetrieveBoards = () => {
    const { setBoards } = useStore();

    useEffect(() => {
        const savedBoards = localStorage.getItem('boards');
        if (savedBoards) setBoards(JSON.parse(savedBoards));
    }, []);
};
