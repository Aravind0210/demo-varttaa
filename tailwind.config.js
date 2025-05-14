/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fadeInDown 0.3s ease-out',
      },
      backdropBlur: {
        sm: '4px',
      },
      colors: {
        brand: '#e8663b',
        primary: 'rgb(254,66,0)',       // Vibrant Orange-Red
        secondary: '#ffe5d9',           // Soft Peach (background tone)
        accent: '#ff9472',              // Warm Coral (buttons, hover)
        neutral: '#2c2c2c',             // Deep Gray for text
        'base-100': '#ffffff',          // White base
        info: '#38bdf8',                // Light Blue (optional info UI)
        success: '#34d399',             // Emerald (green confirmation)
        warning: '#facc15',             // Warm Yellow
        error: '#ef4444',               // Red (alerts, errors)
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        'full': '9999px',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
