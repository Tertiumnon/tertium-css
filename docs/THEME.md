# Theme System - Design Rules

This document describes the rules and conventions for creating and using themes in Tertium CSS.

## Rule 1: Theme Naming Convention

All themes must follow the naming pattern:

```
{darkness}.{primary-color}--{accent-color}.theme.css
```

### Components

- **{darkness}**: Either `light` or `dark`
- **{primary-color}**: The primary background color (semantic name, not hex)
- **{accent-color}**: The primary accent color (semantic name, not hex)

### Examples

- `dark.navy--cyan.theme.css` - Dark theme with navy background and cyan accents
- `dark.purple--gold.theme.css` - Dark theme with purple background and gold accents
- `light.white--red.theme.css` - Light theme with white background and red accents

### Naming Requirements

1. Use semantic color names that match their actual appearance
   - Use `navy` not `blue` if the color is HSL(240, 100%, 27%)
   - Use `cyan` not `lightblue` if the color is HSL(240, 100%, 80%)
   - Use `gold` not `yellow` if the color is HSL(51, 100%, 50%)

2. Color names must be lowercase and hyphenated if multi-word
   - `light-blue` not `lightBlue` or `light_blue`

3. File structure:
   - Theme file: `src/themes/{darkness}.{primary-color}--{accent-color}.theme.css`
   - CSS selector: `[data-theme="{darkness}--{primary-color}--{accent-color}"]`
   - Minified: `dist/themes/{darkness}.{primary-color}--{accent-color}.theme.min.css`

---

## Rule 2: Two-Base-Color Architecture

Every theme uses exactly TWO base colors from which all other colors are derived:

### PRIMARY BG COLOR
- The main background color for the entire theme
- Used for body background, cards, forms, etc.
- CSS variable: `--primary-color`
- Variations: `--primary-color--lightest`, `--primary-color--lighter`, `--primary-color--light`, `--primary-color--dark`, `--primary-color--darker`, `--primary-color--darkest`

### PRIMARY ACCENT COLOR
- The secondary accent color for highlights and calls-to-action
- Used for button backgrounds, links, headings, and navigation accents
- CSS variable: `--accent-color`
- Variations: `--accent-color--lightest`, `--accent-color--lighter`, `--accent-color--light`, `--accent-color--dark`, `--accent-color--darker`, `--accent-color--darkest`

### How It Works

```css
[data-theme="dark--navy--cyan"] {
  /* PRIMARY BG COLOR: Navy background */
  --primary-color: hsl(240, 100%, 27%);

  /* PRIMARY ACCENT COLOR: Cyan highlight */
  --accent-color: hsl(240, 100%, 80%);

  /* Derive all other colors from these two bases */
  --primary-color: var(--primary-color);
  --accent-color: var(--accent-color);
  --bg-page: var(--primary-color);
  /* ... other colors derived from these two ... */
}
```

---

## Rule 3: Menu and Navbar Colors

The navbar and all context menus (dropdowns, popups) must follow theme-specific color rules to ensure proper visibility and contrast across light and dark themes.

### Dark Themes (navy--cyan, purple--gold)

**Navbar:**
- Background: Primary background color (`--primary-color`)

**Context Menus** (profile menu, theme switcher, dropdowns):
- Background: Lighter variant of primary (`--bg-card`)
- Text: Appropriate contrast text (`--text-on-primary`)

### Light Themes (white--red)

**Navbar:**
- Background: Primary background color (`--bg-page`)

**Context Menus** (profile menu, theme switcher, dropdowns):
- **Background: Accent color (`--accent-color`)**
- **Text: Text optimized for accent color (`--text-on-accent`)**

### Why This Rule

**Dark Themes:** Use primary BG variants to maintain visual hierarchy and consistency with the navbar and page background.

**Light Themes:** Use the accent color for ALL context menus to:
- Provide visual distinction from the light (white/light gray) background
- Ensure menu stands out and is immediately visible
- Create visual hierarchy showing menus are interactive elements
- Maintain consistency across all dropdown/popup menus

---

## Rule 4: Text Color Mapping

