import { Post } from '../types';
import PostContainer from './PostContainer';

interface Props {
    userId: string;
    userPosts: Post[];
}

const OwnProfile: React.FC<Props> = ({ userId, userPosts }) => {
    return (
        <div className="max-1-[1000rem] mx-auto">
            <div className="space-x-4">
                <span>0 Following</span>
                <span>0 Followers</span>
            </div>
            <h1 className="text-lg text-center mb-4">{userId}&apos;s posts</h1>
            {userPosts.map((post) => (
                <PostContainer key={post.id} post={post} />
            ))}
        </div>
    );
};

export default OwnProfile;
