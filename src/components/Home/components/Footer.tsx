import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faCircleArrowUp, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { FormEvent, FormEventHandler, useState } from 'react';
import Input from '@/components/ui/Input';
import usePageBottom from '@/hooks/usePageBottom';

export default function Footer() {
    const reachedBottom = usePageBottom();
    const linkButtons = [
        {
            href: 'https://github.com/Cody06',
            title: 'Visit my GitHub!',
            label: <FontAwesomeIcon icon={faSquareGithub} className="fa-2xl" />,
        },
        {
            href: 'https://www.linkedin.com/in/cody-miu/',
            title: 'Visit my Linkedin profile!',
            label: <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />,
        },
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

    // TODO: Create email contact form
    const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <footer
                id="contact"
                className="content-max-width mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-y-14 px-4 py-16 text-white"
            >
                <div
                    className="flex flex-col gap-y-4 items-center justify-between
                        mb-10 md:items-start"
                >
                    <h4 className="text-2xl font-bold">Get in touch</h4>
                    <h5>{`Let's work together!`}</h5>
                    <h6 className="text-xl font-bold">cody.miu@gmail.com</h6>
                    <div className="space-x-8">
                        {linkButtons.map(({ href, title, label }) => (
                            <Link
                                key={href}
                                href={href}
                                title={title}
                                className="hover:text-orange-100"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
                <form onSubmit={submitForm} className="space-y-4">
                    <Input
                        id="name"
                        type="text"
                        label="Name"
                        name="name"
                        maxLength={50}
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <Input
                        id="email"
                        type="email"
                        label="Your email"
                        name="email"
                        maxLength={50}
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        id="message"
                        type="textarea"
                        label="Message"
                        name="message"
                        maxLength={300}
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        value="SUBMIT"
                        className="px-4 py-2 bg-white text-grey-120 font-bold rounded-lg
                                    hover:bg-orange-100 hover:cursor-pointer ease-in duration-200"
                    />
                </form>
                <div className="col-span-1 md:col-span-2 flex flex-col gap-y-4 text-center">
                    <span className="space-x-3">
                        <FontAwesomeIcon icon={faLocationPin} className="fa-xl" />
                        <span>Based in Montreal</span>
                    </span>
                    <span className="space-x-3">
                        <FontAwesomeIcon icon={faCopyright} />
                        <span>2024</span>
                    </span>
                </div>
            </footer>
            {reachedBottom && (
                <button
                    className="fixed text-orange-100 text-[3rem] bottom-20 right-8"
                    onClick={() => document.getElementById('header')?.scrollIntoView()}
                >
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                </button>
            )}
        </>
    );
}
