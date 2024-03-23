'use client';
import { useState } from 'react';
import useStore from './Store';
import { MAX_POST_LENGTH } from './data';
import CardContainer from './CardContainer';

export default function NewPostForm() {
    const [newPost, setNewPost] = useState('');
    const { createPost } = useStore();

    return (
        <CardContainer>
            <div className="flex flex-col gap-y-4">
                <textarea
                    className="border border-sky-600 rounded-lg px-3 py-2"
                    placeholder="What is happening?!"
                    maxLength={MAX_POST_LENGTH}
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />
                <button
                    className={`w-max m-auto p-2 text-white bg-sky-600 rounded-lg ${
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
            </div>
        </CardContainer>
    );
}
