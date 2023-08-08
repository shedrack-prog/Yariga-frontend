module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '500px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '740px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      lgs: '1100px',
      xl: '1187px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1300px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      // display: ['Open Sans', 'sans-serif'],
      // body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'white-bg': '#FCFCFC',
        'primary-color': '#475BE8',
        'light-gray': '#F4F4F4',
        'dark-gray': '#F7F7F7',
        'secondary-color': '#CFC8FF',
        'text-primary-color': '#11142D',
        'dark-bg': '#111315',
        'light-dark-bg': '#1A1D1F',
        'dark-gray': '#6F767E',
        'dark-half-transparent': 'rgba(0, 0, 0, 0.5)',
        // 'light-half-transparent': 'rgba(0, 0, 0, 00)',
      },
      colors: {
        'primary-text': '#FCFCFC',
        'dark-light-text': '#6F767E',
        'dark-white-text': '#EFEFEF',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern': "url('./data/welcome-bg.svg')",
      },

      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],

  // purge: {
  //   options: {
  //     whitelistPatterns: [/^bg-/],
  //   },
  // },
};
