import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark theme base
        'dark-bg': '#020b0c',
        'dark-border': '#0a6167',
        'dark-text': '#e5e6ed',
        'dark-text-secondary': '#d7dcf0',
        'dark-text-muted': '#64748b',
        // Chart colors
        'chart-bottom': '#ff00b7',
        'chart-top10': '#00ff9c',
        'chart-top1': '#bdea00',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'chart-sm': '300px',
        'chart-md': '400px',
        'chart-lg': '500px',
      },
      maxWidth: {
        'container': '1600px',
      },
    },
  },
  plugins: [],
};

export default config;
