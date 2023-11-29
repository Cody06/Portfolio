import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import NewPostInput from './NewPostInput';

interface Props {
    userId: string;
}

const AllPosts: React.FC<Props> = ({ userId }) => {
    const initialPosts = [
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
    ];

    const [posts, setPosts] = useState(initialPosts);

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

    return (
        <div className="max-w-[100rem] mx-auto">
            <h1 className="text-lg text-center mb-4">All Posts</h1>

            <NewPostInput savePost={savePost} />

            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="space-y-4 p-4 rounded-xl shadow-md">
                        <div className="flex justify-between">
                            <span className="font-bold">{post.creator}</span>
                            <span className="text-grey-100">{post.date}</span>
                        </div>
                        <p>{post.content}</p>
                        <button
                            className="text-grey-100 space-x-2 hover:text-red"
                            onClick={() => toggleLike(post.id)}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                            <span>{post.likes.length}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPosts;
