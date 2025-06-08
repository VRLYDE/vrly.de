// tailwind.config.mjs
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      colors: {
        vrly: {
          // Add your custom color palette here for better maintainability
          green: { 500: "var(--color-vrly-green-500)" },
          blue: { 500: "var(--color-vrly-blue-500)" },
          teal: { 700: "var(--color-vrly-teal-700)" },
        },
      },
      keyframes: {
        gradient: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        gradient: "gradient 6s ease-in-out infinite",
      },
    },
  },
  safelist: [
    "animate-gradient", // Ensure gradient animation isn't purged
  ],
  plugins: [],
};
