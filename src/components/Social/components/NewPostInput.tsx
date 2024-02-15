import { useState } from 'react';

interface Props {
    onCreatePost: (newPost: string) => void;
}

const NewPostInput: React.FC<Props> = ({ onCreatePost }) => {
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
                // TODO: move in a global variable
                maxLength={150}
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
};

export default NewPostInput;
