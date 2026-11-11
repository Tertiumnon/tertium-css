import { createTheme } from "./theme.constants";

export const theme = createTheme({
  metadata: {
    name: "light--white--blue",
    description: "Light workspace theme with neutral surfaces and blue actions",
    darkness: "light",
  },
  "primary-color": {
    name: "white",
    hsl: { hue: 218, saturation: 24, lightness: 100 },
  },
  "accent-color": {
    name: "blue",
    hsl: { hue: 215, saturation: 90, lightness: 47 },
  },
  variations: {
    "primary-light-offset": 0,
    "primary-dark-offset": -3,
    "accent-light-offset": 6,
    "accent-dark-offset": -6,
  },
  "text-colors": {
    primary: "#172b4d",
    secondary: "#5e6c84",
    "on-primary": "#172b4d",
    "on-accent": "#ffffff",
    inverse: "#ffffff",
  },
  borders: {
    color: "#dfe1e6",
    "color-strong": "#b3bac5",
    "color-light": "#ebecf0",
  },
  shadows: { color: "rgba(9, 30, 66, 0.12)" },
  status: {
    success: "#216e4e",
    warning: "#974f0c",
    danger: "#c9372c",
    info: "#0c66e4",
  },
  backgrounds: {
    "page-offset": 0,
    "card-offset": 0,
    "form-offset": -3,
    "form-input-offset": 0,
    "button-light-offset": -3,
    "button-hover-light-offset": -6,
  },
});
