import { hoverTextStyle } from '@/components/ui/tailwindStyles';
import { Button } from '../../types';

export default function MenuDesktop({ buttonsList }: { buttonsList: Button[] }) {
    return (
        <div className="hidden lg:block">
            <ul className="flex gap-x-10">
                {buttonsList.map(({ label, onClick }) => (
                    <li key={label}>
                        <button
                            className={`text-white font-medium ${hoverTextStyle}`}
                            onClick={onClick}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
