import { Post } from '../types';
import PostContainer from './PostContainer';

interface Props {
    userId: string;
    userPosts: Post[];
}

const OwnProfile: React.FC<Props> = ({ userId, userPosts }) => {
    // Pass this as a prop
    const data = {
        numOfFollowers: 0,
        numOfFollowing: 0,
    };

    return (
        <div className="max-1-[1000rem] mx-auto">
            <h1 className="text-2xl text-center font-bold mb-4">{userId}&apos;s posts</h1>
            <div className="flex justify-center gap-x-5 text-sm text-center">
                <div>
                    <p>{data.numOfFollowers}</p>
                    <p>following</p>
                </div>
                <div>
                    <p>{data.numOfFollowing}</p>
                    <p>following</p>
                </div>
            </div>

            <section className="min-w-[24rem]">
                {userPosts.map((post) => (
                    <PostContainer key={post.id} post={post} />
                ))}
            </section>
        </div>
    );
};

export default OwnProfile;
