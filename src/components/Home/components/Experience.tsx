import SectionHeader from './SectionHeader';

export default function Experience() {
    const experiences = [
        {
            id: 0,
            position: 'Software Developer',
            company: 'Freelance',
            companyLogo: null,
            date: 'Aug 2023 - Present',
            description:
                'Design and build web applications using JavaScript, TypeScript, React, HTML, CSS and Tailwind.',
        },
        {
            id: 1,
            position: 'Full-Stack Developer',
            company: 'Moozoom',
            companyLogo: null,
            date: 'Jan 2022 - Sep 2023',
            description:
                'Moozoom is a social emotional learning (SEL) platform that provides interactive videos and activities that allow children to improve their mental and emotional well-being.',
        },
    ];

    return (
        <section id="work-experience" className="pt-16">
            <SectionHeader title="Experience" />

            <div className="flex flex-col gap-y-10">
                {experiences.map((experience) => (
                    <div
                        key={experience.id}
                        className="px-5 py-10 bg-white rounded-lg shadow-lg
                            hover:shadow-xl hover:scale-[1.01] ease-in duration-100"
                    >
                        <h3 className="flex justify-between font-bold">
                            {experience.position}
                            <span className="text-grey-110">{experience.date}</span>
                        </h3>
                        <span>{experience.company}</span>
                        <p className="mt-4">{experience.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
