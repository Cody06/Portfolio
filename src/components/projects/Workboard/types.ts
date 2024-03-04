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

export type DropColumn = {
    newColId?: string;
    nextCardId?: string;
};
