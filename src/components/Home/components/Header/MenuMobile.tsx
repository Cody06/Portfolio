import { Button } from '../../types';
import DropdownMenu from './DropdownMenu';

export default function MenuMobile({ buttonsList }: { buttonsList: Button[] }) {
    return (
        <div className="lg:hidden">
            <DropdownMenu buttonsList={buttonsList} />
        </div>
    );
}
