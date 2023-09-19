import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: 'Passion One, sans-serif',
      },
      fontSize: {
        title: [
          '28px',
          {
            lineHeight: '36px',
            letterSpacing: '0',
            fontWeight: '700',
          },
        ],
      },
      colors: {
        'accent-main': 'var(--accent-main)',
        'accent-main-15': 'var(--accent-main-15)',
        cart: 'var(--cart)',
      },
    },
  },
  plugins: [],
};

export default config;
