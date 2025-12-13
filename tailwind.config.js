/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Doto', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['Google Sans Code', 'monospace'],
      },
      colors: {
        'accent': '#048ADE',
        'text-primary': '#111',
        'text-secondary': '#555',
        'text-tertiary': '#666',
        'bg-light': '#fafafa',
        'border-light': '#ddd',
        'border-lighter': '#eee',
      },
      spacing: {
        'nav-gap': '1.4rem',
        'column-gap': '1rem',
        'header-gap': '1.25rem',
        'header-bottom': '1.68rem',
      },
      maxWidth: {
        'content': '1000px',
      },
    },
  },
  plugins: [],
};
