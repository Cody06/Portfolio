import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#000000',
            white: '#FFFFFF',
            // Tailwind default colors:
            amber: colors.amber,
            blue: colors.blue,
            green: colors.green,
            neutral: colors.neutral,
            red: colors.red,
            sky: colors.sky,
            yellow: colors.yellow,
        },
        extend: {},
    },
    plugins: [],
};
export default config;
