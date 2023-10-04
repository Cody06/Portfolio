import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

type Button = {
    label: string;
    onClick: () => void;
};
interface Props {
    buttonsList: Button[];
}

const Dropdown: React.FC<Props> = ({ buttonsList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if (nodeRef.current && !nodeRef.current.contains(event.target)) {
            return setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    });

    const DropdownList = (
        <ul className="absolute right-0 bg-white rounded-b-md rounded-tl-md shadow-md">
            {buttonsList.map((btn) => (
                <li key={btn.label} className="p-2 hover:bg-grey-90">
                    <button className="text-left w-full" onClick={btn.onClick}>
                        {btn.label}
                    </button>
                </li>
            ))}
        </ul>
    );
    return (
        <div ref={nodeRef}>
            <button className="text-grey-100 hover:text-black" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faEllipsis} />
            </button>
            <div className="relative">{isOpen && DropdownList}</div>
        </div>
    );
};

export default Dropdown;
