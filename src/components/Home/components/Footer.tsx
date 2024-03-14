import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faCircleArrowUp, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import usePageBottom from '@/hooks/usePageBottom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

    const { errors, getFieldProps, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            message: Yup.string()
                .min(5, 'Must be at least 5 characters')
                .required('Message is required'),
        }),
    });

    const isDisabled = !(
        getFieldProps('name').value &&
        getFieldProps('email').value &&
        getFieldProps('message').value
    );

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
                    <input
                        type="submit"
                        value="SUBMIT"
                        className={`mt-3 px-8 py-2 w-max font-bold rounded-lg ease-in duration-200 ${
                            isDisabled
                                ? 'bg-grey-100 text-grey-110'
                                : 'bg-white text-grey-120 hover:bg-orange-100 hover:cursor-pointer'
                        }
                                     `}
                        disabled={isDisabled}
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
