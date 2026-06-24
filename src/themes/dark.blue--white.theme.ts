import { createTheme, generateBorderColors, generateTextColors } from "./theme.constants";

const primaryHsl = { hue: 240, saturation: 100, lightness: 20 };
const accentHsl = { hue: 240, saturation: 100, lightness: 91.4 };

export const theme = createTheme({
  metadata: {
    name: "dark--blue--white",
    description: "Dark theme with blue background and white accents",
    darkness: "dark",
  },
  "primary-color": {
    name: "blue",
    hsl: primaryHsl,
  },
  "accent-color": {
    name: "white",
    hsl: accentHsl,
  },
  "text-colors": generateTextColors(true),
  borders: generateBorderColors(primaryHsl.hue, primaryHsl.saturation, true),
  shadows: {
    color: "rgba(0, 0, 0, 0.3)",
  },
});
