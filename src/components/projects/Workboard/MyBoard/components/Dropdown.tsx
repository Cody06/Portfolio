import { useState } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useOutsideClick from '@/hooks/useOutsideClick';
import { iconBgHover } from '@/components/ui/tailwindStyles';

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
        <ul className="absolute z-10 right-0 bg-white rounded-tl-lg rounded-b-lg w-max shadow-md">
            {buttonsList.map((btn) => (
                <li
                    key={btn.label}
                    className={`first:rounded-tl-lg last:rounded-b-lg px-4 py-2 ${iconBgHover}`}
                    onClick={btn.onClick}
                >
                    {btn.label}
                </li>
            ))}
        </ul>
    );

    return (
        <div ref={ref}>
            <button className={elipsisStyle} onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faEllipsis} size="xl" />
            </button>
            <div className="relative">{isOpen && DropdownList}</div>
        </div>
    );
}
