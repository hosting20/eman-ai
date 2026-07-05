/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fdf9f5',
        surface: '#fffdfb',
        ink: '#221e1a',
        'ink-soft': '#6f675e',
        muted: '#b3a99c',
        label: '#8a8072',
        accent: {
          DEFAULT: '#5a3fae',
          hover: '#48328c',
          deep: '#4e3699',
        },
        tint: {
          DEFAULT: '#f1edfa',
          border: '#ddd4f0',
        },
        line: '#f0e5d8',
        'input-line': '#eadfd2',
        success: {
          DEFAULT: '#3d9a4e',
          bg: '#f4faf3',
          border: '#d9eed6',
          text: '#3d7a48',
        },
      },
      fontFamily: {
        heading: ['Alexandria', 'sans-serif'],
        body: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        cta: '0 8px 24px rgba(90,63,174,.28)',
        window: '0 24px 60px rgba(120,80,40,.12)',
        card: '0 10px 30px rgba(120,80,40,.08)',
        featured: '0 14px 40px rgba(90,63,174,.16)',
        form: '0 20px 50px rgba(120,80,40,.10)',
        node: '0 2px 6px rgba(120,80,40,.07)',
        bubble: '0 1px 3px rgba(120,80,40,.08)',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};
