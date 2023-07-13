const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        'accent-1': 'hsl(var(--accent-1) / <alpha-value>)',
        'accent-2': 'hsl(var(--accent-2) / <alpha-value>)',
        'accent-3': 'hsl(var(--accent-3) / <alpha-value>)',
        'accent-4': 'hsl(var(--accent-4) / <alpha-value>)',
        'accent-5': 'hsl(var(--accent-5) / <alpha-value>)',
        'accent-6': 'hsl(var(--accent-6) / <alpha-value>)',
        'accent-7': 'hsl(var(--accent-7) / <alpha-value>)',
        'accent-8': 'hsl(var(--accent-8) / <alpha-value>)',
        error: 'hsl(var(--error) / <alpha-value>)',
        'error-light': 'hsl(var(--error-light) / <alpha-value>)',
        'error-dark': 'hsl(var(--error-dark) / <alpha-value>)',
        'error-lighter': 'hsl(var(--error-lighter) / <alpha-value>)',
        success: 'hsl(var(--success) / <alpha-value>)',
        'success-light': 'hsl(var(--success-light) / <alpha-value>)',
        'success-dark': 'hsl(var(--success-dark) / <alpha-value>)',
        'success-lighter': 'hsl(var(--success-lighter) / <alpha-value>)',
        violet: 'hsl(var(--violet) / <alpha-value>)',
        'violet-light': 'hsl(var(--violet-light) / <alpha-value>)',
        'violet-dark': 'hsl(var(--violet-dark) / <alpha-value>)',
        'violet-lighter': 'hsl(var(--violet-lighter) / <alpha-value>)',
        cyan: 'hsl(var(--cyan) / <alpha-value>)',
        'cyan-light': 'hsl(var(--cyan-light) / <alpha-value>)',
        'cyan-dark': 'hsl(var(--cyan-dark) / <alpha-value>)',
        'cyan-lighter': 'hsl(var(--cyan-lighter) / <alpha-value>)',
        'highlight-purple': 'hsl(var(--highlight-purple) / <alpha-value>)',
        'highlight-pink': 'hsl(var(--highlight-pink) / <alpha-value>)',
        'highlight-magenta': 'hsl(var(--highlight-magenta) / <alpha-value>)',
        'highlight-yellow': 'hsl(var(--highlight-yellow) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
