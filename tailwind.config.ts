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
            // TODO: higher number should be a darker color
            grey: {
                100: '#353A40',
                80: '#6C757D',
                20: '#F0F0F0',
            },
            orange: {
                100: '#F2AA4C',
                80: '#774709',
            },
            black: '#000000',
            white: '#FFFFFF',
        },
        extend: {},
    },
    plugins: [],
};
export default config;
