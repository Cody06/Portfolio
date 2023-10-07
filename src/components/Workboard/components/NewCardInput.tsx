import { useState } from 'react';

interface Props {
    columnId: string;
    onCreateCard: (colId: string, cardText: string) => void;
    setShowCreateCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewCardInput: React.FC<Props> = ({ columnId, onCreateCard, setShowCreateCard }) => {
    const [text, setText] = useState('');
    const disabled = text.length === 0;

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => setText(ev.target.value);

    const clearAndCloseTextInput = () => {
        setText('');
        setShowCreateCard(false);
    };

    return (
        <>
            <textarea
                autoFocus
                className="p-2 rounded-md shadow-md"
                placeholder="Type here..."
                value={text}
                onChange={handleChange}
            />
            <div className="flex gap-x-2">
                <button
                    className={`w-full text-white bg-blue-100b rounded-md ${
                        disabled ? 'opacity-25' : 'hover:brightness-90 active:brightness-75'
                    }`}
                    disabled={disabled}
                    onClick={() => {
                        onCreateCard(columnId, text);
                        clearAndCloseTextInput();
                    }}
                >
                    Save
                </button>
                <button
                    className="w-full p-1 text-grey-120 border border-grey-120 rounded-md 
                        hover:bg-grey-100 hover:bg-opacity-20"
                    onClick={clearAndCloseTextInput}
                >
                    Cancel
                </button>
            </div>
        </>
    );
};

export default NewCardInput;
