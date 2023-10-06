import Link from 'next/link';

const Footer = () => {
    const linkButtons = [
        {
            href: 'mailto:cody.miu@gmail.com',
            title: 'Send me an email!',
            label: 'cody.miu@gmail.com',
        },
        {
            href: 'http://www.linkedin.com/in/cody-miu',
            title: 'Visit my linkedin page!',
            label: 'LinkedIn',
        },
    ];

    return (
        <footer
            id="contact"
            className="flex flex-col gap-y-4 items-center pt-16 pb-10 text-grey-100"
        >
            <h4 className="text-xl font-bold">Get in touch</h4>
            <p>Montreal, QC, Canada</p>
            {linkButtons.map((button) => (
                <Link
                    key={button.href}
                    href={button.href}
                    target="_blank"
                    rel="noreferrer"
                    title={button.title}
                    className="border-b border-transparent hover:border-secondary-100"
                >
                    {button.label}
                </Link>
            ))}
        </footer>
    );
};

export default Footer;
