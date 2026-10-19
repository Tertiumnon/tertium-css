import { createTheme, generateBorderColors, generateTextColors } from "./theme.constants";

// The Coder palette: indigo background (#2f365e) and gold accent (#ffd166).
const primaryHsl = { hue: 231, saturation: 34, lightness: 28 };
const accentHsl = { hue: 42, saturation: 100, lightness: 70 };

export const theme = createTheme({
  metadata: {
    name: "dark--indigo--gold",
    description: "Dark theme with indigo background and gold accents (Coder)",
    darkness: "dark",
  },
  "primary-color": {
    name: "indigo",
    hsl: primaryHsl,
  },
  "accent-color": {
    name: "gold",
    hsl: accentHsl,
  },
  "text-colors": generateTextColors(true),
  borders: generateBorderColors(true),
  shadows: {
    color: "rgba(0, 0, 0, 0.3)",
  },
});
