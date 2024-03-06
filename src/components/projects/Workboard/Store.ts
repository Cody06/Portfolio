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

function getSavedBoards() {
    const savedBoards = localStorage.getItem('boards');
    return savedBoards ? JSON.parse(savedBoards) : [];
}

function saveToLocalStorage(boards: Board[]) {
    localStorage.setItem('boards', JSON.stringify(boards));
}

function saveBoards(updatedBoards: Board[]) {
    saveToLocalStorage(updatedBoards);
    return {
        boards: updatedBoards,
    };
}

const useStore = create<Store>()((set) => ({
    boards: getSavedBoards(),
    columnToDropCard: {
        newColId: null,
        nextCardId: null,
    },
    createBoard: (title) =>
        set((state) => {
            const updatedBoards = [
                ...state.boards,
                {
                    id: Date.now().toString(),
                    title: title,
                    creationDate: new Date().toDateString(),
                    columns: [],
                },
            ];
            return saveBoards(updatedBoards);
        }),
    deleteBoard: (boardId) =>
        set((state) => {
            const updatedBoards = state.boards.filter((board) => board.id !== boardId);
            return saveBoards(updatedBoards);
        }),
    editBoard: (boardId, title) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        title: title,
                    };
                } else {
                    return board;
                }
            });
            return saveBoards(updatedBoards);
        }),
    createColumn: (boardId, title) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
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
            });
            return saveBoards(updatedBoards);
        }),
    deleteColumn: (boardId, colId) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        columns: board.columns.filter((col) => col.id !== colId),
                    };
                } else {
                    return board;
                }
            });
            return saveBoards(updatedBoards);
        }),
    editColumn: (boardId, colId, title) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
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
            });
            return saveBoards(updatedBoards);
        }),
    createCard: (boardId, colId, text) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
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
            });
            return saveBoards(updatedBoards);
        }),
    editCard: (boardId, colId, cardId, text) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
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
            });
            return saveBoards(updatedBoards);
        }),
    deleteCard: (boardId, colId, cardId) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
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
            });
            return saveBoards(updatedBoards);
        }),
    setColumnToDropCard: (colToDrop) =>
        set(() => ({
            columnToDropCard: colToDrop,
        })),
    appendCard: (boardId, dropCard) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
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
            });
            return saveBoards(updatedBoards);
        }),
    insertCardBeforeAnother: (boardId, dropCard) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
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
            });
            return saveBoards(updatedBoards);
        }),
}));

export default useStore;
