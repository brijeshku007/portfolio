/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#0ea5e9',
                dark: '#0f172a',
                darker: '#1e293b',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
