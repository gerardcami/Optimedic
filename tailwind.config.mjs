/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        "fade-from-top": {
          from: {
            opacity: "0",
            transform: "translateY(-16px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "header-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "sidebar-from-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-from-top": "fade-from-top 0.5s ease-out",
        "header-from-top": "header-from-top 0.5s ease-out",
        "sidebar-from-left": "sidebar-from-left 0.5s ease-out",
      },
    },
  },
  plugins: [],
}
