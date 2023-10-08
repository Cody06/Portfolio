'use client';
import { useEffect, useState } from 'react';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import TopNav from './components/TopNav';
import WorkExperience from './components/WorkExperience';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [viewedAnimations, setViewedAnimations] = useState(false);

    useEffect(() => {
        document.body.className = '';
        setViewedAnimations(!!sessionStorage.getItem('viewed_animations'));

        if (!viewedAnimations) {
            sessionStorage.setItem('viewed_animations', '1');
        }
        setLoading(false);
    }, [viewedAnimations]);

    if (loading) return null;

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
