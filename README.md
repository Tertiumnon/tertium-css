# Tertium CSS - Universal Design System

A framework-agnostic, universal CSS design system with composable tokens, themes, components, and utilities. Use what you need, nothing more.

**🎉 Now with Design Tokens & Theme System!** This release adds a universal design system foundation while maintaining 100% backward compatibility with existing projects.

**📖 [View Interactive Demo](demo/index.html)** - See all components, themes, and design tokens in action

## Quick Start

```bash
npm install @tertium/css
```

### For Existing Users
If you're already using tertium-css, nothing changes! Your existing imports continue to work:

```html
<!-- Existing projects: fully backward compatible -->
<link rel="stylesheet" href="dist/tertium.min.css">
```

You now also have access to:
- ✨ Design tokens (CSS variables for consistency)
- 🎨 Five built-in themes (Dark Purple Gold, Dark Blue, Dark Deep Blue, Light Red)
- 🔌 Pre-built components (buttons, cards)

### For New Projects
Choose your entry point based on your needs:

```html
<!-- Option 1: Full everything -->
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.min.css">

<!-- Option 2: Just themes (for custom components) -->
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.themes.min.css">

<!-- Option 3: Just layout utilities -->
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.skeleton.min.css">

<!-- Option 4: All utilities -->
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.utilities.min.css">

<!-- Option 5: Just design tokens (variables) -->
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.variables.min.css">
```

## Design System Overview

Tertium CSS is built on a foundation of **design tokens** (CSS variables) that define spacing, colors, typography, shadows, and more. Everything derives from these tokens, ensuring consistency across all projects.

### Core Concepts

1. **Tokens** - CSS custom properties (--spacing-4, --primary-color, etc.)
2. **Themes** - Token presets that change appearance (Dark Purple Gold, Dark Blue, Dark Deep Blue, Light Red)
3. **Skeleton** - Essential layout utilities (flexbox, grid, spacing, positioning)
4. **Components** - Pre-built UI elements (buttons, cards, etc.)
5. **Utilities** - Extended utilities for rapid development

## Consumption Models

Choose what you need. All bundles include design tokens.

### Model 1: Full Bundle (Everything) ~22KB

```html
<link rel="stylesheet" href="dist/tertium.min.css">
```

Includes:
- ✅ Design tokens (CSS variables)
- ✅ All five themes (Dark Purple Gold, Dark Blue, Dark Deep Blue, Light Red)
- ✅ Base styles (reset)
- ✅ Skeleton layout utilities (flex, grid, spacing, positioning)
- ✅ All utility classes
- ✅ Pre-built components (buttons, cards)

**Best for:** New projects, complete applications, when you want everything out of the box.

### Model 2: Themes Only ~4KB

```html
<link rel="stylesheet" href="dist/tertium.themes.min.css">
<!-- Then build your own components using CSS variables -->
<link rel="stylesheet" href="your-components.css">
```

Includes:
- ✅ Design tokens
- ✅ Five theme presets (Dark Purple Gold, Dark Blue, Dark Deep Blue, Light Red)

**Best for:** Teams with existing component styles who want consistent tokens and theme switching.

### Model 3: Skeleton (Layout Essentials) ~8KB

```html
<link rel="stylesheet" href="dist/tertium.skeleton.min.css">
```

Includes:
- ✅ Design tokens
- ✅ Base styles (reset)
- ✅ Flexbox layout utilities
- ✅ Grid utilities
- ✅ Spacing utilities (margin, padding, gap)
- ✅ Positioning utilities
- ✅ Display/visibility utilities

**Best for:** Rapid prototyping, building custom layouts, minimal CSS footprint.

**Example:**
```html
<div class="flex gap-4 p-6">
  <div class="flex-1">50% width</div>
  <div class="flex-1">50% width</div>
</div>
```

### Model 4: All Utilities ~12KB

```html
<link rel="stylesheet" href="dist/tertium.utilities.min.css">
```

Includes:
- ✅ Design tokens
- ✅ Base styles
- ✅ **Skeleton** utilities (flex, grid, spacing, positioning)
- ✅ Typography utilities (text size, weight, alignment)
- ✅ Color utilities (bg, text colors)
- ✅ Border utilities
- ✅ All other utilities

