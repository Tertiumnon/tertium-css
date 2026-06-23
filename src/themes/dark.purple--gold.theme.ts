import { createTheme, generateBorderColors, generateTextColors } from "./theme.constants";

const primaryHsl = { hue: 300, saturation: 100, lightness: 27 };
const accentHsl = { hue: 51, saturation: 100, lightness: 50 };

export const theme = createTheme({
  metadata: {
    name: "dark--purple--gold",
    description: "Dark theme with purple background and gold accents",
    darkness: "dark",
  },
  "primary-color": {
    name: "purple",
    hsl: primaryHsl,
  },
  "accent-color": {
    name: "gold",
    hsl: accentHsl,
  },
  "text-colors": generateTextColors(true),
  borders: generateBorderColors(primaryHsl.hue, primaryHsl.saturation, true),
  shadows: {
    color: "rgba(0, 0, 0, 0.3)",
  },
});
