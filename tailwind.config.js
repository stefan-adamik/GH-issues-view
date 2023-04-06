const colors = require('tailwindcss/colors');
const withMT = require('@material-tailwind/react/utils/withMT');
const sizes = {};

for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['11px', '12px'],
        ss: ['12px', '14px'],
        sm: ['14px', '16px'],
        md: ['16px', '18px'],
        lg: ['18px', '20px'],
        xl: ['20px', '24px'],
        '2xl': ['24px', '32px'],
        '3xl': ['36px', '40px'],
        '4xl': '40px',
        '5xl': `48px`
      },
      spacing: sizes,
      minHeight: sizes,
      minWidth: {
        ...sizes,
        initial: 'initial'
      },
      maxWidth: {
        ...sizes,
        screen: '100vw'
      },
      maxHeight: {
        ...sizes,
        screen: '100vh'
      },
      borderRadius: sizes,
      colors: {
        ...colors,
        open: '#1a7f37',
        closed: '#d1242f'
      }
    }
  },
  plugins: []
});
