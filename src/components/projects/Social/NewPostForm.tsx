'use client';
import { useState } from 'react';
import { MAX_POST_LENGTH } from './data';
import useStore from './Store';

export default function NewPostForm() {
    const [newPost, setNewPost] = useState('');
    const { createPost } = useStore();

    return (
        <section
            className="flex flex-col gap-y-4 mb-4 p-2 w-full max-w-[40rem]
                rounded-xl shadow-md"
        >
            <textarea
                className="p-2 border border-blue-100 rounded-lg"
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
                    createPost(newPost);
                    setNewPost('');
                }}
            >
                Post
            </button>
        </section>
    );
}
