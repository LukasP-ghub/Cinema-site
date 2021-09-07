module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'cyan': 'rgb(53, 180, 195)',
        'dark': '#404855',
        'graycustom': '#898e98',
      })
    },
    minHeight: {
      '10': '10vh',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '100px': '100px'
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'cyan': 'rgb(53, 180, 195)',
      'dark': '#404855',
      'graycustom': '#898e98',
    })
  },
  variants: {
    extend: {
      display: ['hover', 'group-hover'],
      visibility: ['hover', 'group-hover']
    },
  },
  plugins: [
  ],
}
