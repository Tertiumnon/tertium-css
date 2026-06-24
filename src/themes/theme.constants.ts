import type { ThemeConfig } from "./theme.types";

/**
 * Dark theme color variations - used for dark backgrounds
 */
export const DEFAULT_DARK_THEME_VARIATIONS = {
  "primary-lightest-offset": 8,
  "primary-lighter-offset": 6,
  "primary-light-offset": 4,
  "primary-dark-offset": -2,
  "primary-darker-offset": -4,
  "primary-darkest-offset": -8,
  "accent-lightest-offset": 35,
  "accent-lighter-offset": 25,
  "accent-light-offset": 15,
  "accent-dark-offset": -20,
  "accent-darker-offset": -25,
  "accent-darkest-offset": -30,
} as const;

/**
 * Light theme color variations - used for light backgrounds
 */
export const DEFAULT_LIGHT_THEME_VARIATIONS = {
  "primary-lightest-offset": 6,
  "primary-lighter-offset": 4,
  "primary-light-offset": 2,
  "primary-dark-offset": -10,
  "primary-darker-offset": -15,
  "primary-darkest-offset": -20,
  "accent-lightest-offset": 24,
  "accent-lighter-offset": 12,
  "accent-light-offset": 6,
  "accent-dark-offset": -6,
  "accent-darker-offset": -12,
  "accent-darkest-offset": -30,
} as const;

export const DEFAULT_STATUS_COLORS = {
  success: "hsl(160, 84%, 39%)",
  warning: "hsl(38, 92%, 50%)",
  danger: "hsl(0, 91%, 60%)",
  info: "hsl(217, 97%, 61%)",
} as const;

/**
 * Default background offsets for light themes
 */
export const DEFAULT_LIGHT_BACKGROUNDS = {
  "page-offset": 0,
  "card-offset": 0,
  "form-offset": -1,
  "form-input-offset": 0,
  "button-light-offset": -15,
  "button-hover-light-offset": -5,
} as const;

/**
 * Default background offsets for dark themes
 */
export const DEFAULT_DARK_BACKGROUNDS = {
  "page-offset": -2,
  "card-offset": 0,
  "form-offset": 8,
  "form-input-offset": 12,
  "button-light-offset": 8,
  "button-hover-light-offset": 15,
} as const;

/**
 * Generate text colors for readability
 * Dark themes: white text
 * Light themes: black text
 */
export function generateTextColors(isDark: boolean) {
  if (isDark) {
    // Dark theme: white for body text, accent-based variants for emphasis
    return {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
      "on-primary": "#ffffff",
      "on-accent": "#000000",
      inverse: "#ffffff",
    };
  } else {
    // Light theme: black for body text, grayscale variants for emphasis
    return {
      primary: "#000000",
      secondary: "#666666",
      "on-primary": "#000000",
      "on-accent": "#ffffff",
      inverse: "#ffffff",
    };
  }
}

/**
 * Generate border colors derived from a base color (hue, saturation)
 * For dark themes: use primary color with adjusted lightness and opacity
 * For light themes: use accent color with adjusted lightness and opacity
 */
export function generateBorderColors(
  hue: number,
  saturation: number,
  isDark: boolean
) {
  const baseLightness = isDark ? 45 : 50;
  const reducedLightness = isDark ? 35 : 40;

  return {
    color: `hsla(${hue}, ${saturation}%, ${baseLightness}%, 0.3)`,
    "color-strong": `hsla(${hue}, ${saturation}%, ${baseLightness}%, 0.6)`,
    "color-light": `hsla(${hue}, ${saturation}%, ${reducedLightness}%, 0.15)`,
  };
}

/**
 * Factory to create a new theme config with defaults
 */
export function createTheme(
  overrides: Partial<ThemeConfig>
): ThemeConfig {
  const isDark = overrides.metadata?.darkness === "dark";
  const backgrounds = isDark
    ? DEFAULT_DARK_BACKGROUNDS
    : DEFAULT_LIGHT_BACKGROUNDS;
  const variations = isDark
    ? DEFAULT_DARK_THEME_VARIATIONS
    : DEFAULT_LIGHT_THEME_VARIATIONS;

  return {
    metadata: overrides.metadata || {
      name: "",
      description: "",
      darkness: "dark",
    },
    "primary-color": overrides["primary-color"] || {
      name: "",
      hsl: { hue: 0, saturation: 0, lightness: 50 },
    },
    "accent-color": overrides["accent-color"] || {
      name: "",
      hsl: { hue: 0, saturation: 0, lightness: 50 },
    },
    variations: {
      ...variations,
      ...overrides.variations,
    },
    "text-colors": overrides["text-colors"] || {
      primary: "#000000",
      secondary: "#666666",
      "on-primary": "#000000",
      "on-accent": "#ffffff",
      inverse: "#ffffff",
    },
    borders: overrides.borders || {
      color: "hsla(0, 0%, 0%, 0.1)",
      "color-strong": "hsla(0, 0%, 0%, 0.2)",
      "color-light": "hsla(0, 0%, 0%, 0.05)",
    },
    shadows: overrides.shadows || {
      color: "rgba(0, 0, 0, 0.1)",
    },
    status: {
      ...DEFAULT_STATUS_COLORS,
      ...overrides.status,
    },
    backgrounds: {
      ...backgrounds,
      ...overrides.backgrounds,
    },
  };
}
