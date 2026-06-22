# Themes Guide

## Overview

Tertium CSS provides three built-in theme presets, each with a complete color palette, typography, spacing, and shadow system. Themes are built on CSS custom properties (CSS variables), allowing runtime switching without rebuilding your CSS.

## Built-in Themes

### Dark Purple Gold Theme (Default)

The default theme features:
- **Primary Colors**: Purple (#c084fc) and Gold (#f0c060)
- **Background**: Deep purple-black (#0d0820)
- **Text**: Light lavender (#ede8f5)
- **Accent**: Gold gradients and highlights
- **Use case**: Gaming, fantasy, high-contrast interfaces
- **Source**: Extracted from dragons-legends.www

Activate:
```html
<html data-theme="dark">
<!-- or explicitly -->
<html data-theme="dark--purple-gold">
```

### Light Theme

A light, sophisticated theme featuring:
- **Primary Colors**: Red (#d32f2f) and Orange (#f57c00)
- **Background**: Clean white (#ffffff)
- **Text**: Dark gray (#1a1a1a)
- **Accent**: Red/orange highlights
- **Use case**: Documentation, content-focused applications

Activate:
```html
<html data-theme="light">
```

## Theme Switching

### At Page Load

Detect user's preference and apply theme on page load:

```javascript
// Read from localStorage
function initTheme() {
  const saved = localStorage.getItem('theme-preference') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}

// Or detect system preference
function initTheme() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = isDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

initTheme();
```

### Runtime Theme Switching

```javascript
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme-preference', theme);

  // Dispatch custom event so components can react
  window.dispatchEvent(
    new CustomEvent('theme-change', { detail: { theme } })
  );
}

// Usage
setTheme('dark');
setTheme('light');
setTheme('blue');
```

### Listening for Theme Changes

```javascript
window.addEventListener('theme-change', (e) => {
  console.log('Theme changed to:', e.detail.theme);
  // Update component state, re-render charts, etc.
});
```

## Creating Custom Themes

### Method 1: Override in CSS

Create a new theme by overriding variables:

```css
/* In your custom-theme.css */
[data-theme="custom-brand"] {
  /* Override token values */
  --bg-color--primary: #ff6b6b;
  --bg-color--seconday: #4ecdc4;
  --color-success: #45b7d1;
  --color-warning: #f7b731;
  --color-danger: #ee5a6f;

  --bg: #f8f9fa;
  --bg-card: #ffffff;
  --text: #2c3e50;
  --text-dim: #7f8c8d;
  --border: rgba(0, 0, 0, 0.1);

  --heading-c1: #ff6b6b;
  --heading-c2: #ee5a6f;
}
```

Then use it:
```html
<html data-theme="custom-brand">
```

### Method 2: Extend Existing Theme

Inherit from a base theme and override specific variables:

```css
/* Start with dark theme, customize for your brand */
@import '@tertium/css/dist/tertium.themes.min.css';

[data-theme="custom-dark"] {
  /* Inherit all dark theme variables, override accent colors only */
  --bg-color--primary: #7c3aed;    /* Change purple to indigo */
  --accent: #7c3aed;
}
```

### Method 3: Multiple Themes in Same File

Define multiple theme variants:

```css
@import '@tertium/css/dist/tertium.themes.min.css';

/* High contrast variant for accessibility */
[data-theme="dark-high-contrast"] {
  --text: #ffffff;
  --bg: #000000;
  --border: #ffffff;
  --shadow-color: rgba(255, 255, 255, 0.2);
}

/* Warm variant */
[data-theme="dark-warm"] {
  --heading-c1: #ffd700;
  --heading-c2: #ffa500;
  --bg-color--primary: #ff8c00;
}

/* Cool variant */
[data-theme="dark-cool"] {
  --heading-c1: #87ceeb;
  --heading-c2: #4169e1;
  --bg-color--primary: #1e90ff;
}
```

## Token Structure by Theme

All themes define these token categories:

### Semantic Colors
```
--bg-color--primary      /* Main brand color, CTAs */
--bg-color--seconday    /* Secondary UI elements */
--color-success      /* Success states, positive actions */
--color-warning      /* Warnings, caution states */
--color-danger       /* Errors, destructive actions */
--color-neutral      /* Grays, neutral elements */
```

### Background Colors
```
--bg                 /* Page/body background */
--bg-card            /* Card, panel background */
--bar-bg             /* Navigation bar background */
--btn-bg             /* Default button background */
--btn-bg--hover       /* Button on hover/focus */
--cell-bg            /* Table cell background */
--progress-track     /* Progress bar track background */
```

### Text Colors
```
--text               /* Primary text color */
--text-dim           /* Secondary/muted text */
--text-on-primary    /* Text placed on primary color */
--text-on-secondary  /* Text placed on secondary color */

--heading-c1         /* Primary heading color */
--heading-c2         /* Secondary heading color */
--heading-c3         /* Tertiary heading color */
--heading-shadow     /* Heading text shadow */
```

### Borders & Shadows
```
--border             /* Border/outline color */
--border-strong      /* Prominent border color */
--shadow-color       /* Shadow tint */
--shadow-sm          /* Small shadow */
--shadow-md          /* Medium shadow */
--shadow-lg          /* Large shadow */
```

### Interactive States
```
--btn-border         /* Button border color */
--btn-bg--hover       /* Button hover background */
--btn-hover-border   /* Button hover border */
--btn-focus-outline  /* Button focus outline */
```

### Background Gradients (Dark Theme)
```
--bg-r1              /* Radial gradient 1 */
--bg-r2              /* Radial gradient 2 */
--bg-r3              /* Radial gradient 3 */
```

## Using Theme Variables in Components

### Example: Custom Button Component

```css
.my-button {
  background: var(--bg-color--primary);
  color: var(--text-on-primary);
  border: 2px solid var(--bg-color--primary);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: var(--font-weight-semibold);
  transition: all var(--duration-fast) ease-in-out;
}

.my-button:hover {
  background: var(--bg-color--primary--dark);
  border-color: var(--bg-color--primary--dark);
  box-shadow: var(--shadow-md);
}

.my-button:active {
  transform: scale(0.98);
}

.my-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

The button automatically adapts to all three themes with one CSS rule!

### Example: Custom Card Component

```css
.my-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
  color: var(--text);
}

.my-card h3 {
  color: var(--heading-c1);
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  margin-bottom: var(--spacing-2);
}

.my-card p {
  color: var(--text-dim);
  line-height: 1.6;
}
```

## Customizing Theme Tokens

### Override Single Token

```css
/* In your app styles */
:root {
  --bg-color--primary: #your-color;  /* Override just primary color */
}
```

### Override Theme-Specific Tokens

```css
/* Only affects dark theme */
[data-theme="dark"] {
  --heading-c1: #your-gold;
  --heading-c2: #your-purple;
}

/* Only affects light theme */
[data-theme="light"] {
  --heading-c1: #your-red;
  --heading-c2: #your-orange;
}
```

### Per-Component Theme Overrides

```css
/* Change a component's appearance per theme */
[data-theme="dark"] .card {
  background: rgba(18, 8, 36, 0.95);
}

[data-theme="light"] .card {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
```

## Accessibility in Themes

### Contrast Ratios

All built-in themes meet WCAG AA contrast standards:
- Text on background: 4.5:1 minimum
- Large text on background: 3:1 minimum
- Interactive elements have visible focus states

### Respecting prefers-color-scheme

```javascript
function initTheme() {
  // Respect user's system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme-preference');

  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
}
```

### High Contrast Mode Support

Adjust borders and text weight for better readability:

```css
@media (prefers-contrast: more) {
  [data-theme="dark"] {
    --border: rgba(255, 255, 255, 0.4);
    --text-dim: rgba(255, 255, 255, 0.7);
  }

  [data-theme="light"] {
    --border: rgba(0, 0, 0, 0.3);
    --text-dim: rgba(0, 0, 0, 0.6);
  }
}
```

### Reduced Motion Support

Components should respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Browser Support

CSS Custom Properties (CSS Variables) are supported in:
- Chrome/Edge 49+
- Firefox 31+
- Safari 9.1+
- iOS Safari 9.3+
- Android Browser 62+

For older browsers, use PostCSS plugins to convert variables to static values during build.

## Performance Considerations

### CSS Variable Overhead

CSS variables have minimal performance impact:
- **Initial load**: No difference (variables are native CSS)
- **Runtime theme switch**: Near-instant (no recompile needed)
- **Memory**: ~1KB per theme (negligible)

### Optimize with Scoped Variables

Instead of changing all variables at once, scope overrides to specific elements:

```css
/* Less efficient: override all variables */
[data-theme="dark"] {
  --bg-color--primary: ...;
  --bg-color--seconday: ...;
  /* ... 50 more variables ... */
}

/* More efficient: scope to where theme affects */
.themed-section {
  --bg-color--primary: ...;
  --bg-color--seconday: ...;
}
```

## Troubleshooting

### Theme isn't switching
- Ensure `data-theme` attribute is on `<html>` root element
- Check browser console for CSS errors
- Verify theme name matches available themes (dark, light, blue)

### Colors look wrong after switching
- Verify components use `var(--token-name)` not hardcoded colors
- Check for CSS specificity issues (inline styles override variables)
- Clear browser cache

### Variables not applied to custom components
- Ensure tertium CSS is imported before your component styles
- Use `@import` instead of `<link>` if using CSS @import
- Check variable name spelling (case-sensitive)

## Related Documentation

- [DESIGN_SYSTEM_OVERVIEW.md](DESIGN_SYSTEM_OVERVIEW.md) - System overview
- [TOKENS.md](TOKENS.md) - Complete token reference
- [COMPONENTS.md](COMPONENTS.md) - Component examples
- [INSTALLATION.md](INSTALLATION.md) - Setup guide
