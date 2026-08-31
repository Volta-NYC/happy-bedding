import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        "surface-alt": "var(--color-surface-alt)",
        ink: "var(--color-ink)",
        "ink-muted": "var(--color-ink-muted)",
        navy: {
          DEFAULT: "var(--color-navy)",
          dark: "var(--color-navy-dark)",
          light: "var(--color-navy-light)",
        },
        clay: {
          DEFAULT: "var(--color-clay)",
          dark: "var(--color-clay-dark)",
          light: "var(--color-clay-light)",
        },
        wheat: "var(--color-wheat)",
        sage: "var(--color-sage)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        kr: ["var(--font-kr)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
        prose: "640px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(22, 25, 40, 0.06)",
        card: "0 2px 12px rgba(22, 25, 40, 0.08)",
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
        600: "600ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 500ms ease-out forwards",
      },
    },
  },
  plugins: [],
}
export default config
