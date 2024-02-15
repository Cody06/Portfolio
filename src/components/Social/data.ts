import { FollowingAndFollowers } from './types';

// TODO: Move this to DB
export const loggedUserId = 'guest';

export const initialFollowingAndFollowers: FollowingAndFollowers = {
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
