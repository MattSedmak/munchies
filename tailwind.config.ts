import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'SF-pro': ['var(--SF-pro)'],
      },
      fontSize: {
        body: [
          '0.75rem',
          {
            lineHeight: '125%',
            letterSpacing: '-0.03125rem',
            fontWeight: '400',
          },
        ],
        title: [
          '0.875rem',
          {
            lineHeight: '125%',
            letterSpacing: '-0.03125rem',
            fontWeight: '400',
          },
        ],
        heading: [
          '1.5rem',
          {
            lineHeight: '125%',
            letterSpacing: '-0.03125rem',
            fontWeight: '400',
          },
        ],
        'heading-sm': [
          '1.25rem',
          {
            lineHeight: '100%',
            letterSpacing: '-0.03125rem',
            fontWeight: '400',
          },
        ],
        display: [
          '2.5rem',
          {
            lineHeight: '125%',
            letterSpacing: '-0.03125rem',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        'off-white': '#FAFAFA',
        'brand-green': '#00703A',
        stroke: '#000000/10',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
      },
      boxShadow: {
        card: '-4px 2px 10px 0px rgba(0, 0, 0, 0.01), -16px 9px 18px 0px rgba(0, 0, 0, 0.01), -35px 20px 24px 0px rgba(0, 0, 0, 0), -63px 36px 29px 0px rgba(0, 0, 0, 0), -98px 56px 32px 0px rgba(0, 0, 0, 0)',
      },
    },
  },
  plugins: [],
};
export default config;
