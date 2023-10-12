import SectionHeader from './SectionHeader';

const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            position: 'Full Stack Developer',
            company: 'moozoom',
            companyLogo: null,
            date: 'Jan 2022 - Present',
            description: '',
        },
    ];

    return (
        <section id="work-experience" className="pt-16">
            <SectionHeader title="Experience" />
            {experiences.map((experience) => (
                <div
                    key={experience.id}
                    className="px-5 py-10 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.01] ease-in duration-100"
                >
                    <h3 className="flex justify-between font-bold">
                        {experience.position}
                        <span className="text-grey-110">{experience.date}</span>
                    </h3>
                    <span>{experience.company}</span>
                </div>
            ))}
        </section>
    );
};

export default WorkExperience;
