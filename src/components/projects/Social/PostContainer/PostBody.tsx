import { useState } from 'react';
import { MAX_POST_LENGTH } from '../data';
import { BodyProps, EditFormProps } from './types';
import useStore from '../Store';

function EditForm({ content, postId, setIsEditingPost }: EditFormProps) {
    const [editedContent, setEditedContent] = useState(content);
    const { editPost } = useStore();

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
                    className="px-2 text-sky-600 border rounded-lg hover:text-blue-110"
                    onClick={() => {
                        editPost(postId, editedContent);
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

export default function PostBody({ content, isEditingPost, postId, setIsEditingPost }: BodyProps) {
    return (
        <>
            {isEditingPost ? (
                <EditForm content={content} postId={postId} setIsEditingPost={setIsEditingPost} />
            ) : (
                <p className="break-words text-balance">{content}</p>
            )}
        </>
    );
}
