import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface Props {
    title: string;
    requestClose: () => void;
}

const ModalHeader: React.FC<Props> = ({ title, requestClose }) => (
    <div className="flex justify-between items-center font-bold mb-4">
        {title}
        <button
            className="w-8 h-8 rounded-full hover:bg-neutral-500 hover:bg-opacity-20"
            onClick={requestClose}
        >
            <FontAwesomeIcon icon={faXmark} />
        </button>
    </div>
);

export default ModalHeader;
