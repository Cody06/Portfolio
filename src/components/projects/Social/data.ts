import { FollowingAndFollowers, Post } from './types';

// TODO: Retreive from DB
export const MAX_POST_LENGTH = 200;

export const loggedUserId = 'guest';

export const initialPosts: Post[] = [
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
        content: 'Launching new rocket, again...',
        edited: true,
        likes: [],
    },
    {
        id: '4',
        date: new Date('2023-12-02').toDateString(),
        creator: 'guest',
        content:
            'The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.',
        edited: false,
        likes: [],
    },
].reverse();

export const initialFollowingAndFollowers: FollowingAndFollowers = {
    [loggedUserId]: {
        following: ['cody'],
        followers: [],
    },
    cody: {
        following: [],
        followers: [loggedUserId],
    },
    elon: {
        following: [],
        followers: [],
    },
};
