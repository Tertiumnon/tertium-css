import { createTheme, generateBorderColors, generateTextColors } from "./theme.constants";

const primaryHsl = { hue: 240, saturation: 100, lightness: 27 };
const accentHsl = { hue: 240, saturation: 100, lightness: 91.4 };

export const theme = createTheme({
  metadata: {
    name: "dark--navy--cyan",
    description: "Dark theme with navy background and cyan accents",
    darkness: "dark",
  },
  "primary-color": {
    name: "navy",
    hsl: primaryHsl,
  },
  "accent-color": {
    name: "cyan",
    hsl: accentHsl,
  },
  "text-colors": generateTextColors(true),
  borders: generateBorderColors(primaryHsl.hue, primaryHsl.saturation, true),
  shadows: {
    color: "rgba(0, 0, 0, 0.3)",
  },
});
