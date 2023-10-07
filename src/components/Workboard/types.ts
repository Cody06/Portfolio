export type CardData = {
    id: string;
    text: string;
};

export type ColumnData = {
    id: string;
    title: string;
    cards: CardData[];
};

export type ItemToDelete = {
    id: string;
    kind: 'card' | 'column';
    text?: string;
};
