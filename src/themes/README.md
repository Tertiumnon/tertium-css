# Theme System

This directory contains the Tertium CSS theme system with centralized configuration and type safety.

## Files

- **theme.types.ts** - TypeScript type definitions for themes
- **theme.constants.ts** - Centralized constants with defaults and factory function
- **[name].theme.ts** - Individual theme definitions (dark.navy--cyan, dark.purple--gold, light.white--red)
- **[name].theme.css** - Generated CSS from theme definitions (auto-generated)

## Adding a New Theme

### 1. Create Theme Config

Create a new file: `src/themes/{darkness}.{primary}--{accent}.theme.ts`

```typescript
import { createTheme } from "./theme.constants";

export const theme = createTheme({
  metadata: {
    name: "dark--navy--cyan",
    description: "Dark theme with navy background and cyan accents",
    darkness: "dark",
  },
  "primary-color": {
    name: "navy",
    hsl: {
      hue: 240,
      saturation: 100,
      lightness: 27,
    },
  },
  "accent-color": {
    name: "cyan",
    hsl: {
      hue: 240,
      saturation: 100,
      lightness: 80,
    },
  },
  "text-colors": {
    primary: "hsl(240, 100%, 85%)",
    secondary: "hsl(240, 100%, 70%)",
    "on-primary": "hsl(240, 100%, 80%)",
    "on-accent": "hsl(240, 100%, 22%)",
    inverse: "#ffffff",
  },
  borders: {
    color: "hsla(240, 100%, 47%, 0.3)",
    "color-strong": "hsla(240, 100%, 47%, 0.6)",
    "color-light": "hsla(240, 100%, 37%, 0.15)",
  },
  shadows: {
    color: "rgba(0, 0, 0, 0.3)",
  },
  // Omit if using defaults:
  // - variations (uses DEFAULT_VARIATIONS)
  // - status colors (uses DEFAULT_STATUS_COLORS)
  // - backgrounds (uses DEFAULT_DARK_BACKGROUNDS or DEFAULT_LIGHT_BACKGROUNDS)
});
```

### 2. Shared Defaults

The `createTheme()` factory automatically applies these defaults:

**All themes:** Status colors (success, warning, danger, info)
```typescript
DEFAULT_STATUS_COLORS = {
  success: "hsl(160, 84%, 39%)",
  warning: "hsl(38, 92%, 50%)",
  danger: "hsl(0, 91%, 60%)",
  info: "hsl(217, 97%, 61%)",
}
```

**All themes:** Color variations (primary/accent light/dark offsets)
```typescript
DEFAULT_VARIATIONS = {
  "primary-light-offset": 8,
  "primary-dark-offset": -5,
  "accent-light-offset": 15,
  "accent-dark-offset": -15,
}
```

**Light themes:** Background offsets
```typescript
DEFAULT_LIGHT_BACKGROUNDS = {
  "page-offset": 0,
  "card-offset": -4,
  "form-offset": -1,
  "form-input-offset": 0,
  "button-light-offset": -15,
  "button-hover-light-offset": -5,
}
```

**Dark themes:** Background offsets
```typescript
DEFAULT_DARK_BACKGROUNDS = {
  "page-offset": -2,
  "card-offset": 5,
  "form-offset": 8,
  "form-input-offset": 12,
  "button-light-offset": -15,
  "button-hover-light-offset": -5,
}
```

### 3. Generate CSS

Run the build to auto-generate CSS from your TypeScript config:

```bash
bun run build
```

Or generate a single theme:

```bash
bun scripts/theme/generate/generate.ts dark.navy--cyan
```

### 4. Add to Bundle

Add import to `src/bundles/full.css`:

```css
@import "../themes/{darkness}.{primary}--{accent}.theme.css";
```

### 5. Update Demo

Add theme button to `demo/index.html` theme switcher.

## Type Safety

All theme configs are type-checked via the `ThemeConfig` interface in `theme.types.ts`:

- ✅ Required properties enforced
- ✅ HSL ranges validated (hue: 0-360, sat/light: 0-100)
- ✅ Color strings must be valid CSS
- ✅ IDE autocomplete for all properties
- ✅ Compilation errors for wrong types

## Overriding Defaults

To override any default value, pass it to `createTheme()`:

```typescript
export const theme = createTheme({
  metadata: { /* ... */ },
  // ...
  variations: {
    "primary-light-offset": 10,  // Override default 8
    // Other values use defaults
  },
  status: {
    success: "hsl(120, 100%, 40%)",  // Custom success color
    // Other status colors use defaults
  },
});
```
