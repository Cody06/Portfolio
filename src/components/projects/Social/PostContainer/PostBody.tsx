import { useState } from 'react';
import { MAX_POST_LENGTH } from '../data';
import { BodyProps, EditFormProps } from './types';
import useStore from '../Store';
import PrimaryButton from '../ui/PrimaryButton';
import CancelButton from '../ui/CancelButton';

function EditForm({ content, postId, setIsEditingPost }: EditFormProps) {
    const [editedContent, setEditedContent] = useState(content);
    const { editPost } = useStore();

    return (
        <>
            <textarea
                className="w-full border rounded-lg p-1 mb-2"
                maxLength={MAX_POST_LENGTH}
                rows={4}
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
            />
            <div className="space-x-4">
                <CancelButton
                    size="sm"
                    onClick={() => {
                        setIsEditingPost(false);
                        setEditedContent(content);
                    }}
                />
                <PrimaryButton
                    label="Save"
                    size="sm"
                    onClick={() => {
                        editPost(postId, editedContent);
                        setIsEditingPost(false);
                    }}
                />
            </div>
        </>
    );
}

export default function PostBody({ content, isEditingPost, postId, setIsEditingPost }: BodyProps) {
    return (
        <section>
            {isEditingPost ? (
                <EditForm content={content} postId={postId} setIsEditingPost={setIsEditingPost} />
            ) : (
                <p className="break-words text-balance">{content}</p>
            )}
        </section>
    );
}
