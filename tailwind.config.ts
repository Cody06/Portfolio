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
            grey: {
                120: '#2F3337',
                110: '#5F666D',
                100: '#778088',
                90: '#F2F2F2',
            },
            orange: {
                110: '#774709',
                100: '#F1A541',
            },
            red: '#990000',
            black: '#000000',
            white: '#FFFFFF',
        },
        extend: {},
    },
    plugins: [],
};
export default config;
