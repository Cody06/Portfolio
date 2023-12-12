'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import AllPosts from './components/AllPosts';
import Following from './components/Following';
import { FollowingAndFollowers, Post, Views } from './types';
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
            date: new Date('2023-10-15').toDateString(),
            creator: 'cody',
            content: 'Looking forward to see what everyone has to share!',
            likes: [],
        },
        {
            id: '3',
            date: new Date('2023-10-16').toDateString(),
            creator: 'elon',
            content: 'Launching new rocket',
            likes: [],
        },
        {
            id: '4',
            date: new Date('2023-12-02').toDateString(),
            creator: 'guest',
            content: 'This is my first post',
            likes: [],
        },
    ];

    const initialFollowingAndFollowers: FollowingAndFollowers = {
        [loggedUserId]: {
            followers: [],
            following: ['cody'],
        },
        cody: {
            followers: ['guest'],
            following: [],
        },
        elon: {
            followers: [],
            following: [],
        },
    };

    const [selectedView, setSelectedView] = useState<Views>('allPosts');
    const [selectedUser, setSelectedUser] = useState(loggedUserId);
    const [posts, setPosts] = useState(initialPosts.reverse());
    const [followingAndFollowers, setFollowingAndFollowers] = useState(
        initialFollowingAndFollowers,
    );

    const followUser = (followingUserId: string) => {
        // Add followingUser to loggedUser's following list
        // Add loggedUser to followingUser's followers list
        setFollowingAndFollowers({
            ...followingAndFollowers,
            [loggedUserId]: {
                followers: [...followingAndFollowers[loggedUserId].followers],
                following: [...followingAndFollowers[loggedUserId].following, followingUserId],
            },
            [followingUserId]: {
                followers: [...followingAndFollowers[followingUserId].followers, loggedUserId],
                following: [...followingAndFollowers[followingUserId].following],
            },
        });
    };

    const unfollowUser = (followingUserId: string) => {
        // Remove followingUser from loggedUser's following list
        // Remove loggedUser from followingUser's followers list
        setFollowingAndFollowers({
            ...followingAndFollowers,
            [loggedUserId]: {
                followers: [...followingAndFollowers[loggedUserId].followers],
                following: followingAndFollowers[loggedUserId].following.filter(
                    (existingUser) => existingUser !== followingUserId,
                ),
            },
            [followingUserId]: {
                followers: followingAndFollowers[followingUserId].followers.filter(
                    (existingUser) => existingUser !== loggedUserId,
                ),
                following: [...followingAndFollowers[followingUserId].following],
            },
        });
    };

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

    const getFollowingPosts = () =>
        posts.filter((post) =>
            followingAndFollowers[loggedUserId].following.includes(post.creator),
        );

    const views = {
        allPosts: (
            <AllPosts
                allPosts={posts}
                loggedUserId={loggedUserId}
                savePost={savePost}
                showSelectedUserProfile={showSelectedUserProfile}
                toggleLike={toggleLike}
            />
        ),
        following: (
            <Following
                followingPosts={getFollowingPosts()}
                loggedUserId={loggedUserId}
                showSelectedUserProfile={showSelectedUserProfile}
                toggleLike={toggleLike}
            />
        ),
        profile: (
            <Profile
                followingAndFollowers={followingAndFollowers}
                loggedUserId={loggedUserId}
                selectedUserId={selectedUser}
                userPosts={getSelectedUserPosts(selectedUser)}
                toggleLike={toggleLike}
                followUser={followUser}
                unfollowUser={unfollowUser}
            />
        ),
    };

    return (
        <>
            <header className="bg-blue-100">
                <div className="flex justify-between p-2 text-white max-w-[70rem] mx-auto">
                    <span className="text-2xl font-bold">Social</span>
                    <Link href="/" className="hover:text-orange-100">
                        Back to Portfolio
                    </Link>
                </div>
            </header>

            <div className="flex flex-col md:flex-row p-4 gap-x-4 max-w-[70rem] mx-auto">
                <Nav
                    loggedUserId={loggedUserId}
                    setSelectedUser={setSelectedUser}
                    setSelectedView={setSelectedView}
                />

                {views[selectedView]}
            </div>
        </>
    );
};

export default Social;
