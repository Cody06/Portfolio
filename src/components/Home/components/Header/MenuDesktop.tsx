import { hoverTextStyle } from '@/components/ui/tailwindStyles';
import { Button } from '../../types';

export default function MenuDesktop({ buttonsList }: { buttonsList: Button[] }) {
    return (
        <div className="hidden lg:block">
            <ul className="flex gap-x-10">
                {buttonsList.map((button) => (
                    <li key={button.id}>
                        <button
                            className={`text-white font-medium ${hoverTextStyle}`}
                            onClick={button.onClick}
                        >
                            {button.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
