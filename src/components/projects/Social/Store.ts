import { create } from 'zustand';
import { Post } from './types';
import { initialPosts, loggedUserId } from './data';

type Store = {
    isDeletePostModalOpen: boolean;
    posts: Post[];
    postIdToDelete: string | null;
    createPost: (newPost: string) => void;
    deletePost: () => void;
    editPost: (postId: string, editedContent: string) => void;
    setIsDeletePostModalOpen: (isOpen: boolean, postId?: string) => void;
    toggleLike: (postId: string) => void;
};

const useStore = create<Store>()((set) => ({
    isDeletePostModalOpen: false,
    posts: initialPosts,
    postIdToDelete: null,
    createPost: (newPost) =>
        set((state) => ({
            posts: [
                {
                    id: `${loggedUserId}-${Date.now().toString()}`,
                    date: new Date().toDateString(),
                    creator: loggedUserId,
                    content: newPost,
                    edited: false,
                    likes: [],
                },
                ...state.posts,
            ],
        })),
    deletePost: () =>
        set((state) => ({
            posts: state.posts.filter((post) => post.id !== state.postIdToDelete),
        })),
    editPost: (postId, editedContent) =>
        set((state) => ({
            posts: [
                ...state.posts.map((post) => {
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
            ],
        })),
    setIsDeletePostModalOpen: (isOpen, postId) =>
        set(() => {
            if (isOpen) {
                return {
                    isDeletePostModalOpen: true,
                    postIdToDelete: postId,
                };
            } else {
                return {
                    isDeletePostModalOpen: false,
                    postIdToDelete: null,
                };
            }
        }),
    toggleLike: (postId) =>
        set((state) => ({
            posts: [
                ...state.posts.map((post) => {
                    if (post.id === postId) {
                        // Toggle the like/unlike by adding or removing the userId
                        const userAlreadyLikedPost = post.likes.includes(loggedUserId);

                        if (userAlreadyLikedPost) {
                            return {
                                ...post,
                                likes: post.likes.filter(
                                    (likeUserId) => likeUserId !== loggedUserId,
                                ),
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
            ],
        })),
}));

export default useStore;
