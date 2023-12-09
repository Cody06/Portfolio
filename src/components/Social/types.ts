export type Views = 'allPosts' | 'following' | 'profile';

export type Post = {
    id: string;
    date: string;
    creator: string;
    content: string;
    likes: string[];
};
