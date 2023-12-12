export type Views = 'allPosts' | 'following' | 'profile';

export type Post = {
    id: string;
    date: string;
    creator: string;
    content: string;
    likes: string[];
};

export type FollowingAndFollowers = {
    [user: string]: {
        following: string[];
        followers: string[];
    };
};
