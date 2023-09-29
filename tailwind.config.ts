import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            primary: {
                120: '#2E3338',
                110: '#454D54',
                100: '#5C6670',
                90: '#73808C',
                80: '#E3E6E8',
            },
            secondary: {
                110: '#774709',
                100: '#F1A541',
            },
            grey: {
                110: '#5F666D',
                100: '#778088',
                90: '#F2F2F2',
            },
            black: '#000000',
            white: '#FFFFFF',
        },
        extend: {},
    },
    plugins: [],
};
export default config;
