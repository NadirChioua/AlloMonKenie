/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#005691',
        'soft-green': '#A8D5BA',
        'whatsapp-green': '#25D366',
        'emergency-red': '#EF4444',
      },
    },
  },
  plugins: [],
}
