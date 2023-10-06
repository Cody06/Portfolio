import React, { useState } from 'react';
import { CardData, ItemToDelete } from './types';
import Dropdown from './Dropdown';
import NewCardInput from './NewCardInput';

interface Props {
    card: CardData;
    onEditCard: (cardId: string, cardText: string) => void;
    setIsEditCardShown: React.Dispatch<React.SetStateAction<boolean>>;
    setItemToDelete: React.Dispatch<React.SetStateAction<ItemToDelete | undefined>>;
}

const Card: React.FC<Props> = ({ card, onEditCard, setIsEditCardShown, setItemToDelete }) => {
    const [showEditCard, setShowEditCard] = useState(false);
    const [updatedCardText, setUpdatedCardText] = useState(card.text);

    const cardExtraButtons = [
        {
            label: 'Edit',
            onClick: () => {
                setShowEditCard(true);
                setIsEditCardShown(true);
            },
        },
        {
            label: 'Delete',
            onClick: () => setItemToDelete({ id: card.id, kind: 'card', text: card.text }),
        },
    ];

    const handleUpdateText = (ev: React.ChangeEvent<HTMLTextAreaElement>) =>
        setUpdatedCardText(ev.target.value);

    return showEditCard ? (
        <>
            <NewCardInput value={updatedCardText} onChange={handleUpdateText} />
            <div className="flex gap-x-2">
                <button
                    className="w-1/2 text-white bg-[#007bff] hover:brightness-90 rounded-md"
                    onClick={() => {
                        onEditCard(card.id, updatedCardText);
                        setShowEditCard(false);
                        setIsEditCardShown(false);
                    }}
                >
                    Save
                </button>
                <button
                    className="w-1/2 text-white bg-orange-100 hover:brightness-90 rounded-md"
                    onClick={() => {
                        setShowEditCard(false);
                        setIsEditCardShown(false);
                        setUpdatedCardText(card.text);
                    }}
                >
                    Cancel
                </button>
            </div>
        </>
    ) : (
        <div className="flex gap-x-1 p-2 max-h-44 bg-white rounded-md shadow-md">
            <p className="w-full overflow-auto">{card.text}</p>
            <Dropdown buttonsList={cardExtraButtons} />
        </div>
    );
};

export default Card;
