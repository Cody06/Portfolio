export type Post = {
    id: string;
    date: string;
    creator: string;
    content: string;
    edited: boolean;
    likes: string[];
};

export type FollowingAndFollowers = {
    [user: string]: {
        following: string[];
        followers: string[];
    };
};
