import { useState } from 'react';
import useStore from '../../Store';

type Props = {
    boardId: string;
    columnId: string;
    setShowCreateCard: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewCardInput({ boardId, columnId, setShowCreateCard }: Props) {
    const [text, setText] = useState('');
    const { createCard } = useStore();

    const clearAndCloseTextInput = () => {
        setText('');
        setShowCreateCard(false);
    };

    return (
        <>
            <textarea
                autoFocus
                className="w-full p-2 rounded-md shadow-md mb-1"
                placeholder="Type here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="flex gap-x-2">
                <button
                    className={`w-full text-white bg-blue-500 rounded-md ${
                        !text ? 'opacity-25' : 'hover:brightness-90 active:brightness-75'
                    }`}
                    disabled={!text}
                    onClick={() => {
                        createCard(boardId, columnId, text);
                        clearAndCloseTextInput();
                    }}
                >
                    Save
                </button>
                <button
                    className="w-full p-1 text-grey-120 border border-grey-120 rounded-md 
                        hover:bg-neutral-500 hover:bg-opacity-20"
                    onClick={clearAndCloseTextInput}
                >
                    Cancel
                </button>
            </div>
        </>
    );
}