**Best for:** Tailwind-like utility-first development, maximum flexibility.

**Example:**
```html
<h2 class="text-2xl font-bold text-blue-600">Title</h2>
<p class="text-gray-600 mt-2">Description with margin</p>
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Action
</button>
```

### Model 5: Components Only

```html
<link rel="stylesheet" href="dist/tertium.components.min.css">
```

Includes:
- ✅ Design tokens
- ✅ Base styles
- ✅ Pre-built components (buttons, cards, forms, tables)

**Best for:** Using pre-styled components without utilities.

### Model 6: Variables Only ~2KB

```html
<link rel="stylesheet" href="dist/tertium.variables.min.css">
<!-- Then use variables in your own CSS -->
<link rel="stylesheet" href="your-app.css">
```

In `your-app.css`:
```css
.my-button {
  padding: var(--spacing-2) var(--spacing-4);
  background: var(--primary-color);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
}
```

**Best for:** Maximum flexibility, custom styling, design system integration.

## Mix and Match

Combine bundles to get exactly what you need:

```html
<!-- Themes + Skeleton -->
<link rel="stylesheet" href="dist/tertium.themes.min.css">
<link rel="stylesheet" href="dist/tertium.skeleton.min.css">

<!-- Variables + Components -->
<link rel="stylesheet" href="dist/tertium.variables.min.css">
<link rel="stylesheet" href="dist/tertium.components.min.css">

<!-- Themes + Utilities -->
<link rel="stylesheet" href="dist/tertium.themes.min.css">
<link rel="stylesheet" href="dist/tertium.utilities.min.css">
```

## Theme System

Five built-in themes with runtime switching:

