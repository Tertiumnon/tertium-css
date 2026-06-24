import { createTheme, generateBorderColors, generateTextColors } from "./theme.constants";

const primaryHsl = { hue: 275, saturation: 100, lightness: 12 };
const accentHsl = { hue: 51, saturation: 100, lightness: 50 };

export const theme = createTheme({
  metadata: {
    name: "dark--violet--gold",
    description: "Dark theme with violet background and gold accents",
    darkness: "dark",
  },
  "primary-color": {
    name: "violet",
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
