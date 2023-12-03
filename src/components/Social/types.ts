export type Views = 'allPosts' | 'following' | 'ownProfile';

export type Post = {
    id: string;
    date: string;
    creator: string;
    content: string;
    likes: string[];
};
