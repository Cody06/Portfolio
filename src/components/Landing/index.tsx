'use client';
import TopNav from './components/TopNav';
import Header from './components/Header';
import ProjectsCollection from './components/ProjectsCollection';
import Footer from './components/Footer';

const LandingPage = () => (
    <>
        <TopNav />
        <div className="content-max-width m-auto px-4 pt-24">
            <Header />
            <ProjectsCollection />
            <Footer />
        </div>
    </>
);

export default LandingPage;
