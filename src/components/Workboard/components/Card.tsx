import { useEffect, useRef, useState } from 'react';
import { CardData, ItemToDelete } from '../types';

interface Props {
    card: CardData;
    onEditCard: (cardId: string, cardText: string) => void;
    onDeleteCard: (item: ItemToDelete) => void;
    setItemToDelete: (item: ItemToDelete) => void;
}

const Card: React.FC<Props> = ({ card, onEditCard, onDeleteCard, setItemToDelete }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState(card.text);
    const ref = useRef<HTMLDivElement>(null);

    const handleChange = (ev: React.ChangeEvent<HTMLDivElement>) => {
        setText(ev.target.innerHTML);
    };

    const handleClickOutside = () => {
        // Apply changes only to the focused card
        if (!isFocused) return;

        if (text.length === 0) {
            onDeleteCard({ id: card.id, kind: 'card' });
        } else {
            onEditCard(card.id, text);
        }
        setIsFocused(false);
    };

    useEffect(() => {
        const onOutsideClick = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handleClickOutside();
            }
        };

        document.addEventListener('click', onOutsideClick, true);

        return () => {
            document.removeEventListener('click', onOutsideClick, true);
        };
    });

    return (
        <div
            ref={ref}
            className="group flex gap-x-1 max-h-44 bg-white rounded-md shadow-md"
            onFocus={() => setIsFocused(true)}
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
