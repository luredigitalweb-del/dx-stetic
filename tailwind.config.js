/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // vermelho da logo (primária)
          red: "#E11414",
          "red-dark": "#B30F0F",
          "red-light": "#FF3D3D",
          // tema claro
          paper: "#FFFFFF", // fundo principal claro
          cloud: "#F5F6F8", // seções alternadas claras
          line: "#E6E7EB", // bordas claras
          ink: "#141416", // texto primário (escuro)
          "ink-soft": "#3C3C42", // texto escuro suave
          muted: "#71727A", // texto secundário
          // tema escuro (footer / overlays)
          dark: "#0E0E10",
          "dark-soft": "#17171A",
          // CTA WhatsApp
          neon: "#22C55E",
          "neon-dark": "#16A34A",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "fade-down": {
          from: { opacity: "0", transform: "translateY(-12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1) translate3d(0,0,0)" },
          "100%": { transform: "scale(1.14) translate3d(0,0,0)" },
        },
        "cta-pulse": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
        "marquee-rev": {
          from: { transform: "translate3d(-50%,0,0)" },
          to: { transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        "fade-down": "fade-down 0.4s ease-out",
        kenburns: "kenburns 24s ease-in-out infinite alternate",
        "cta-pulse": "cta-pulse 2.6s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "marquee-rev": "marquee-rev 44s linear infinite",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(20,20,22,0.18)",
        "red-glow": "0 12px 36px -10px rgba(225,20,20,0.45)",
      },
    },
  },
  plugins: [],
};
