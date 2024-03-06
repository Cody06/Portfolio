import { create } from 'zustand';
import { Board, CardData, ColumnToDropCard } from './types';
import getUniqueId from '@/utils/getUniqueId';

type Store = {
    boards: Board[];
    columnToDropCard: ColumnToDropCard;
    createBoard: (title: string) => void;
    createCard: (boardId: string, colId: string, text: string) => void;
    createColumn: (boardId: string, title: string) => void;
    deleteBoard: (boardId: string) => void;
    deleteCard: (boardId: string, colId: string, cardId: string) => void;
    deleteColumn: (boardId: string, colId: string) => void;
    editBoard: (boardId: string, title: string) => void;
    editCard: (boardId: string, colId: string, cardId: string, title: string) => void;
    editColumn: (boardId: string, colId: string, title: string) => void;
    setColumnToDropCard: (colToDrop: ColumnToDropCard) => void;
    appendCard: (boardId: string, dropCard: CardData) => void;
    insertCardBeforeAnother: (boardId: string, dropCard: CardData) => void;
};

const useStore = create<Store>()((set) => ({
    boards: [],
    columnToDropCard: {
        newColId: null,
        nextCardId: null,
    },
    createBoard: (title) =>
        set((state) => ({
            boards: [
                ...state.boards,
                {
                    id: Date.now().toString(),
                    title: title,
                    creationDate: new Date(),
                    columns: [],
                },
            ],
        })),
    deleteBoard: (boardId) =>
        set((state) => ({
            boards: state.boards.filter((board) => board.id !== boardId),
        })),
    editBoard: (boardId, title) =>
        set((state) => ({
            boards: state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        title: title,
                    };
                } else {
                    return board;
                }
            }),
        })),
    createColumn: (boardId, title) =>
        set((state) => ({
            boards: state.boards.map((board) => {
                if (board.id === boardId) {
                    const newColumn = {
                        id: `col-${getUniqueId(title)}`,
                        title: title,
                        cards: [],
                    };
                    return {
                        ...board,
                        columns: [...board.columns, newColumn],
                    };
                } else {
                    return board;
                }
            }),
        })),
    deleteColumn: (boardId, colId) =>
        set((state) => ({
            boards: state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        columns: board.columns.filter((col) => col.id !== colId),
                    };
                } else {
                    return board;
                }
            }),
        })),
    editColumn: (boardId, colId, title) =>
        set((state) => ({
            boards: state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        columns: board.columns.map((col) => {
                            if (col.id === colId) {
                                return {
                                    ...col,
                                    title: title,
                                };
                            } else {
                                return col;
                            }
                        }),
                    };
                } else {
                    return board;
                }
            }),
        })),
    createCard: (boardId, colId, text) =>
        set((state) => ({
            boards: state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        columns: board.columns.map((col) => {
                            if (col.id === colId) {
                                const newCard = {
                                    id: `card-${getUniqueId(text)}`,
                                    text: text,
                                };
                                return {
                                    ...col,
                                    cards: [...col.cards, newCard],
                                };
                            } else {
                                return col;
                            }
                        }),
                    };
                } else {
                    return board;
                }
            }),
        })),
    editCard: (boardId, colId, cardId, text) =>
        set((state) => ({
            boards: state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        columns: board.columns.map((col) => {
                            if (col.id === colId) {
                                return {
                                    ...col,
                                    cards: col.cards.map((card) => {
                                        if (card.id === cardId) {
                                            return {
                                                ...card,
                                                text: text,
                                            };
                                        } else {
                                            return card;
                                        }
                                    }),
                                };
                            } else {
                                return col;
                            }
                        }),
                    };
                } else {
                    return board;
                }
            }),
        })),
    deleteCard: (boardId, colId, cardId) =>
        set((state) => ({
            boards: state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        columns: board.columns.map((col) => {
                            if (col.id === colId) {
                                return {
                                    ...col,
                                    cards: col.cards.filter((card) => card.id !== cardId),
                                };
                            } else {
                                return col;
                            }
                        }),
                    };
                } else {
                    return board;
                }
            }),
        })),
    setColumnToDropCard: (colToDrop) =>
        set(() => ({
            columnToDropCard: colToDrop,
        })),
    appendCard: (boardId, dropCard) =>
        set((state) => ({
            boards: state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        columns: board.columns
                            .map((oldCol) => {
                                return {
                                    ...oldCol,
                                    cards: oldCol.cards.filter((card) => card.id !== dropCard.id),
                                };
                            })
                            .map((newCol) => {
                                if (newCol.id === state.columnToDropCard.newColId) {
                                    return {
                                        ...newCol,
                                        cards: [...newCol.cards, dropCard],
                                    };
                                } else {
                                    return newCol;
                                }
                            }),
                    };
                } else {
                    return board;
                }
            }),
        })),
    insertCardBeforeAnother: (boardId, dropCard) =>
        set((state) => ({
            boards: state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        columns: board.columns
                            .map((oldCol) => {
                                return {
                                    ...oldCol,
                                    cards: oldCol.cards.filter((card) => card.id !== dropCard.id),
                                };
                            })
                            .map((newCol) => {
                                if (newCol.id === state.columnToDropCard.newColId) {
                                    const nextCardIndex = newCol.cards.findIndex(
                                        (card) => card.id === state.columnToDropCard.nextCardId,
                                    );

                                    return {
                                        ...newCol,
                                        cards: newCol.cards.toSpliced(nextCardIndex, 0, dropCard),
                                    };
                                } else {
                                    return newCol;
                                }
                            }),
                    };
                } else {
                    return board;
                }
            }),
        })),
}));

export default useStore;
