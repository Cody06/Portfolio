'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import AllPosts from './components/AllPosts';
import Following from './components/Following';
import { Views } from './types';
import OwnProfile from './components/OwnProfile';

const Social = () => {
    // TODO: Add user Id from login
    const userId = 'guest';

    const [selectedView, setSelectedView] = useState<Views>('allPosts');

    const views = {
        allPosts: <AllPosts userId={userId} />,
        following: <Following />,
        ownProfile: <OwnProfile />,
    };

    return (
        <>
            <div className="bg-blue-100">
                <div className="flex justify-between p-4 text-white max-w-[70rem] mx-auto">
                    <span className="font-bold">Social</span>
                    <Link href="/" className="hover:text-orange-100">
                        Back to Portfolio
                    </Link>
                </div>
            </div>

            <div className="flex p-4 gap-x-4 max-w-[70rem] mx-auto">
                <Nav user="guest" setSelectedView={setSelectedView} />

                {views[selectedView]}
            </div>
        </>
    );
};

export default Social;