**Fundamental Principle:** Base text color MUST depend on whether the theme is DARK or LIGHT:
- **LIGHT themes** (lightness > 50%): Use **DARK/BLACK text** for readability on light backgrounds
- **DARK themes** (lightness < 50%): Use **LIGHT/WHITE text** for readability on dark backgrounds

### Light Backgrounds (Primary BG lightness > 50%)

- **Primary text**: Dark color (high contrast)
- **Secondary text**: Darker gray (readable but secondary)
- **Text on accent**: Light/white (for dark accent colors)
- **Inverse text**: White (for special contexts)

### Dark Backgrounds (Primary BG lightness < 50%)

- **Primary text**: Light color (high contrast)
- **Secondary text**: Lighter gray (readable but secondary)
- **Text on accent**: Dark/black or appropriate contrast
- **Inverse text**: White (for special contexts)

### Example: Light White & Red Theme

```css
[data-theme="light--white--red"] {
  --text-primary: hsl(0, 0%, 20%);      /* Dark text on white bg */
  --text-secondary: hsl(0, 0%, 40%);    /* Gray text */
  --text-on-accent: #ffffff;            /* White text on red bg */
}
```

---

## Rule 5: Page Background Color

**Fundamental Rule:** Page background color ALWAYS equals the primary color.

```css
[data-theme="dark--navy--cyan"] {
  --primary-color: hsl(240, 100%, 27%);    /* Navy */
  --bg-page: var(--primary-color);         /* Navy page background */
}

[data-theme="light--white--red"] {
  --primary-color: hsl(0, 0%, 100%);       /* White */
  --bg-page: var(--primary-color);         /* White page background */
}
```

### Why This Rule

- The primary color is the main background color of the theme
- Page background must match to create cohesive visual design
- No exceptions: page bg ALWAYS = primary color
- This ensures consistency and makes theme switching intuitive

### Variations

While page background = primary color, there are intentional variations for:
- **Cards**: `--bg-card` - slightly lighter/darker variant of primary
- **Forms**: `--bg-form` - slight variation for visual distinction
- **Form inputs**: `--bg-form-input` - another variation for interactive elements

All variations are derived from the primary color but differ in lightness.

---

## Rule 6: Heading and Navbar Accent Colors

Headers (h1, h2, h3, etc.) and navbar elements must use the primary accent color to create visual hierarchy and guide user attention.

### Headers

- All headings use: `color: var(--accent-color)`
- Heading shadow/glow (if used): `var(--heading-shadow)` derived from accent color
- Purpose: Stand out from body text, draw attention to section content

### Navbar Items

- Nav links: `color: var(--accent-color)`
- Nav link hover: `color: var(--accent-color--light)`
- Navbar profile/action items: Use accent color for highlights
- Purpose: Distinguish navigation from body content, show interactive elements

### Why

Using the accent color for headers and navbar items creates a consistent visual language:
- The accent color naturally draws the eye
- Creates hierarchy: headers/nav are primary importance
- Works across all themes because accent is carefully chosen for each theme
- Maintains consistency with button and link colors

---

## Rule 7: Navigation Link Colors

Navigation links should always use the accent color, regardless of visited state.

### Requirements

1. Default state: `color: var(--accent-color)`
2. Hover state: `color: var(--accent-color--light)`
3. Visited state: `color: var(--accent-color) !important`
   - The `!important` is necessary to override browser default visited link styling

### Why

Navigation items represent current sections/state, not external links. They should remain visually consistent and never appear "dimmed" or changed by browser history.

---

## Rule 8: CSS Variable Scoping

All theme variables must be scoped to `[data-theme="..."]` selector on the html element.

### Pattern

```css
[data-theme="dark--navy--cyan"] {
  /* Base colors defined here */
  --primary-color: hsl(240, 100%, 27%);
  --accent-color: hsl(240, 100%, 80%);

  /* All other colors derived from these two */
  --primary-color: var(--primary-color);
  --accent-color: var(--accent-color);
  /* etc */
}

[data-theme="dark--navy--cyan"] body {
  /* Body-specific styling */
  background: var(--bg-color--page);
}
```

### Advantage

