import { useState } from 'react';
import useStore from '../../Store';
import PrimaryButton from '../../ui/PrimaryButton';
import CancelButton from '../../ui/CancelButton';

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
                <CancelButton onClick={clearAndCloseTextInput} />
                <PrimaryButton
                    label="Save"
                    disabled={!text}
                    onClick={() => {
                        createCard(boardId, columnId, text);
                        clearAndCloseTextInput();
                    }}
                />
            </div>
        </>
    );
}
