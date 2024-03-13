import { SetStateAction, createContext, useContext, useState } from 'react';

type AlertType = 'success' | 'error' | 'warning';

type AlertState = {
    isOpen: boolean;
    type: AlertType;
    message: string;
};

type AlertContext = AlertState & {
    onOpen: (type: AlertType, message: string) => SetStateAction<AlertState> | void;
    onClose: () => SetStateAction<AlertState> | void;
};

const defaultContext: AlertContext = {
    isOpen: false,
    type: 'success',
    message: '',
    onOpen: () => undefined,
    onClose: () => undefined,
};

const AlertContext = createContext<AlertContext>(defaultContext);

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<AlertState>(defaultContext);

    return (
        <AlertContext.Provider
            value={{
                ...state,
                onOpen: (type, message) => setState({ isOpen: true, type, message }),
                onClose: () => setState({ isOpen: false, type: 'success', message: '' }),
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};

export const useAlertContext = () => useContext(AlertContext);
