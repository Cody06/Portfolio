'use client';
import { useEffect, useState } from 'react';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import TopNav from './components/TopNav';
import WorkExperience from './components/WorkExperience';

const Home = () => {
    const [state, setState] = useState({
        loading: true,
        viewedAnimations: false,
    });

    useEffect(() => {
        document.body.className = '';
        const sessionItem = !!sessionStorage.getItem('viewed_animations');
        if (!sessionItem) {
            sessionStorage.setItem('viewed_animations', '1');
        }

        setState({ loading: false, viewedAnimations: sessionItem });

        // Run effect only once (on componentDidMount) - only first render matters
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (state.loading) return;

    return (
        <>
            <TopNav showAnimation={!state.viewedAnimations} />
            <div className="content-max-width m-auto px-4 pt-24 select-none">
                <Header showAnimation={!state.viewedAnimations} />
                <Projects showAnimation={!state.viewedAnimations} />
                <WorkExperience />
                <Certifications />
                <Footer />
            </div>
        </>
    );
};

export default Home;
