import Logo from '@/components/ui/Logo';
import TopNav from './TopNav';

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

    return (
        <header id="header">
            <TopNav showAnimation={showAnimation} />
            <div className="content-max-width mx-auto px-4 border">
                <div className="flex flex-col items-center gap-y-5 pt-24 pb-14">
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

                <div className="flex justify-around">
                    <p
                        className={`md:basis-2/3 mb-4 ${showAnimation && 'animate-fade-in'}`}
                        style={{ whiteSpace: 'pre-line' }}
                    >
                        {headlineParagraph}
                    </p>

                    <div className="hidden md:block">
                        <Logo showAnimation={showAnimation} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
