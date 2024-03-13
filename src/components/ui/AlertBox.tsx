import { useAlertContext } from '../context/alertContext';

export default function AlertBox() {
    const { isOpen, type, message, onClose } = useAlertContext();
    if (!isOpen) return;

    setTimeout(() => onClose(), 3000);

    const typeStyle = {
        success: { backgroundColor: 'lightgreen', color: 'green', border: '2px solid green' },
        error: { backgroundColor: 'orange', color: 'darkred', border: '2px solid darkred' },
        warning: { backgroundColor: 'lightyellow', color: 'orange', border: '2px solid orange' },
    };

    return (
        <div
            className="absolute z-50 top-10 left-[50%] -translate-x-[50%] px-4 py-3 rounded-md alert-animation"
            style={typeStyle[type]}
        >
            {message}
        </div>
    );
}
