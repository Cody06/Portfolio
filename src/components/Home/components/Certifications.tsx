import Image from 'next/image';
import SectionHeader from './SectionHeader';
import Link from 'next/link';

export default function Certifications() {
    const certifications = [
        {
            id: 3,
            title: 'Meta Front-End Developer Professional Certificate',
            icon: {
                src: '/assets/icons/coursera.svg',
                alt: 'Coursera icon',
            },
            issuer: 'Coursera',
            date: 'Issued Mar 2024',
            skills: ['React.js', 'JavaScript', 'HTML5', 'CSS', 'UX/UI design', 'Version Control'],
            href: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
        },
        {
            id: 2,
            title: 'Computer Science for Web Programming Professional Certificate',
            icon: {
                src: '/assets/icons/HarvardX.jpeg',
                alt: 'HarvardX icon',
            },
            issuer: 'Harvard Online',
            date: 'Issued Nov 2021',
            skills: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Git'],
            href: 'https://www.edx.org/certificates/professional-certificate/harvardx-computer-science-for-web-programming',
        },
        {
            id: 1,
            title: 'CS50’s Web Programming with Python and JavaScript',
            icon: {
                src: '/assets/icons/HarvardX.jpeg',
                alt: 'HarvardX icon',
            },
            issuer: 'Harvard Online',
            date: 'Issued Nov 2021',
            skills: [
                'HTML',
                'CSS',
                'Git',
                'Python',
                'Django',
                'SQL',
                'JavaScript',
                'User Interfaces',
                'Testing',
            ],
            href: 'https://www.edx.org/learn/web-development/harvard-university-cs50-s-web-programming-with-python-and-javascript',
        },
        {
            id: 0,
            title: 'CS50’s Introduction to Computer Science',
            icon: {
                src: '/assets/icons/HarvardX.jpeg',
                alt: 'HarvardX icon',
            },
            issuer: 'Harvard Online',
            date: 'Issued Jun 2021',
            skills: ['C', 'Python', 'SQL', 'JavaScript', 'CSS', 'HTML'],
            href: 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science',
        },
    ];

    return (
        <section id="certifications" className="pt-16">
            <SectionHeader title="Certifications" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 select-text">
                {certifications.map((certificate) => (
                    <Link
                        key={certificate.id}
                        href={certificate.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row gap-x-6 px-5 py-10 bg-white rounded-lg shadow-lg
                            hover:shadow-xl hover:scale-[1.01] ease-in duration-100"
                    >
                        <Image
                            src={certificate.icon.src}
                            className="mt-auto mb-auto"
                            width={100}
                            height={100}
                            alt={certificate.icon.alt}
                        />

                        <div className="flex flex-col">
                            <h3 className="font-bold">{certificate.title}</h3>
                            <span>{certificate.issuer}</span>
                            <span className="text-neutral-500">{certificate.date}</span>
                            <span>
                                <strong>Skills: </strong>
                                {certificate.skills.join(' \u00B7 ')}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
