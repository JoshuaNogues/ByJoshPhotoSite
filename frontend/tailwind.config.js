export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        linen: '#f9f6f1',
        ivory: '#f4f1eb',
        porcelain: '#f6efe6',
        almond: '#e7d7c7',
        sand: '#d7cfc0',
        blush: '#efe3d7',
        clay: '#b8a898',
        dusk: '#5c5147',
        stone: '#7a7b77',
        charcoal: '#2f3331',
        ink: '#1f1c19',
        moss: '#d9dfd0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 32px 60px -35px rgba(13, 10, 7, 0.35)',
      },
    },
  },
  plugins: [],
};