- Multiple themes can be loaded in CSS, switched at runtime by changing `data-theme`
- No JavaScript required for color definitions
- Clean cascade and inheritance

---

## Rule 9: Color Accuracy

Colors in semantic names must be visually accurate to their names.

### Standard Definitions

| Color | Common HSL | Notes |
|-------|-----------|-------|
| Navy | HSL(240, 100%, 27%) | Deep, dark blue |
| Cyan | HSL(240, 100%, 80%) | Bright, light blue |
| Purple | HSL(300, 100%, 25%) | Deep, dark purple |
| Gold | HSL(51, 100%, 50%) | Bright yellow-gold |
| White | HSL(0, 0%, 100%) | Pure white |
| Red | HSL(0, 100%, 50%) | Bright, saturated red |

### Verification

Before creating a new theme, verify colors in a tool like:
- HSL color picker
- CSS color visualizer
- Actual browser rendering

The color should be instantly recognizable by its name.

---

## Rule 10: Adding a New Theme

Themes are defined in TypeScript config files with centralized constants and factory functions that auto-generate most color values.

### Architecture: Only Define Base Colors

The theme system uses a factory approach where **you only define**:
1. Metadata (name, description, darkness)
2. Primary color HSL
3. Accent color HSL
4. Shadow color (optional)

**Everything else is auto-generated:**
- Text colors (from primary/accent + darkness)
- Border colors (from primary/accent + darkness)
- Background offsets (light vs dark theme defaults)
- Status colors (success, warning, danger, info)
- Color variations (primary/accent light/dark offsets)

### Step 1: Create TypeScript Config

Create `src/themes/{darkness}.{primary-color}--{accent-color}.theme.ts`:

```typescript
import { createTheme, generateTextColors, generateBorderColors } from "./theme.constants";

const primaryHsl = { hue: 240, saturation: 100, lightness: 27 };
const accentHsl = { hue: 240, saturation: 100, lightness: 80 };

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
  "text-colors": generateTextColors(primaryHsl, accentHsl, true),
  borders: generateBorderColors(primaryHsl.hue, primaryHsl.saturation, true),
  shadows: {
    color: "rgba(0, 0, 0, 0.3)",
  },
});
```

### Auto-Generated Values

The `createTheme()` factory automatically applies:

**Text Colors** (via `generateTextColors()`):
- **Dark themes**: Use accent hue for light, readable text
  - `primary`: accent at 85% lightness
  - `secondary`: accent at 70% lightness
  - `on-primary`: accent at 80% lightness
  - `on-accent`: primary at 20% lightness
- **Light themes**: Use primary hue for dark, readable text
  - `primary`: primary at 20% lightness
  - `secondary`: primary at 40% lightness
  - `on-primary`: primary at 15% lightness
  - `on-accent`: white

**Border Colors** (via `generateBorderColors()`):
- **Dark themes**: Derive from primary hue (45% lightness base, 35% reduced)
- **Light themes**: Derive from accent hue (50% lightness base, 40% reduced)

**Shared Defaults** (from `theme.constants.ts`):
- Status colors: success, warning, danger, info (same across all themes)
- Color variations: primary/accent light/dark offsets
- Background offsets: Different for light vs dark themes
  - Light: page(0%), card(-4%), form(-1%), input(0%)
  - Dark: page(-2%), card(5%), form(8%), input(12%)

### Step 2: Generate CSS

Run the build script to auto-generate CSS from your TypeScript config:

```bash
bun run build
```

Or generate a single theme:
```bash
bun scripts/theme/generate/generate.ts dark.navy--cyan
```

This creates `src/themes/dark.navy--cyan.theme.css` with all color calculations.

### Step 3: Update Imports

Add theme to `src/bundles/full.css`:
```css
@import "../themes/dark.navy--cyan.theme.css";
```

### Step 4: Update Demo

Add theme button to `demo/index.html` theme switcher with the new theme name.

### Step 5: Test

Run the build:
```bash
bun run build
```

Then test in browser with dev tools:
```javascript
document.documentElement.setAttribute('data-theme', 'dark--navy--cyan');
```

### Overriding Defaults

Most values are auto-generated, but you can override any default:

