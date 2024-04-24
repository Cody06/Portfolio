export type CardData = {
    id: string;
    text: string;
};

export type ListData = {
    id: string;
    title: string;
    cards: CardData[];
};

export type ListToDelete = {
    id: string;
    title: string;
};

export type ListToDropCard = {
    newListId: string | null;
    nextCardId: string | null;
};

export type Board = {
    id: string;
    title: string;
    creationDate: string;
    lists: ListData[];
};
