'use client';
import TopNav from './components/TopNav';
import Header from './components/Header';
import ProjectsCollection from './components/ProjectsCollection';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import Certifications from './components/Certifications';

const LandingPage = () => (
    <>
        <TopNav />
        <div className="content-max-width m-auto px-4 pt-24 select-none">
            <Header />
            <ProjectsCollection />
            <WorkExperience />
            <Certifications />
            <Footer />
        </div>
    </>
);

export default LandingPage;
