/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      colors: {
        // ─── Legacy & Utility Colors ───
        g4: "#4D5969",
        g6: "#748194",
        light: "#F8FAFC",
        line: "#E8EEF5",

        // ─── Main Theme (Light) ───
        background: "#F1FCFA",
        foreground: "#00161D",

        card: {
          DEFAULT: "#FCFFFF",
          foreground: "#00161D",
        },

        popover: {
          DEFAULT: "#FCFFFF",
          foreground: "#00161D",
        },

        primary: {
          DEFAULT: "#002A3A",
          brand: "#BE6B1D",
          // dark: "#E09626",
          foreground: "#0B1727",
          foreground1: "#F3FCFB",
        },

        secondary: {
          DEFAULT: "#D4F3EF",
          foreground: "#002432",
        },

        muted: {
          DEFAULT: "#E0F1F2",
          foreground: "#3F5A61",
        },

        accent: {
          DEFAULT: "#F7B746",
          foreground: "#00161D",
        },

        destructive: {
          DEFAULT: "#DF202E",
          foreground: "#FCFCFC",
        },

        border: "#D8E4E4",
        input: "#C6DBDA",
        ring: "#BE6B1D",

        brand: {
          DEFAULT: "#FBB03B",
          foreground: "#001117",
        },

        ink: "#00161D",
        cream: "#F1FCFA",

        boxShadow: {
          // header: "0px 10px 30px rgba(11, 23, 39, 0.08)",
          // card: "0px 14px 40px rgba(233, 240, 248, 1)",

          elegant: "0 20px 45px -20px rgba(190, 107, 29, 0.42)",
          soft: "0 10px 30px -18px rgba(0, 22, 29, 0.24)",
        },

        // ─── Extra UI Colors ───
        whatsapp: "#32C364",
        "btn-gradient-end": "#DDA734",



        // // ─── Dark Mode Colors ───
        // dark: {
        //   DEFAULT: "#0B1727",
        //   background: "#000D14",
        //   foreground: "#EBF6F5",
        //   card: "#001922",
        //   "card-foreground": "#EBF6F5",
        //   popover: "#001922",
        //   "popover-foreground": "#EBF6F5",
        //   primary: "#CCE4E1",
        //   "primary-foreground": "#001118",
        //   secondary: "#00252F",
        //   "secondary-foreground": "#EBF6F5",
        //   muted: "#05262E",
        //   "muted-foreground": "#98AEB1",
        //   accent: "#E8AB3E",
        //   "accent-foreground": "#001118",
        //   destructive: "#E62B34",
        //   "destructive-foreground": "#FCFCFC",
        //   border: "#FFFFFF1A",
        //   input: "#FFFFFF26",
        //   ring: "#DC873F",
        //   brand: "#DC873F",
        //   "brand-foreground": "#001118",
        //   ink: "#EBF6F5",
        //   cream: "#000D14",
        // },

        // ─── Taxi SVG Colors ───
        taxi: {
          gold: {
            light: "#FFD76A",
            DEFAULT: "#F5A524",
            dark: "#B8730B",
          },
          window: {
            highlight: "#FFE89A",
            shadow: "#E69412",
            blue: {
              top: "#3A5A7A",
              bottom: "#0F2338",
            },
          },
          chrome: {
            light: "#D9DDE3",
            dark: "#6C737D",
          },
          brown: {
            stroke: "#3A2308",
            detail: "#2A1A06",
          },
          navy: "#0E1A2A",
          cream: "#FFF8E1",
          headlight: {
            glow: "#FFF6C2",
            ring: "#8A5A10",
          },
          tail: "#C02B2B",
          tire: "#0E1116",
          bolt: "#8A8F97",
        },

        // ─── Overlay & Shadow Colors ───
        overlay: {
          black: {
            50: "#00000080",
            70: "#000000B3",
            80: "#000000CC",
          },
          white: {
            10: "#FFFFFF1A",
          },
        },

        shadow: {
          dark: "#0A141E47",
          road: "#0F192814",
        },
      },

      fontSize: {
        "84": ["84px", "96px"],
        "70": ["70px", "80px"],
        "64": ["64px", "74px"],
        "56": ["56px", "66px"],
        "48": ["48px", "58px"],
        "40": ["40px", "52px"],
        "36": ["36px", "46px"],
        "32": ["32px", "40px"],
        "30": ["30px", "40px"],
        "28": ["28px", "36px"],
        "26": ["26px", "36px"],
        "24": ["24px", "32px"],
        "22": ["22px", "30px"],
        "20": ["20px", "28px"],
        "18": ["18px", "26px"],
        "16": ["16px", "24px"],
        "14": ["14px", "22px"],
        "12": ["12px", "18px"],
      },

      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      borderRadius: {
        lg: "0.9rem",
        md: "calc(0.9rem - 2px)",
        sm: "calc(0.9rem - 4px)",
        xl: "calc(0.9rem + 4px)",
        "2xl": "calc(0.9rem + 8px)",
      },

      boxShadow: {
        header: "0px 10px 30px rgba(11, 23, 39, 0.08)",
        card: "0px 14px 40px rgba(233, 240, 248, 1)",
        elegant: "0 20px 45px -20px rgba(190, 107, 29, 0.42)",
        soft: "0 10px 30px -18px rgba(0, 22, 29, 0.24)",
      },
    },
  },
  plugins: [],
};