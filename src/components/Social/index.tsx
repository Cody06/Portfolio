'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import AllPosts from './components/AllPosts';
import Following from './components/Following';
import { Post, Views } from './types';
import Profile from './components/Profile';

const Social = () => {
    // TODO: Add user Id from login
    const loggedUserId = 'guest';

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
    const [selectedUser, setSelectedUser] = useState(loggedUserId);
    const [posts, setPosts] = useState(initialPosts);

    const savePost = (newPost: string) => {
        setPosts([
            {
                id: `${loggedUserId}-${Date.now().toString()}`,
                date: new Date().toDateString(),
                creator: loggedUserId,
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
                    const userAlreadyLikedPost = post.likes.includes(loggedUserId);

                    if (userAlreadyLikedPost) {
                        return {
                            ...post,
                            likes: post.likes.filter((likedUserId) => likedUserId !== loggedUserId),
                        };
                    } else {
                        return {
                            ...post,
                            likes: [...post.likes, loggedUserId],
                        };
                    }
                } else {
                    return post;
                }
            }),
        );
    };

    const showSelectedUserProfile = (selectedUserId: string) => {
        setSelectedUser(selectedUserId);
        setSelectedView('profile');
    };

    const getSelectedUserPosts = (user: string) => posts.filter((post) => post.creator === user);

    const views = {
        allPosts: (
            <AllPosts
                loggedUserId={loggedUserId}
                allPosts={posts}
                savePost={savePost}
                showSelectedUserProfile={showSelectedUserProfile}
                toggleLike={toggleLike}
            />
        ),
        following: <Following />,
        profile: (
            <Profile
                selectedUserId={selectedUser}
                userPosts={getSelectedUserPosts(selectedUser)}
                toggleLike={toggleLike}
            />
        ),
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
                <Nav
                    loggedUserId="guest"
                    setSelectedUser={setSelectedUser}
                    setSelectedView={setSelectedView}
                />

                {views[selectedView]}
            </div>
        </>
    );
};

export default Social;
