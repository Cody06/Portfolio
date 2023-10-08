import Image from 'next/image';
import SectionHeader from './SectionHeader';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: 'Computer Science for Web Programming',
            icon: (
                <Image
                    src={'/assets/icons/HarvardX.jpeg'}
                    width={100}
                    height={100}
                    alt="HardvardX icon"
                />
            ),
            issuer: 'HarvardX',
            date: 'Issued Nov 2021',
            skills: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Git'],
        },
        {
            id: 2,
            title: 'Web Programming with Python and JavaScript',
            icon: (
                <Image
                    src={'/assets/icons/HarvardX.jpeg'}
                    width={100}
                    height={100}
                    alt="HardvardX icon"
                />
            ),
            issuer: 'HarvardX',
            date: 'Issued Nov 2021',
            skills: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Git'],
        },
    ];

    return (
        <section id="certifications" className="pt-16">
            <SectionHeader title="Certifications" />
            <div className="md:grid grid-cols-2 gap-4 select-text">
                {certifications.map((certificate) => (
                    <div
                        key={certificate.id}
                        className="flex flex-row justify-between gap-x-2 px-5 py-10 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.01] ease-in duration-100"
                    >
                        <div className="flex flex-col">
                            <h4 className="font-bold">{certificate.title}</h4>
                            <span>{certificate.issuer}</span>
                            <span className="text-grey-100">{certificate.date}</span>
                            <span>
                                <strong>Skills: </strong>
                                {certificate.skills.join(' \u00B7 ')}
                            </span>
                        </div>
                        <div>{certificate.icon}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