```typescript
export const theme = createTheme({
  metadata: { /* ... */ },
  "primary-color": { /* ... */ },
  "accent-color": { /* ... */ },

  // Override specific defaults
  variations: {
    "primary-dark-offset": -8,  // Custom, non-default
    // Other variation offsets use defaults
  },

  status: {
    success: "hsl(120, 100%, 35%)",  // Custom success color
    // Other status colors use defaults
  },

  // Other auto-generated values use defaults:
  // text-colors, borders, backgrounds
});

---

## Understanding Generated CSS

When you run `bun run build`, the theme generator reads your TypeScript config and produces a CSS file. Here's what gets generated:

```css
[data-theme="dark--navy--cyan"] {
  /* 1. Base colors from your config */
  --primary-hue: 240;
  --primary-sat: 100%;
  --primary-light: 27%;
  --accent-hue: 240;
  --accent-sat: 100%;
  --accent-light: 80%;

  /* 2. Color variations (from DEFAULT_VARIATIONS) */
  --primary-color--light: hsl(...calc... + 8%);
  --primary-color--dark: hsl(...calc... - 5%);
  --accent-color--light: hsl(...calc... + 15%);
  --accent-color--dark: hsl(...calc... - 15%);

  /* 3. Background colors (from defaults or overrides) */
  --bg-page: hsl(...calc... + -2%);
  --bg-card: hsl(...calc... + 5%);
  /* ... */

  /* 4. Text colors (from generateTextColors()) */
  --text-primary: hsl(240, 100%, 85%);  /* accent at 85% */
  --text-secondary: hsl(240, 100%, 70%);  /* accent at 70% */
  /* ... */

  /* 5. Border colors (from generateBorderColors()) */
  --border-color: hsla(240, 100%, 45%, 0.3);
  --border-color--strong: hsla(240, 100%, 45%, 0.6);
  /* ... */

  /* 6. Status colors (from DEFAULT_STATUS_COLORS) */
  --color-success: hsl(160, 84%, 39%);
  --color-warning: hsl(38, 92%, 50%);
  /* ... */

  /* 7. Navbar & menu colors */
  --navbar-bg: var(--primary-color);
  --menu-bg: var(--bg-card);
  --menu-text: var(--text-on-primary);
}
```

All values automatically adapt to your primary and accent colors. If you change the base HSL values, rebuild to see all downstream colors update.

---

## Troubleshooting

### Menu appears invisible on light themes

Check that:
- `--menu-bg` is set to `var(--accent-color)` for light themes
- `--menu-text` has sufficient contrast with menu background
- `.navbar` has explicit background color via `--navbar-bg`

### Colors don't match theme name

Re-check HSL values and verify in browser dev tools:
```javascript
// In browser console
getComputedStyle(document.documentElement).getPropertyValue('--accent-color')
```

### Theme not switching

Verify:
- HTML has `data-theme="{darkness}--{primary-color}--{accent-color}"` attribute
- Theme file is imported in `src/bundles/full.css`
- All selectors match the data-theme value exactly

---

## Rule 11: Border Color Hierarchy

All borders must be **slightly darker than the background color** of their parent element to create visual separation and depth.

### Principle

- **Filled backgrounds**: Border is darker than background
- **Transparent backgrounds**: Border is the primary color (accent)
- **Purpose**: Borders define element boundaries and create visual structure

### Examples

**Button with background:**
```css
/* Default button */
--button-default-bg: hsl(..., 85%);      /* light gray */
--button-default-border: hsl(..., 70%);  /* darker gray */
```

**Card with background:**
```css
--bg-card: hsl(..., 80%);              /* card background */
--border-color: hsla(..., 45%, 0.3);   /* darker, semi-transparent */
```

**Form input with background:**
```css
--bg-form-input: hsl(..., 82%);        /* input background */
--border-color: hsla(..., 40%, 0.2);   /* darker border */
```

**Transparent outline:**
```css
/* Outline button (no fill) */
--button-outline-bg: transparent;
--button-outline-border: var(--accent-color);  /* primary color, no darkening needed */
```

### Implementation Rule

For any component with a **filled background color**:
1. Define background color variable
2. Define border color variable as **8-15% darker** (lower lightness)
3. Exception: Transparent backgrounds don't need darkening

This creates automatic visual hierarchy without additional styling logic.

---

## Rule 12: Button Styling Patterns

All button variants are **auto-generated** by the theme system. Button colors are derived from the two base colors (primary & accent) and are defined as CSS variables in each theme file. The `buttons.css` component uses only these generated variables, making it completely theme-agnostic.

### Auto-Generated Button Color Variables

For each theme, the generator creates the following CSS variables:

```css
/* Default button: darker primary bg, text-derived border, default text */
--button-default-bg: hsl(var(--primary-hue), var(--primary-sat), calc(var(--primary-light) + -15%));
--button-default-border: var(--text-primary--light);
--button-default-text: var(--text-primary);
--button-default-bg--hover: [darker or lighter based on theme];
--button-default-border--hover: var(--text-primary--light);
--button-default-text--hover: var(--text-primary);

