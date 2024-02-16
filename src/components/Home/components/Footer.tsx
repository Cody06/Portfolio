import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faCircleArrowUp, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import usePageBottom from '@/hooks/usePageBottom';

const Footer = () => {
    const reachedBottom = usePageBottom();
    const linkButtons = [
        {
            href: 'mailto:cody.miu@gmail.com',
            title: 'Send me an email!',
            label: (
                <>
                    <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
                    <span>cody.miu@gmail.com</span>
                </>
            ),
        },
        {
            href: 'https://github.com/Cody06',
            title: 'Visit my GitHub!',
            label: (
                <>
                    <FontAwesomeIcon icon={faSquareGithub} className="fa-lg" />
                    <span>GitHub</span>
                </>
            ),
        },
        {
            href: 'https://www.linkedin.com/in/cody-miu/',
            title: 'Visit my Linkedin profile!',
            label: (
                <>
                    <FontAwesomeIcon icon={faLinkedin} className="fa-lg" />
                    <span>LinkedIn</span>
                </>
            ),
        },
    ];

    return (
        <footer id="contact">
            <div className="flex flex-col gap-y-4 items-center py-10 text-white bg-grey-120">
                <h4 className="text-xl font-bold">Get in touch</h4>
                <div className="flex flex-col gap-y-4">
                    {linkButtons.map((button) => (
                        <Link
                            key={button.href}
                            href={button.href}
                            target="_blank"
                            rel="noreferrer"
                            title={button.title}
                            className="w-max space-x-3 hover:text-orange-100"
                        >
                            {button.label}
                        </Link>
                    ))}
                    <span className="space-x-3">
                        <FontAwesomeIcon icon={faLocationPin} className="fa-lg" />
                        <span>Based in Montreal</span>
                    </span>
                </div>
                <span className="space-x-3">
                    <FontAwesomeIcon icon={faCopyright} />
                    <span>2024</span>
                </span>
            </div>
            {reachedBottom && (
                <button
                    className="fixed text-orange-100 text-[3rem] bottom-5 right-8"
                    onClick={() => document.getElementById('header')?.scrollIntoView()}
                >
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                </button>
            )}
        </footer>
    );
};

export default Footer;
