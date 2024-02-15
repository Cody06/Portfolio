import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Post } from '../types';
import { MAX_POST_LENGTH } from '..';
import { loggedUserId } from '../data';

interface Props {
    post: Post;
    onToggleLike: (postId: string) => void;
    onEditPost?: (postId: string, editedContent: string) => void;
    onOpenDeletePostModal?: (postId: string) => void;
    onShowSelectedUserProfile?: (selectedUserId: string) => void;
}

const PostContainer: React.FC<Props> = ({
    post,
    onToggleLike,
    onEditPost,
    onOpenDeletePostModal,
    onShowSelectedUserProfile,
}) => {
    const [editingPost, setEditingPost] = useState(false);
    const [editedContent, setEditedContent] = useState(post.content);
    const isCreatorOfPost = post.creator === loggedUserId;

    return (
        <div className="min-w-[20rem] space-y-4 p-4 rounded-xl shadow-md">
            <div className="flex justify-between">
                {!isCreatorOfPost && onShowSelectedUserProfile ? (
                    <button
                        className="font-bold text-blue-100 hover:text-blue-110"
                        onClick={() => onShowSelectedUserProfile(post.creator)}
                    >
                        {post.creator}
                    </button>
                ) : (
                    <span className="font-bold">{post.creator}</span>
                )}
                <span className="text-grey-100 space-x-2">
                    {post.edited && (
                        <>
                            <em className="text-xs">Edited</em>
                            <span>-</span>
                        </>
                    )}
                    <span>{post.date}</span>
                </span>
            </div>

            {editingPost && onEditPost ? (
                <>
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
                                onEditPost(post.id, editedContent);
                                setEditingPost(false);
                            }}
                        >
                            Save
                        </button>
                        <button
                            className="px-2 text-grey-100 border rounded-lg hover:text-grey-120"
                            onClick={() => {
                                setEditingPost(false);
                                setEditedContent(post.content);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <p>{post.content}</p>
                    <div className="space-x-4 text-grey-100">
                        <button
                            className="space-x-2 hover:text-red"
                            title="Like"
                            onClick={() => onToggleLike(post.id)}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                            <span>{post.likes.length}</span>
                        </button>
                        {isCreatorOfPost && (
                            <>
                                {onEditPost && (
                                    <button
                                        className="hover:text-blue-110"
                                        onClick={() => setEditingPost(true)}
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                )}
                                {onOpenDeletePostModal && (
                                    <button
                                        className="hover:text-blue-110"
                                        onClick={() => onOpenDeletePostModal(post.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default PostContainer;
