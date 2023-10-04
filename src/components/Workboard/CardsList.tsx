import React from 'react';
import { CardData, ItemToDelete } from './types';
import Dropdown from './Dropdown';

interface Props {
    cards: CardData[];
    setItemToDelete: React.Dispatch<React.SetStateAction<ItemToDelete | undefined>>;
}

const CardsList: React.FC<Props> = ({ cards, setItemToDelete }) => {
    const cardExtraButtons = (card: CardData) => [
        {
            label: 'Edit',
            onClick: () => console.log('Item to delete'),
        },
        {
            label: 'Delete',
            onClick: () => setItemToDelete({ id: card.id, kind: 'card', text: card.text }),
        },
    ];
    return cards.map((card) => (
        <div className="flex gap-x-1 p-2 max-h-44 bg-white rounded-md shadow-md" key={card.id}>
            <p className="w-full overflow-auto">{card.text}</p>
            <Dropdown buttonsList={cardExtraButtons(card)} />
        </div>
    ));
};

export default CardsList;
