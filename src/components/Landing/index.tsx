'use client';
import TopNav from './components/TopNav';
import Header from './components/Header';
import ProjectsCollection from './components/ProjectsCollection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { useEffect, useState } from 'react';

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <TopNav openResumeModal={() => setIsOpen(true)} />
            <div className="max-w-[1400px] m-auto px-4 pt-24 overscroll-y-containt">
                <Header />
                <ProjectsCollection />
                <Footer />
            </div>

            <ResumeModal isOpen={isOpen} requestClose={() => setIsOpen(false)} />
        </>
    );
};

export default LandingPage;