### Dark Purple Gold (Default)
Purple (#c084fc) + Gold (#f0c060) on dark background. Perfect for gaming and fantasy interfaces. Extracted from dragons-legends.www.

```html
<html data-theme="dark">
<!-- or explicitly -->
<html data-theme="dark--purple-gold">
```

### Dark Blue
Deep Blue (#2f365e) + Light Blue (#444175) on dark background. Professional coder theme synced from tertiumnon.github.io.

```html
<html data-theme="dark--deep-blue">
```

### Dark Deep Blue
Purple (#b494f7) + Deep Blue (#1a1e3f, #2a3456) on dark background. Complex application theme synced from dragons-legends.gm.www.

```html
<html data-theme="dark--deep-blue">
```

### Light Red
Red (#d32f2f) + Orange (#f57c00) on light background. Great for documentation and content-focused sites.

```html
<html data-theme="light">
```

### Switch Themes at Runtime

```javascript
// Change theme
document.documentElement.setAttribute('data-theme', 'light');

// Persist to localStorage
function setTheme(theme) {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
```

## Design Tokens

All styling uses CSS custom properties defined in one place:

```css
/* Spacing */
var(--spacing-1)  /* 4px */
var(--spacing-2)  /* 8px */
var(--spacing-4)  /* 16px */
var(--spacing-6)  /* 24px */

/* Typography */
var(--text-base)
var(--text-lg)
var(--text-2xl)
var(--font-bold)

/* Colors */
var(--primary-color)
var(--color-success)
var(--color-danger)

/* Others */
var(--radius-md)
var(--shadow-md)
var(--duration-normal)
```

See [TOKENS.md](docs/TOKENS.md) for complete reference.

## Components

Pre-built UI elements with multiple variants:

### Buttons

```html
<!-- Default button -->
<button class="btn">Default</button>

<!-- Primary button (uses accent color) -->
<button class="btn btn--primary">Primary</button>

<!-- Submit button (for forms) -->
<button class="btn btn--submit" type="submit">Submit</button>

<!-- Outline button (transparent with border) -->
<button class="btn btn--outline">Outline</button>

<!-- Disabled state -->
<button class="btn" disabled>Disabled</button>
```

### Cards

```html
<!-- Standard card with primary background -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>

<!-- Section card with darker background (better for grouping) -->
<div class="section">
  <div class="card">
    <h2>Content Section</h2>
    <p>Content inside</p>
  </div>
</div>
```

### Forms

```html
<form class="form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="form-input">
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" class="form-input">
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" class="form-input"></textarea>
  </div>

  <button type="submit" class="btn btn--primary">Send</button>
</form>
```

### Tables

```html
<table class="table">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
    <tr>
      <td>Data 4</td>
      <td>Data 5</td>
      <td>Data 6</td>
    </tr>
  </tbody>
</table>
```

### Navigation Bar

```html
<nav class="navbar">
  <div class="container-2xl">
    <div class="navbar-inner">
      <a href="#" class="navbar-brand">Logo</a>

      <ul class="navbar-menu">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Docs</a></li>
      </ul>

      <div class="navbar-actions">
        <button class="btn btn--primary">Sign In</button>
      </div>
    </div>
  </div>
</nav>
```

### Badges

```html
<!-- Color badges -->
<span class="badge">Default</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-warning">Warning</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-info">Info</span>
```

### Utility Classes for Colors

```html
<!-- Background colors -->
<div class="bg-primary">Primary background</div>
<div class="bg-accent">Accent background</div>
<div class="bg-success">Success background</div>
<div class="bg-warning">Warning background</div>
<div class="bg-danger">Danger background</div>
<div class="bg-info">Info background</div>

<!-- Text colors -->
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>
```

See [COMPONENTS.md](docs/COMPONENTS.md) for detailed component API reference.

## File Structure

```
src/
├── system/
│   ├── tokens/              # Design token definitions
│   └── themes/              # Theme presets (Dark Purple Gold, Dark Blue, Dark Deep Blue, Light Red)
├── components/              # Pre-built components (buttons, cards, section)
├── utilities/               # Utility classes (spacing, display, colors, etc.)
├── fonts/                   # Self-hosted font files (Cormorant, Alegreya)
└── bundles/                 # Composite bundle entry points

dist/
├── bundles/
│   ├── main.min.css         # Full bundle (backward compatible)
│   ├── skeleton.min.css     # Layout essentials
│   ├── utilities.min.css    # All utilities
│   ├── components.min.css   # Components only
│   └── variables.min.css    # Design tokens only
├── themes/
│   ├── dark.purple-gold.theme.min.css
│   ├── dark.blue.theme.min.css
│   ├── dark.deep-blue.theme.min.css
│   └── light.red.theme.min.css
├── utilities/               # Individual utility files
└── fonts/                   # Copied font files
```

## Documentation

- [DESIGN_SYSTEM_OVERVIEW.md](docs/DESIGN_SYSTEM_OVERVIEW.md) - Principles and architecture
- [INSTALLATION.md](docs/INSTALLATION.md) - Detailed setup guide
- [THEMES.md](docs/THEMES.md) - Theme switching and customization
- [TOKENS.md](docs/TOKENS.md) - Design token reference (TODO)
- [COMPONENTS.md](docs/COMPONENTS.md) - Component catalog (TODO)
- [UTILITIES.md](docs/UTILITIES.md) - Utility class reference (TODO)
- [STRUCTURE.md](docs/STRUCTURE.md) - Directory organization

## Why Tertium CSS?

✅ **Universal** - Works with any framework (vanilla HTML, React, Angular, Vue)
✅ **No Build Step** - Pure CSS, use directly in HTML
✅ **Modular** - Choose exactly what you need
✅ **Token-Based** - Single source of truth for all styling
✅ **Theme System** - Runtime theme switching without recompiling
✅ **Accessible** - Built-in focus states, contrast, reduced-motion support
✅ **Responsive** - Mobile-first, breakpoint utilities included
✅ **Extensible** - Easy to customize tokens and add themes

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

CSS custom properties (CSS variables) are supported in all modern browsers.

## Package Exports

```json
{
  "exports": {
    ".": "./dist/tertium.min.css",
    "./themes": "./dist/tertium.themes.min.css",
    "./skeleton": "./dist/tertium.skeleton.min.css",
    "./utilities": "./dist/tertium.utilities.min.css",
    "./components": "./dist/tertium.components.min.css",
    "./variables": "./dist/tertium.variables.min.css"
  }
}
```

## Development

```bash
# Install dependencies
npm install

# Build all bundles
npm run build

# Watch for changes
npm run dev
```

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines on adding new components, tokens, or themes.

## License

MIT

---

**Built for universality.** Use Tertium CSS in any project, any framework, any context. It's your design system, simplified.
