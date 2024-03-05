export type CardData = {
    id: string;
    text: string;
};

export type ColumnData = {
    id: string;
    title: string;
    cards: CardData[];
};

export type ColToDelete = {
    id: string;
    text: string;
};

export type ColumnToDropCard = {
    newColId: string | null;
    nextCardId: string | null;
};

export type Board = {
    id: string;
    title: string;
    creationDate: Date;
    columns: ColumnData[];
};
