/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "off-white":"#A5A5A5",
        "black": "#000000",
        "white": "#FFFFFF",
        "grey-1": "#7B7373",
        "grey-2": "#5A5A5A",
        "grey-3": "#776C6C",
        "grey-4":"#7E7676",
      "light-grey":"#0505050D",
        "red": "#C91C1C",
        },
      fontFamily: {
        'inter-regular': 'inter-400',
        'inter-medium': 'inter-500',
        'inter-semibold': 'inter-600',
        'inter-bold': 'inter-700',
        'urbanist-regular': 'urbanist-400',
        'urbanist-medium': 'urbanist-500',
        'urbanist-bold': 'urbanist-700',
        'geurbanistist-semibold': 'urbanist-600',
      },
      backdropBlur: {
        'custom': '55.2px',
      },
    },
  },
  plugins: [],
    safelist: [
    '[dir=rtl]:text-right',
  ],
}

