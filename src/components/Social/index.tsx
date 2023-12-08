'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import AllPosts from './components/AllPosts';
import Following from './components/Following';
import { Post, Views } from './types';
import OwnProfile from './components/OwnProfile';

const Social = () => {
    // TODO: Add user Id from login
    const userId = 'guest';

    const initialPosts: Post[] = [
        {
            id: '1',
            date: new Date('2023-10-12').toDateString(),
            creator: 'cody',
            content: 'Hello and welcome to Social!',
            likes: ['guest'],
        },
        {
            id: '2',
            date: new Date('2023-10-12').toDateString(),
            creator: 'cody',
            content: 'Looking forward to see what everyone has to share!',
            likes: [],
        },
        {
            id: '3',
            date: new Date('2023-12-02').toDateString(),
            creator: 'guest',
            content: 'This is my first post',
            likes: [],
        },
    ];

    const [selectedView, setSelectedView] = useState<Views>('allPosts');
    const [posts, setPosts] = useState(initialPosts);

    const userPosts = posts.filter((post) => post.creator === userId);

    const savePost = (newPost: string) => {
        setPosts([
            {
                id: `${userId}-${Date.now().toString()}`,
                date: new Date().toDateString(),
                creator: userId,
                content: newPost,
                likes: [],
            },
            ...posts,
        ]);
    };

    const toggleLike = (postId: string) => {
        setPosts(
            posts.map((post) => {
                if (post.id === postId) {
                    const userAlreadyLikedPost = post.likes.includes(userId);

                    if (userAlreadyLikedPost) {
                        return {
                            ...post,
                            likes: post.likes.filter((likedUserId) => likedUserId !== userId),
                        };
                    } else {
                        return {
                            ...post,
                            likes: [...post.likes, userId],
                        };
                    }
                } else {
                    return post;
                }
            }),
        );
    };

    const views = {
        allPosts: (
            <AllPosts
                userId={userId}
                allPosts={posts}
                savePost={savePost}
                toggleLike={toggleLike}
            />
        ),
        following: <Following />,
        ownProfile: <OwnProfile userId={userId} userPosts={userPosts} />,
    };

    return (
        <>
            <div className="bg-blue-100">
                <div className="flex justify-between p-2 text-white max-w-[70rem] mx-auto">
                    <span className="text-2xl font-bold">Social</span>
                    <Link href="/" className="hover:text-orange-100">
                        Back to Portfolio
                    </Link>
                </div>
            </div>

            <div className="flex flex-col md:flex-row p-4 gap-x-4 max-w-[70rem] mx-auto">
                <Nav user="guest" setSelectedView={setSelectedView} />

                {views[selectedView]}
            </div>
        </>
    );
};

export default Social;
