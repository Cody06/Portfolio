import Image from 'next/image';
import Button from '../../ui/Button';
import SectionHeader from './SectionHeader';
import Carousel from '@/components/ui/Carousel';

type Props = {
    showAnimation: boolean;
};

export default function Projects({ showAnimation }: Props) {
    const projects = [
        {
            id: 1,
            name: 'Workboard',
            year: 2023,
            tools: ['React', 'TypeScript'],
            description: `Workboard is a project managing application. Users can create project boards with different columns
                and move their tasks between them.`,
            href: '/workboard',
            thumbnail: ['workboard.png', 'workboard-mobile.png'],
        },
        {
            id: 2,
            name: 'Social Networking Platform',
            year: 2023,
            tools: ['React', 'TypeScript'],
            description: `This platform allows users to create posts and follow other users. An implementation of the "like"
                button is also present.`,
            href: '/social',
            thumbnail: ['social.png', 'social-mobile.png'],
        },
        {
            id: 3,
            name: 'E-Commerce Platform',
            year: 2023,
            tools: ['React', 'TypeScript'],
            description: `This is an e-commerce platform where users can post items for auction and bid on posted ones. A comment
                section is also implemented.`,
            href: '',
            thumbnail: ['commerce.png', 'commerce-mobile.png'],
        },
    ];

    return (
        // Use padding-top to see the title when onClick scrollIntoView
        <section id="projects-collection" className={`pt-20 ${showAnimation && 'animate-fade-in'}`}>
            <SectionHeader title="Projects" />

            <div className="flex flex-col gap-y-10">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col md:flex-row md:gap-x-8 lg:gap-x-16 px-5 py-10
                            bg-white rounded-lg shadow-lg
                            hover:shadow-xl hover:scale-[1.01] ease-in duration-100"
                    >
                        <Carousel>
                            {[
                                {
                                    item: (
                                        <div className="relative max-w-max m-auto">
                                            <Image
                                                src={'/assets/laptop.png'}
                                                width={520}
                                                height={300}
                                                priority
                                                alt="Laptop image"
                                            />
                                            <div className="absolute top-2 w-full h-full px-[10.19%]">
                                                {/* TODO: Remove when this project gets a thumbnail */}
                                                {project.id === 3 ? (
                                                    <div className="text-center pt-[30%] bg-white h-[87%] rounded-t-lg">
                                                        Coming soon
                                                    </div>
                                                ) : (
                                                    <Image
                                                        src={`/assets/thumbnails/${project.thumbnail[0]}`}
                                                        width={520}
                                                        height={300}
                                                        alt="Desktop thumbnail"
                                                        className="rounded-t-lg"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ),
                                    title: `${project.name}-desktop`,
                                },
                                {
                                    item: (
                                        <div className="relative max-w-max max-h-[300px] m-auto">
                                            <Image
                                                src={'/assets/phone.png'}
                                                width={150}
                                                height={300}
                                                alt="Phone image"
                                            />
                                            {project.id === 3 ? (
                                                <div
                                                    className="absolute top-[0.4rem] w-[140px] h-[280px] pt-[50%]
                                                        left-[50%] -translate-x-[50%]
                                                        text-center bg-white rounded-lg"
                                                >
                                                    Coming soon
                                                </div>
                                            ) : (
                                                <Image
                                                    src={`/assets/thumbnails/${project.thumbnail[1]}`}
                                                    width={140}
                                                    height={290}
                                                    alt="Mobile thumbnail"
                                                    className="absolute top-[0.4rem]
                                                        left-[50%] -translate-x-[50%]
                                                        border-y-4 border-black rounded-lg"
                                                />
                                            )}
                                        </div>
                                    ),
                                    title: `${project.name}-mobile`,
                                },
                            ]}
                        </Carousel>

                        <div className="pt-4 md:pt-0 md:w-2/3">
                            <h3 className="mb-4 text-2xl text-center font-medium">
                                {project.name}
                            </h3>
                            <div className="flex gap-x-2 justify-center mb-6 md:mb-8">
                                {project.tools.map((tool) => (
                                    <div
                                        key={tool}
                                        className="p-1 w-max rounded-md text-sm text-grey-110 bg-neutral-100"
                                    >
                                        {tool}
                                    </div>
                                ))}
                            </div>
                            <p className="mb-6 md:mb-8">{project.description}</p>

                            <div className="flex justify-center items-center gap-x-5">
                                <Button
                                    label={`Visit ${project.name.split(' ')[0]}`}
                                    type="link"
                                    kind="primary"
                                    disabled={project.id !== 1}
                                    href={project.href}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
