'use client';
import { useState } from 'react';
import { Post } from '../types';
import { loggedUserId } from '../data';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';

export default function PostContainer({ post }: { post: Post }) {
    const [isEditingPost, setIsEditingPost] = useState(false);
    const isPostCreator = post.creator === loggedUserId;
    return (
        <article className="min-w-[20rem] space-y-4 p-4 rounded-xl shadow-md">
            <PostHeader
                creator={post.creator}
                date={post.date}
                edited={post.edited}
                isPostCreator={isPostCreator}
            />
            <PostBody
                content={post.content}
                isEditingPost={isEditingPost}
                setIsEditingPost={setIsEditingPost}
            />
            <PostFooter
                isPostCreator={isPostCreator}
                numOfLikes={post.likes.length}
                postId={post.id}
                setIsEditingPost={setIsEditingPost}
            />
        </article>
    );
}
