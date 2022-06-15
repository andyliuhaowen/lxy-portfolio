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
        172: '43rem',
        192: '48rem'
      },
      inset: {
        18: '4.5rem'
      }
    }
  },
  plugins: []
};
