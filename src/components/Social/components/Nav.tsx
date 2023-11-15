interface Props {
    user: string;
}

const Nav: React.FC<Props> = ({ user }) => {
    console.log('Nav');

    const buttons = [
        {
            id: 'home',
            name: 'All Posts',
            onClick: () => {},
        },
        {
            id: 'following',
            name: 'Following',
            onClick: () => {},
        },
        {
            id: 'profile',
            name: `Profile: ${user}`,
            onClick: () => {},
        },
        {
            id: 'more',
            name: 'More',
            onClick: () => {},
        },
    ];

    return (
        <nav className="p-6 rounded-xl shadow-lg w-max whitespace-nowrap h-max">
            <ul className="flex flex-col gap-y-4">
                {buttons.map((button) => (
                    <li
                        key={button.id}
                        className="p-2 hover:bg-grey-100 hover:bg-opacity-20 hover:cursor-pointer rounded-lg"
                    >
                        <button onClick={button.onClick}>{button.name}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
