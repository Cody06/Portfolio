'use client';

import { useState } from 'react';
import Link from 'next/link';

import AllPosts from './components/AllPosts';
import Following from './components/Following';
import Nav from './components/Nav';
import Profile from './components/Profile';
import { Post, Views } from './types';
import { initialFollowingAndFollowers, loggedUserId } from './data';

export const MAX_POST_LENGTH = 150;

export default function Social() {
    // Having this in the data module causes TypeError (TODO: Fix)
    const initialPosts: Post[] = [
        {
            id: '1',
            date: new Date('2023-10-12').toDateString(),
            creator: 'cody',
            content: 'Hello and welcome to Social!',
            edited: false,
            likes: ['guest'],
        },
        {
            id: '2',
            date: new Date('2023-10-15').toDateString(),
            creator: 'cody',
            content: 'Looking forward to see what everyone has to share!',
            edited: false,
            likes: [],
        },
        {
            id: '3',
            date: new Date('2023-10-16').toDateString(),
            creator: 'elon',
            content: 'Launching new rocket',
            edited: false,
            likes: [],
        },
        {
            id: '4',
            date: new Date('2023-12-02').toDateString(),
            creator: 'guest',
            content: 'This is my first post',
            edited: false,
            likes: [],
        },
    ];

    const [selectedView, setSelectedView] = useState<Views>('allPosts');
    const [selectedUser, setSelectedUser] = useState(loggedUserId);
    const [posts, setPosts] = useState(initialPosts.reverse());
    const [followingAndFollowers, setFollowingAndFollowers] = useState(
        initialFollowingAndFollowers,
    );

    const handleFollowUser = (followingUserId: string) => {
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

    const handleUnfollowUser = (followingUserId: string) => {
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

    const handleCreatePost = (newPost: string) => {
        setPosts([
            {
                id: `${loggedUserId}-${Date.now().toString()}`,
                date: new Date().toDateString(),
                creator: loggedUserId,
                content: newPost,
                edited: false,
                likes: [],
            },
            ...posts,
        ]);
    };

    const handleToggleLike = (postId: string) => {
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

    const handleDeletePost = (postId: string) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

    const handleEditPost = (postId: string, editedContent: string) => {
        setPosts(
            posts.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        content: editedContent,
                        edited: true,
                    };
                } else {
                    return post;
                }
            }),
        );
    };

    const handleShowSelectedUserProfile = (selectedUserId: string) => {
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
                onCreatePost={handleCreatePost}
                onShowSelectedUserProfile={handleShowSelectedUserProfile}
                onToggleLike={handleToggleLike}
            />
        ),
        following: (
            <Following
                followingPosts={getFollowingPosts()}
                onShowSelectedUserProfile={handleShowSelectedUserProfile}
                onToggleLike={handleToggleLike}
            />
        ),
        profile: (
            <Profile
                followingAndFollowers={followingAndFollowers}
                selectedUserId={selectedUser}
                userPosts={getSelectedUserPosts(selectedUser)}
                onDeletePost={handleDeletePost}
                onEditPost={handleEditPost}
                onFollowUser={handleFollowUser}
                onToggleLike={handleToggleLike}
                onUnfollowUser={handleUnfollowUser}
            />
        ),
    };

    return <>{views[selectedView]}</>;
}
