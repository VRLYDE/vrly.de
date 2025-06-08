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
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 4s ease-in-out infinite",
      },
    },
  },
  safelist: [
    "animate-gradient", // Ensure gradient animation isn't purged
  ],
  plugins: [],
};