/* Primary button: accent bg, darker accent border, text-on-accent */
--button-primary-bg: var(--accent-color);
--button-primary-border: var(--accent-color--dark);
--button-primary-text: var(--text-on-accent);
--button-primary-bg--hover: var(--accent-color--dark);
--button-primary-border--hover: var(--accent-color--dark);

/* Outline button: transparent bg, accent border, accent text */
--button-outline-bg: transparent;
--button-outline-border: var(--accent-color);
--button-outline-text: var(--accent-color);
--button-outline-bg--hover: rgba(var(--accent-hue), var(--accent-sat), var(--accent-light), 0.1);
--button-outline-border--hover: var(--accent-color--dark);
--button-outline-text--hover: var(--accent-color--dark);

/* Submit button: accent bg, darker accent border, text-on-accent */
--button-submit-bg: var(--accent-color);
--button-submit-border: var(--accent-color--dark);
--button-submit-text: var(--text-on-accent);
--button-submit-bg--hover: var(--accent-color--dark);
--button-submit-border--hover: var(--accent-color--dark);
--button-submit-text--hover: var(--text-on-accent);

/* Borderless button: no border, accent text */
--button-text-color: var(--accent-color);
--button-text-bg--hover: [subtle tint of accent color];
--button-text-color--hover: var(--accent-color--dark);
```

### Button CSS Implementation

The `src/components/buttons.css` uses only the generated variables, requiring **zero theme-specific CSS**:

```css
.btn {
  background: var(--button-default-bg);
  border-color: var(--button-default-border);
  color: var(--button-default-text);
}

.btn:hover:not(:disabled) {
  background: var(--button-default-bg--hover);
  border-color: var(--button-default-border--hover);
  color: var(--button-default-text--hover);
}

.btn--primary {
  background: var(--button-primary-bg);
  border-color: var(--button-primary-border);
  color: var(--button-primary-text);
}

.btn--secondary {
  background: var(--button-secondary-bg);
  border-color: var(--button-secondary-border);
  color: var(--button-secondary-text);
}

.btn--outline {
  background: var(--button-outline-bg);
  border-color: var(--button-outline-border);
  color: var(--button-outline-text);
}

.btn--submit {
  background: var(--button-submit-bg);
  border-color: var(--button-submit-border);
  color: var(--button-submit-text);
  padding: var(--spacing-2) var(--spacing-6);
  text-transform: uppercase;
  font-weight: 600;
}

.btn--text {
  background: transparent;
  border: none;
  color: var(--button-text-color);
}

.btn--text:hover:not(:disabled) {
  background: var(--button-text-bg--hover);
  color: var(--button-text-color--hover);
}

/* Size variants */
.btn--sm {
  padding: var(--spacing-1) var(--spacing-3);
  font-size: var(--text-sm);
}

