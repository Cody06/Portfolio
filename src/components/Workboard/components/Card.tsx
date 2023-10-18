import { useState } from 'react';
import { CardData, ItemToDelete } from '../types';

interface Props {
    card: CardData;
    onEditCard: (cardId: string, cardText: string) => void;
    onDeleteCard: (item: ItemToDelete) => void;
    onDrop: (card: CardData) => void;
}

const Card: React.FC<Props> = ({ card, onEditCard, onDeleteCard, onDrop }) => {
    const [text, setText] = useState(card.text);
    const [isDragging, setIsDragging] = useState(false);

    const handleChange = (ev: React.ChangeEvent<HTMLDivElement>) => {
        setText(ev.target.innerHTML);
    };

    const handleClickOutside = () => {
        if (text.length === 0) {
            onDeleteCard({ id: card.id, kind: 'card' });
        } else {
            onEditCard(card.id, text);
        }
    };

    return (
        <div
            id={card.id}
            className={`draggable group flex gap-x-1 max-h-44 bg-white rounded-md shadow-md ${
                isDragging && 'opacity-20 dragging'
            }`}
            draggable
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
                setIsDragging(false);
                onDrop(card);
            }}
            onBlur={handleClickOutside}
        >
            <div
                className="w-full p-2"
                contentEditable
                suppressContentEditableWarning
                onInput={handleChange}
            >
                {/* Use the prop and NOT the text state value */}
                {card.text}
            </div>
        </div>
    );
};

export default Card;
