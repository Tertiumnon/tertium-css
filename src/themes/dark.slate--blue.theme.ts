import { createTheme } from "./theme.constants";

export const theme = createTheme({
  metadata: {
    name: "dark--slate--blue",
    description: "Dark theme with slate background and blue accents",
    darkness: "dark",
  },
  "primary-color": {
    name: "slate",
    hsl: { hue: 234, saturation: 22.73, lightness: 17.25 },
  },
  "accent-color": {
    name: "blue",
    hsl: { hue: 220.8, saturation: 100, lightness: 75.49 },
  },
  "text-colors": {
    primary: "#c8d3f5",
    secondary: "#828bb8",
    "on-primary": "#c8d3f5",
    "on-accent": "#1e2030",
    inverse: "#c8d3f5",
  },
  borders: {
    color: "#2f334d",
    "color-strong": "#545c7e",
    "color-light": "#2f334d",
  },
  shadows: { color: "rgba(0, 0, 0, 0.33)" },
  status: {
    success: "#c3e88d",
    warning: "#ffc777",
    danger: "#ff757f",
    info: "#82aaff",
  },
  backgrounds: {
    "page-offset": 0,
    "button-light-offset": 0,
  },
});
