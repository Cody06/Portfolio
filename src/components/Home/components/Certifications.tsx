import Image from 'next/image';
import SectionHeader from './SectionHeader';
import Link from 'next/link';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { transitionTiming } from '@/components/ui/tailwindStyles';

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
            date: 'Mar 2024',
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
            date: 'Nov 2021',
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
            date: 'Nov 2021',
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
            date: 'Jun 2021',
            skills: ['C', 'Python', 'SQL', 'JavaScript', 'CSS', 'HTML'],
            href: 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science',
        },
    ];

    return (
        <section id="certifications" className="pt-16">
            <SectionHeader title="Certifications" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-text">
                {certifications.map((certificate) => (
                    <Card key={certificate.id}>
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex flex-row gap-x-6">
                                <Image
                                    src={certificate.icon.src}
                                    className="mt-auto mb-auto"
                                    width={100}
                                    height={100}
                                    alt={certificate.icon.alt}
                                    style={{
                                        width: 100,
                                        height: 100,
                                    }}
                                />

                                <section className="flex flex-col gap-y-2">
                                    <h3 className="text-lg font-bold">{certificate.title}</h3>
                                    <div className="font-medium">
                                        {certificate.issuer}
                                        <span className="text-neutral-500">
                                            {' - '}
                                            {certificate.date}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Skills: </span>
                                        {certificate.skills.join(' \u00B7 ')}
                                    </div>
                                </section>
                            </div>
                            <Link
                                href={certificate.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group ml-auto"
                                title="View certificate page"
                            >
                                <FontAwesomeIcon
                                    icon={faLink}
                                    size="xl"
                                    className={`mt-auto group-hover:text-amber-500 ${transitionTiming}`}
                                />
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
