import { useAlertContext } from '../context/alertContext';

export default function AlertBox() {
    const { isOpen, type, message, onClose } = useAlertContext();
    if (!isOpen) return;

    setTimeout(() => onClose(), 3000);

    const typeStyle = {
        success: 'bg-green-400 text-green-950 border border-green-950',
        error: 'bg-red-400 text-red-950 border border-red-950',
        warning: 'bg-yellow-400 text-yellow-950 border border-yellow-950',
    };

    return (
        <div
            className={`fixed z-50 top-10 center-element px-4 py-3 rounded-md alert-animation ${typeStyle[type]}`}
        >
            {message}
        </div>
    );
}
