import { create } from 'zustand';
import { Board, CardData, ListToDropCard } from './types';
import getUniqueId from '@/utils/getUniqueId';

type Store = {
    boards: Board[];
    listToDropCard: ListToDropCard;
    createBoard: (title: string) => void;
    createCard: (boardId: string, listId: string, text: string) => void;
    createList: (boardId: string, title: string) => void;
    deleteBoard: (boardId: string) => void;
    deleteCard: (boardId: string, listId: string, cardId: string) => void;
    deleteList: (boardId: string, listId: string) => void;
    editBoard: (boardId: string, title: string) => void;
    editCard: (boardId: string, listId: string, cardId: string, title: string) => void;
    editList: (boardId: string, listId: string, title: string) => void;
    setListToDropCard: (listToDrop: ListToDropCard) => void;
    appendCard: (boardId: string, dropCard: CardData) => void;
    insertCardBeforeAnother: (boardId: string, dropCard: CardData) => void;
    setBoards: (boards: Board[]) => void;
};

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
    boards: [],
    listToDropCard: {
        newListId: null,
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
                    lists: [],
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
    createList: (boardId, title) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
                if (board.id === boardId) {
                    const newList = {
                        id: `list-${getUniqueId(title)}`,
                        title: title,
                        cards: [],
                    };
                    return {
                        ...board,
                        lists: [...board.lists, newList],
                    };
                } else {
                    return board;
                }
            });
            return saveBoards(updatedBoards);
        }),
    deleteList: (boardId, listId) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        lists: board.lists.filter((list) => list.id !== listId),
                    };
                } else {
                    return board;
                }
            });
            return saveBoards(updatedBoards);
        }),
    editList: (boardId, listId, title) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        lists: board.lists.map((list) => {
                            if (list.id === listId) {
                                return {
                                    ...list,
                                    title: title,
                                };
                            } else {
                                return list;
                            }
                        }),
                    };
                } else {
                    return board;
                }
            });
            return saveBoards(updatedBoards);
        }),
    createCard: (boardId, listId, text) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        lists: board.lists.map((list) => {
                            if (list.id === listId) {
                                const newCard = {
                                    id: `card-${getUniqueId(text)}`,
                                    text: text,
                                };
                                return {
                                    ...list,
                                    cards: [...list.cards, newCard],
                                };
                            } else {
                                return list;
                            }
                        }),
                    };
                } else {
                    return board;
                }
            });
            return saveBoards(updatedBoards);
        }),
    editCard: (boardId, listId, cardId, text) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        lists: board.lists.map((list) => {
                            if (list.id === listId) {
                                return {
                                    ...list,
                                    cards: list.cards.map((card) => {
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
                                return list;
                            }
                        }),
                    };
                } else {
                    return board;
                }
            });
            return saveBoards(updatedBoards);
        }),
    deleteCard: (boardId, listId, cardId) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        lists: board.lists.map((list) => {
                            if (list.id === listId) {
                                return {
                                    ...list,
                                    cards: list.cards.filter((card) => card.id !== cardId),
                                };
                            } else {
                                return list;
                            }
                        }),
                    };
                } else {
                    return board;
                }
            });
            return saveBoards(updatedBoards);
        }),
    setListToDropCard: (listToDrop) =>
        set(() => ({
            listToDropCard: listToDrop,
        })),
    appendCard: (boardId, dropCard) =>
        set((state) => {
            const updatedBoards = state.boards.map((board) => {
                if (board.id === boardId) {
                    return {
                        ...board,
                        lists: board.lists
                            .map((oldList) => {
                                return {
                                    ...oldList,
                                    cards: oldList.cards.filter((card) => card.id !== dropCard.id),
                                };
                            })
                            .map((newList) => {
                                if (newList.id === state.listToDropCard.newListId) {
                                    return {
                                        ...newList,
                                        cards: [...newList.cards, dropCard],
                                    };
                                } else {
                                    return newList;
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
                        lists: board.lists
                            .map((oldList) => {
                                return {
                                    ...oldList,
                                    cards: oldList.cards.filter((card) => card.id !== dropCard.id),
                                };
                            })
                            .map((newList) => {
                                if (newList.id === state.listToDropCard.newListId) {
                                    const nextCardIndex = newList.cards.findIndex(
                                        (card) => card.id === state.listToDropCard.nextCardId,
                                    );

                                    return {
                                        ...newList,
                                        cards: newList.cards.toSpliced(nextCardIndex, 0, dropCard),
                                    };
                                } else {
                                    return newList;
                                }
                            }),
                    };
                } else {
                    return board;
                }
            });
            return saveBoards(updatedBoards);
        }),
    setBoards: (boards) =>
        set(() => ({
            boards: boards,
        })),
}));

export default useStore;
