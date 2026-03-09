/**
 * Design system tokens for نوافذ شتر
 * Primary accent: deep green (premium, trustworthy)
 */

export const tokens = {
  colors: {
    primary: {
      DEFAULT: "#0d5c3d",
      light: "#0f6b48",
      dark: "#0a4730",
      muted: "#e8f3ef",
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    whatsapp: "#25D366",
    whatsappHover: "#20bd5a",
    white: "#ffffff",
  },
  radius: {
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.25rem",
    "3xl": "1.5rem",
  },
  shadow: {
    soft: "0 2px 8px rgba(0,0,0,0.06)",
    medium: "0 4px 12px rgba(0,0,0,0.08)",
    card: "0 2px 12px rgba(0,0,0,0.06)",
  },
  spacing: {
    section: "4rem",
    sectionLg: "5rem",
    container: "1rem",
    containerLg: "1.5rem",
  },
  typography: {
    lineHeight: "1.7",
    letterSpacing: "0.01em",
  },
} as const;
