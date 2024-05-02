import Image from 'next/image';
import MainButton from '../../ui/MainButton';
import SectionHeader from './SectionHeader';
import Carousel from '@/components/ui/Carousel';
import Card from './Card';

type Props = {
    showAnimation: boolean;
};

export default function Projects({ showAnimation }: Props) {
    const projects = [
        {
            id: 1,
            name: 'Workboard',
            tools: ['Next.js', 'TypeScript', 'Tailwind'],
            description: `Workboard is a project management tool. Users can create project boards with different lists
                and move their tasks between them.`,
            href: '/workboard',
            thumbnails: ['workboard.png', 'workboard-mobile.png'],
        },
        {
            id: 2,
            name: 'E-Commerce',
            tools: ['Next.js', 'TypeScript', 'Tailwind', 'SQL'],
            description: `This is an e-commerce website where users can browse, search and filter books. A checkout flow is also implemented.`,
            href: '/ecommerce',
            thumbnails: ['ecommerce.png', 'ecommerce-mobile.png'],
        },
        {
            id: 3,
            name: 'Social Networking',
            tools: ['Next.js', 'TypeScript', 'Tailwind'],
            description: `This platform allows users to create posts and follow other users. An implementation of the "like"
                button is also present.`,
            href: '/social',
            thumbnails: ['social.png', 'social-mobile.png'],
        },
    ];

    return (
        // Use padding-top to see the title when onClick scrollIntoView
        <section id="projects-collection" className={`pt-20 ${showAnimation && 'animate-fade-in'}`}>
            <SectionHeader title="Projects" />

            <div className="flex flex-col gap-y-10">
                {projects.map((project) => (
                    <Card key={project.id}>
                        <div className="flex flex-col md:flex-row md:gap-x-8 lg:gap-x-16">
                            <section className="md:w-1/2">
                                <Carousel>
                                    {[
                                        {
                                            item: (
                                                <div className="relative">
                                                    <Image
                                                        src={'/assets/laptop.png'}
                                                        width={520}
                                                        height={300}
                                                        priority
                                                        alt="Generic laptop"
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                    <div className="absolute top-2 px-[10%] pb-4 h-max">
                                                        <Image
                                                            src={`/assets/thumbnails/${project.thumbnails[0]}`}
                                                            width={520}
                                                            height={300}
                                                            priority
                                                            alt="Desktop thumbnail"
                                                            className="rounded-t-xl"
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ),
                                            title: `${project.name}-desktop`,
                                        },
                                        {
                                            item: (
                                                <div className="relative max-w-max mx-auto">
                                                    <Image
                                                        src={'/assets/phone.png'}
                                                        width={200}
                                                        height={415}
                                                        alt="Generic phone"
                                                        style={{
                                                            width: '70%',
                                                            marginLeft: 'auto',
                                                            marginRight: 'auto',
                                                        }}
                                                    />
                                                    <div className="absolute top-[0.4rem] px-[17.4%]">
                                                        <Image
                                                            src={`/assets/thumbnails/${project.thumbnails[1]}`}
                                                            width={200}
                                                            height={415}
                                                            alt="Mobile thumbnail"
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                            className="rounded-xl"
                                                        />
                                                    </div>
                                                </div>
                                            ),
                                            title: `${project.name}-mobile`,
                                        },
                                    ]}
                                </Carousel>
                            </section>

                            <section className="pt-4 md:pt-0 md:w-1/2">
                                <h3 className="mb-4 text-2xl text-center font-bold">
                                    {project.name}
                                </h3>
                                <div className="flex gap-x-2 justify-center mb-6 md:mb-12">
                                    {project.tools.map((tool) => (
                                        <div
                                            key={tool}
                                            className="p-1 w-max rounded-md text-sm text-neutral-500 font-medium bg-neutral-100"
                                        >
                                            {tool}
                                        </div>
                                    ))}
                                </div>
                                <p className="mb-6 md:mb-12">{project.description}</p>

                                <div className="flex justify-center items-center gap-x-5">
                                    <MainButton
                                        label={`Visit ${project.name.split(' ')[0]}`}
                                        style="text-white border-neutral-800 bg-neutral-800"
                                        hoverStyle="hover:border-amber-500 hover:bg-amber-500"
                                        href={project.href}
                                        rounded
                                        shadow
                                    />
                                </div>
                            </section>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
