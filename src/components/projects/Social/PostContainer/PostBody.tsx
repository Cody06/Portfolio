import { useState } from 'react';
import { MAX_POST_LENGTH } from '../data';
import { BodyProps, EditFormProps } from './types';

function EditForm({ content, setIsEditingPost }: EditFormProps) {
    const [editedContent, setEditedContent] = useState(content);

    return (
        <div>
            <textarea
                className="w-full border"
                maxLength={MAX_POST_LENGTH}
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
            />
            <div className="space-x-4">
                <button
                    className="px-2 text-blue-100 border rounded-lg hover:text-blue-110"
                    onClick={() => {
                        // TODO: Add store function
                        console.log('onEditPost(post.id, editedContent);');
                        setIsEditingPost(false);
                    }}
                >
                    Save
                </button>
                <button
                    className="px-2 text-grey-100 border rounded-lg hover:text-grey-120"
                    onClick={() => {
                        setIsEditingPost(false);
                        setEditedContent(content);
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default function PostBody({ content, isEditingPost, setIsEditingPost }: BodyProps) {
    return (
        <>
            {isEditingPost ? (
                <EditForm content={content} setIsEditingPost={setIsEditingPost} />
            ) : (
                <p>{content}</p>
            )}
        </>
    );
}