.btn--lg {
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--text-lg);
}
```

### Semantic Rules (Applied in Theme Generator)

**Default Button (`.btn`)**
- Background: Darker primary color (subtle contrast against page)
- Border: `--text-primary--light` (lighter version of text color)
- Text: `--text-primary` (default text color)
- Hover: Background changes based on theme (darker in light, lighter in dark)
- Use: Secondary actions, less prominent buttons

**Primary Button (`.btn--primary`)**
- Background: `--accent-color` (stands out)
- Border: `--accent-color--dark` (darker than background)
- Text: `--text-on-accent` (auto-adjusted for contrast)
- Hover: Background and border darken to `--accent-color--dark`
- Use: Main call-to-action, primary actions

**Outline Button (`.btn--outline`)**
- Background: `transparent`
- Border: `--accent-color`
- Text: `--accent-color`
- Hover: Subtle tint + darker border
- Use: Secondary alternative to default

**Submit Button (`.btn--submit`)**
- Same as primary button plus:
- Padding: `var(--spacing-2) var(--spacing-6)` (more horizontal)
- Text: `text-transform: uppercase`
- Font weight: `600`
- Use: Form submissions, explicit submit actions

**Borderless Button (`.btn--text`)**
- Background: `transparent`
- Border: `none`
- Text: `--accent-color`
- Hover: Subtle tint background + darker text
- Use: Minimal, text-only actions, links-styled buttons

### How It Works Across Themes

**Light Theme (white--red):**
- `--button-default-bg` = light gray (derived from white with -4% offset)
- `--button-primary-bg` = red (accent)
- Default button is clearly different from page (white) background ✓

**Dark Theme (navy--cyan):**
- `--button-default-bg` = slightly lighter navy (derived from navy with +5% offset)
- `--button-primary-bg` = cyan (accent)
- Default button is clearly different from page (navy) background ✓

### Adding New Button Variants

To add a new button variant:
1. Add generated variables in `scripts/theme/generate/generate.ts`
2. Create CSS class in `src/components/buttons.css` using the generated variables
3. Run `npm run build` to regenerate all themes
4. The new variant automatically works across all themes

### Why Auto-Generation

1. **No theme-specific button CSS**: Buttons work the same in all themes
2. **Consistency guaranteed**: All button colors come from the same base color system
3. **Easy to modify**: Change button styling in one place (the generator) for all themes
4. **Accessibility**: `--text-on-accent` ensures text contrast in all themes
5. **Future-proof**: Adding new themes automatically includes all button colors

---

## Rule 13: Code and Pre Background Colors

Inline `<code>` and block `<pre>` elements use the darkest primary color variations to create visual hierarchy and improve readability.

### Background Color Hierarchy

**Inline Code (`<code>`)**
- Background: `--primary-color--darker` (3rd darkest primary variation)
- Purpose: Subtle visual distinction from page background
- Creates clear distinction between code and surrounding text
- Accessible for monospace text readability

**Code Blocks (`<pre>`)**
- Background: `--primary-color--darkest` (darkest primary variation)
- Darker than inline code: Creates stronger visual separation
- Emphasizes blocks of code as distinct, important elements
- Maximum contrast for readability of large code sections

### Color Spectrum Usage

Both code backgrounds use the established primary color spectrum:

```
--primary-color--lightest   (+25%)    [lightest]
--primary-color--lighter    (+15%)    
--primary-color--light      (+8%)     
--primary-color             (base)    
--primary-color--dark       (-5%)     
--primary-color--darker     (-12%)    ← Used for <code>
--primary-color--darkest    (-20%)    ← Used for <pre>
```

### Implementation in base.css

```css
code,
pre {
  font-family: monospace;
  background: var(--code-bg);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: 0.375em;
}

pre {
  overflow-x: auto;
  padding: var(--spacing-4);
  margin: 0;
  background: var(--code-block-bg);
}
```

### Generated CSS Variables

The theme system automatically assigns the correct variations:

```css
[data-theme="dark--navy--cyan"] {
  --code-bg: var(--primary-color--darker);
  --code-block-bg: var(--primary-color--darkest);
}
```

### Why This Rule

1. **Semantic**: Uses defined color variations instead of arbitrary opacity values
2. **Consistent**: Part of the unified primary color spectrum
3. **Visual Hierarchy**: Darker shades clearly distinguish code from content
4. **Theme Agnostic**: Works identically across light and dark themes
5. **Scalable**: Adding new themes automatically includes correct code colors
6. **Accessible**: Maximum contrast for code readability without custom CSS
