/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        spacing: 'var(--spacing)',
        'spacing-lg': 'var(--spacing-lg)'
      },
      space: {
        spacing: 'var(--spacing)',
        'spacing-lg': 'var(--spacing-lg)'
      },
      minHeight: {
        132: '33rem',
        152: '38rem'
      },
      inset: {
        18: '4.5rem'
      }
    }
  },
  plugins: []
};
