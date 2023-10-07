import { useEffect, useRef, useState } from 'react';
import { CardData, ItemToDelete } from './types';
import Dropdown from './Dropdown';

interface Props {
    card: CardData;
    onEditCard: (cardId: string, cardText: string) => void;
    onDeleteCard: (item: ItemToDelete) => void;
    setItemToDelete: (item: ItemToDelete) => void;
}

const Card: React.FC<Props> = ({ card, onEditCard, onDeleteCard, setItemToDelete }) => {
    const [text, setText] = useState(card.text);
    const nodeRef = useRef<HTMLDivElement>(null);

    const extraButtons = [
        {
            label: 'Delete',
            onClick: () => setItemToDelete({ id: card.id, kind: 'card', text: text }),
        },
    ];

    const handleChange = (ev: React.ChangeEvent<HTMLDivElement>) => {
        setText(ev.target.innerHTML);
    };

    const saveOrDelete = () => {
        if (text.length === 0) {
            onDeleteCard({ id: card.id, kind: 'card' });
        } else {
            onEditCard(card.id, text);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (nodeRef.current && !nodeRef.current.contains(event.target)) {
                return saveOrDelete();
            }
        };

        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    });

    return (
        <div ref={nodeRef} className="group flex gap-x-1 max-h-44 bg-white rounded-md shadow-md">
            <div
                className="w-full p-2"
                contentEditable
                suppressContentEditableWarning
                onInput={handleChange}
            >
                {/* Use the prop and NOT the text state value */}
                {card.text}
            </div>
            <div className="hidden group-hover:block">
                <Dropdown buttonsList={extraButtons} />
            </div>
        </div>
    );
};

export default Card;
