'use client';
import { FormEvent, useState } from 'react';
import useStore from './Store';
import { MAX_POST_LENGTH } from './data';
import Card from './ui/Card';
import PrimaryButton from './ui/PrimaryButton';

export default function NewPostForm() {
    const [newPost, setNewPost] = useState('');
    const { createPost } = useStore();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createPost(newPost);
        setNewPost('');
    };
    return (
        <Card>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-4">
                <textarea
                    className="border border-sky-600 rounded-lg w-full px-3 py-2"
                    placeholder="What is happening?!"
                    maxLength={MAX_POST_LENGTH}
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />
                <PrimaryButton label="Post" disabled={!newPost} size="sm" type="submit" />
            </form>
        </Card>
    );
}
