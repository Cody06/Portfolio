import Image from 'next/image';
import Logo from '../../ui/Logo';

interface Props {
    showAnimation: boolean;
}

const Header: React.FC<Props> = ({ showAnimation }) => {
    const technologies = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'Django'].join(
        ' | ',
    );
    const secondaryTechnologies = ['HTML', 'CSS', 'Tailwind', 'SQL'].join(' | ');

    const headlineParagraph = `Hello! 😃 I'm a software developer who enjoys creating fullstack web applications in Python and JavaScript.
        \n I have started with Java and C during my bachelor in Information Systems at McGill University and switched to TypeScript in a professional environment.
        \n With a diverse background, I am eager to tackle any technical project!`;

    const linkButtons = [
        {
            href: 'https://github.com/Cody06',
            title: 'Go to github page',
            img: (
                <Image
                    className="animate-logo"
                    src={'/assets/icons/github_square_50.png'}
                    width={50}
                    height={50}
                    alt="GitHub icon"
                />
            ),
        },
        {
            href: 'http://www.linkedin.com/in/cody-miu',
            title: 'Go to linkedin page',
            img: (
                <Image
                    className="animate-logo"
                    src={'/assets/icons/linkedin_square_50.png'}
                    width={50}
                    height={50}
                    alt="LinkedIn icon"
                />
            ),
        },
    ];

    return (
        <header>
            <div className="flex flex-col items-center gap-y-5 pb-14">
                <h1 className="text-3xl md:text-5xl text-center">
                    <span className={`font-bold font-mono ${showAnimation && 'multi-line-type'}`}>
                        Software Developer
                    </span>
                    <span className={`text-orange-100 ${showAnimation && 'animate-drop'}`}>.</span>
                </h1>
                <div
                    className={`text-center max-w-[20rem] md:max-w-[32rem] ${
                        showAnimation && 'animate-fade-in-up'
                    }`}
                >
                    <h2>{technologies}</h2>
                    <h2>{secondaryTechnologies}</h2>
                </div>
            </div>

            <div className="flex justify-evenly">
                <div className="md:basis-2/3">
                    <p
                        className={`mb-4 ${showAnimation && 'animate-fade-in'}`}
                        style={{ whiteSpace: 'pre-line' }}
                    >
                        {headlineParagraph}
                    </p>
                    <div className="flex gap-x-5 animate-slide-left-to-right">
                        {linkButtons.map((button) => (
                            <a
                                key={button.href}
                                href={button.href}
                                target="_blank"
                                rel="noreferrer"
                                title={button.title}
                            >
                                {button.img}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                    <Logo showAnimation={showAnimation} />
                </div>
            </div>
        </header>
    );
};

export default Header;
