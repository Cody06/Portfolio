import Logo from '@/components/ui/Logo';
import TopNav from './TopNav';

type Props = {
    showAnimation: boolean;
};

export default function Header({ showAnimation }: Props) {
    const technologies = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'Django'].join(
        ' | ',
    );
    const secondaryTechnologies = ['HTML', 'CSS', 'Tailwind', 'SQL'].join(' | ');

    const headlineParagraph = `This is where code meets creativity and innovation comes to life.
        \n My name is Cody and I am a passionate software developer with expertise in creating digital solutions that leave a lasting impact.
        \n Welcome to my Digital Playground!`;

    return (
        <header id="header">
            <TopNav showAnimation={showAnimation} />
            <div className="content-max-width mx-auto px-4">
                <div className="flex flex-col items-center gap-y-5 pt-32 md:pt-52">
                    <h1 className="text-3xl md:text-5xl text-center">
                        <span
                            className={`font-bold font-mono ${showAnimation && 'multi-line-type'}`}
                        >
                            Software Developer
                        </span>
                        <span className={`text-amber-500 ${showAnimation && 'animate-drop'}`}>
                            .
                        </span>
                    </h1>
                    <div
                        className={`text-center max-w-[20rem] md:max-w-[32rem] ${
                            showAnimation && 'animate-fade-in-up'
                        }`}
                    >
                        <h2 className="text-grey-100">{technologies}</h2>
                        <h2 className="text-grey-100">{secondaryTechnologies}</h2>
                    </div>
                </div>

                <div className="flex justify-around">
                    <p
                        className={`md:basis-2/3 mt-14 md:mt-32 mb-4 ${
                            showAnimation && 'animate-fade-in'
                        }`}
                        style={{ whiteSpace: 'pre-line' }}
                    >
                        {headlineParagraph}
                    </p>

                    <div className="hidden md:block pt-4">
                        <Logo showAnimation={showAnimation} />
                    </div>
                </div>
            </div>
        </header>
    );
}
