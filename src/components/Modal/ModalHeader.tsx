import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface Props {
    title: string;
    requestClose: () => void;
}

const ModalHeader: React.FC<Props> = ({ title, requestClose }) => (
    <div className="flex justify-between mb-4">
        {title}
        <button onClick={requestClose}>
            <FontAwesomeIcon icon={faXmark} className="hover:text-secondary-100" />
        </button>
    </div>
);

export default ModalHeader;
