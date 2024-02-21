import { useState } from 'react';
import { MAX_POST_LENGTH } from '..';

type Props = {
    onCreatePost: (newPost: string) => void;
};

export default function NewPostInput({ onCreatePost }: Props) {
    // Created this component to optimize re-rendering on every keystroke
    const [newPost, setNewPost] = useState('');

    return (
        <div
            className="flex flex-col gap-y-4 mb-4 p-2
        border border-grey-100 rounded-xl"
        >
            <textarea
                className="p-2 border border-grey-100 rounded-lg"
                placeholder="What is happening?!"
                maxLength={MAX_POST_LENGTH}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
            />
            <button
                className={`w-max m-auto p-2 text-white bg-blue-100 rounded-lg ${
                    !newPost ? 'opacity-25' : 'hover:bg-opacity-80'
                }`}
                disabled={!newPost}
                onClick={() => {
                    onCreatePost(newPost);
                    setNewPost('');
                }}
            >
                Post
            </button>
        </div>
    );
}
