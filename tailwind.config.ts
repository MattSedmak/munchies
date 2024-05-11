import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      body: [
        '0.75rem',
        {
          lineHeight: '0.9375rem',
          letterSpacing: '-0.03125rem',
          fontWeight: '400',
        },
      ],
      title: [
        '0.875rem',
        {
          lineHeight: '0.9375rem',
          letterSpacing: '-0.03125rem',
          fontWeight: '400',
        },
      ],
      heading: [
        '1.5rem',
        {
          lineHeight: '0.9375rem',
          letterSpacing: '-0.03125rem',
          fontWeight: '400',
        },
      ],
      display: [
        '2.5rem',
        {
          lineHeight: '0.9375rem',
          letterSpacing: '-0.03125rem',
          fontWeight: '400',
        },
      ],
    },
    extend: {
      fontFamily: {
        'SF-pro': ['var(--SF-pro)'],
      },
      colors: {
        'off-white': '#FAFAFA',
        'brand-green': '#00703A',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
