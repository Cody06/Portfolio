import { useState } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useOutsideClick from '@/hooks/useOutsideClick';

type Button = {
    label: string;
    onClick: () => void;
};

type Props = {
    buttonsList: Button[];
    elipsisStyle: string;
};

export default function Dropdown({ buttonsList, elipsisStyle }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false));

    const DropdownList = (
        <ul className="absolute z-10 right-0 w-max shadow-md rounded-b-md">
            {buttonsList.map((btn) => (
                <li
                    key={btn.label}
                    className="bg-white first:rounded-tl-md last:rounded-b-md p-2 hover:bg-grey-90"
                >
                    <button className="text-left w-full" onClick={btn.onClick}>
                        {btn.label}
                    </button>
                </li>
            ))}
        </ul>
    );

    return (
        <div ref={ref}>
            <button className={`w-8 h-8 ${elipsisStyle}`} onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faEllipsis} />
            </button>
            <div className="relative">{isOpen && DropdownList}</div>
        </div>
    );
}
