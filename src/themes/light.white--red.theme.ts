import { createTheme, generateBorderColors, generateTextColors } from "./theme.constants";

const primaryHsl = { hue: 0, saturation: 0, lightness: 100 };
const accentHsl = { hue: 0, saturation: 100, lightness: 50 };

export const theme = createTheme({
  metadata: {
    name: "light--white--red",
    description: "Light theme with white background and red accents",
    darkness: "light",
  },
  "primary-color": {
    name: "white",
    hsl: primaryHsl,
  },
  "accent-color": {
    name: "red",
    hsl: accentHsl,
  },
  variations: {
    "primary-dark-offset": -3,
  },
  "text-colors": generateTextColors(false),
  borders: generateBorderColors(accentHsl.hue, accentHsl.saturation, false),
  shadows: {
    color: "rgba(0, 0, 0, 0.08)",
  },
});
