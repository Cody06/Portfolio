'use client';
import { useEffect } from 'react';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import TopNav from './components/TopNav';
import WorkExperience from './components/WorkExperience';

const Home = () => {
    // TODO: Enable through session storage
    const viewedAnimations = false;
    useEffect(() => {
        document.body.className = '';
        // sessionStorage.setItem('viewed_animations', '1');
    }, []);

    // const viewedAnimations = sessionStorage.getItem('viewed_animations');
    return (
        <>
            <TopNav />
            <div className="content-max-width m-auto px-4 pt-24 select-none">
                <Header showAnimation={!viewedAnimations} />
                <Projects showAnimation={!viewedAnimations} />
                <WorkExperience />
                <Certifications />
                <Footer />
            </div>
        </>
    );
};

export default Home;
