import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faArrowUp, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import usePageBottom from '@/hooks/usePageBottom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAlertContext } from '@/components/context/alertContext';
import MainButton from '@/components/ui/MainButton';
import { hoverTextStyle, transitionTiming } from '@/components/ui/tailwindStyles';

export default function Footer() {
    const { onOpen } = useAlertContext();
    const reachedBottom = usePageBottom(650);
    const linkButtons = [
        {
            href: 'https://github.com/Cody06',
            title: 'Visit my GitHub!',
            label: <FontAwesomeIcon icon={faGithub} size="3x" />,
        },
        {
            href: 'https://www.linkedin.com/in/cody-miu/',
            title: 'Visit my Linkedin profile!',
            label: <FontAwesomeIcon icon={faLinkedin} size="3x" />,
        },
    ];

    const { errors, getFieldProps, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: (values) => {
            // TODO add proper route
            onOpen('success', 'Message sent!');
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            message: Yup.string()
                .min(5, 'Must be at least 5 characters')
                .required('Message is required'),
        }),
    });

    const isError = !!(errors.name || errors.email || errors.message);
    const isEmpty = !(
        getFieldProps('name').value &&
        getFieldProps('email').value &&
        getFieldProps('message').value
    );
    const isDisabled = isError || isEmpty;

    return (
        <>
            <footer
                id="contact"
                className="content-max-width mx-auto grid grid-cols-1 px-4 py-16 text-white
                    md:grid-cols-2 md:gap-y-14"
            >
                <div className="flex flex-col gap-y-4 items-center mb-10">
                    <h4 className="text-2xl font-bold">Get in touch!</h4>
                    <Image
                        src="/assets/profile-photo.jpeg"
                        alt="My face"
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                    <p className="text-xl font-bold">cody.miu@gmail.com</p>
                    <div className="space-x-8">
                        {linkButtons.map(({ href, title, label }) => (
                            <Link key={href} href={href} title={title} className={hoverTextStyle}>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
                    <Input
                        id="name"
                        type="text"
                        label="Name"
                        maxLength={50}
                        error={errors.name}
                        {...getFieldProps('name')}
                    />
                    <Input
                        id="email"
                        type="email"
                        label="Your email"
                        maxLength={50}
                        error={errors.email}
                        {...getFieldProps('email')}
                    />
                    <Input
                        id="message"
                        type="textarea"
                        label="Message"
                        maxLength={300}
                        error={errors.message}
                        {...getFieldProps('message')}
                    />
                    <MainButton
                        label="Submit"
                        style="text-neutral-600 border-neutral-600 bg-white"
                        hoverStyle="hover:border-amber-500 hover:bg-amber-500"
                        disabled={isDisabled}
                        rounded
                        type="submit"
                    />
                </form>
                <div className="col-span-1 md:col-span-2 flex flex-col gap-y-4 pt-8 md:pt-0 text-center">
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
                    className={`fixed right-8 bottom-20 text-neutral-800 
                        bg-white rounded-full w-11 h-11 shadow-lg
                        animate-grow hover:bg-amber-500 ${transitionTiming}`}
                    onClick={() => document.getElementById('header')?.scrollIntoView()}
                >
                    <FontAwesomeIcon icon={faArrowUp} size="2x" />
                </button>
            )}
        </>
    );
}
