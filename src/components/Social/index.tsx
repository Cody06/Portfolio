import Link from 'next/link';
import Nav from './components/Nav';

const Social = () => (
    <>
        <div className="flex justify-between p-4 text-white bg-blue-100">
            <span className="font-bold">Social</span>
            <Link href="/" className="hover:text-orange-100">
                Back to Portfolio
            </Link>
        </div>

        <div>
            <Nav user="guest" />

            {/* TODO: Container for the different sections */}
            <div>
                <h1>
                    All Posts
                </h1>

                <div className="flex flex-col gap-y-4 p-4 border">
                    <textarea className="border" />
                    <button className="w-max m-auto border p-2">Post</button>
                </div>

                <div>
                    List of posts
                </div>
            </div>
        </div>


    </>
);

export default Social;
