# Installation & Usage

## Installation

```bash
npm install @tertium/css
```

## Quick Start

### Option 1: Full Bundle (Recommended for New Projects)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Import full bundle with themes + components + utilities -->
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.min.css">
</head>
<body>
  <!-- Theme switcher (add to your navigation) -->
  <button onclick="document.documentElement.setAttribute('data-theme', 'dark')">
    Dark Purple Gold
  </button>
  <button onclick="document.documentElement.setAttribute('data-theme', 'light')">
    Light
  </button>
  <button onclick="document.documentElement.setAttribute('data-theme', 'blue')">
    Blue
  </button>

  <!-- Use component classes -->
  <button class="btn btn--primary">Click me</button>

  <!-- Use utility classes for spacing/layout -->
  <div class="p-4 flex gap-4">
    <div class="flex-1">Half width</div>
    <div class="flex-1">Half width</div>
  </div>
</body>
</html>
```

### Option 2: Themes + Custom Components

If you want to use Tertium's token system but build your own components:

```html
<head>
  <!-- Import only design tokens and theme presets -->
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.themes.min.css">
  <!-- Then import your own component styles -->
  <link rel="stylesheet" href="styles/my-components.css">
</head>
```

In your `styles/my-components.css`:
```css
/* Your components use Tertium's CSS variables */
.my-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  padding: var(--spacing-4);
}

.my-button {
  background: var(--bg-color--primary);
  color: var(--text-on-primary);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
}
```

### Option 3: Utilities Only (Tailwind-like Development)

```html
<head>
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.utilities.min.css">
</head>
<body>
  <!-- Build everything with utilities -->
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-gray-900">Title</h2>
    <p class="text-gray-600 mt-4">Paragraph text</p>
    <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
      Action
    </button>
  </div>
</body>
```

### Option 4: Variables Only (Maximum Flexibility)

```html
<head>
  <!-- Import only CSS custom properties -->
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.variables.min.css">
  <!-- Build everything from scratch -->
  <style>
    body {
      font-family: var(--font-body);
      background: var(--bg);
      color: var(--text);
    }

    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: var(--spacing-4);
    }
  </style>
</head>
```

## Theme Switching

Tertium CSS supports three switching methods:

### Method 1: Data Attribute (Recommended)

```javascript
// Switch theme via data-theme attribute
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.setAttribute('data-theme', 'light');
document.documentElement.setAttribute('data-theme', 'blue');
```

### Method 2: Class Toggle (Legacy Support)

```javascript
// Toggle class on root element
document.documentElement.classList.toggle('theme-light');
```

### Method 3: localStorage Persistence (Angular/React)

Store user preference in localStorage:

```javascript
// On app init
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// On user change
function setTheme(theme) {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}
```

### Angular Integration Example

```typescript
import { Injectable, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private storage = inject(LocalStorageService);

  theme = signal<'dark' | 'light' | 'blue'>(
    (this.storage.get('theme') as any) ?? 'dark'
  );

  constructor() {
    this.apply(this.theme());
  }

  setTheme(newTheme: 'dark' | 'light' | 'blue'): void {
    this.theme.set(newTheme);
    this.storage.set('theme', newTheme);
    this.apply(newTheme);
  }

  private apply(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
```

### React Integration Example

```jsx
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('blue')}>Blue</button>
    </div>
  );
}
```

## Available Design Tokens

### Colors

```css
/* Semantic colors */
--bg-color--primary:        /* Main brand color */
--bg-color--seconday:      /* Secondary accent */
--color-success:        /* Success/positive actions */
--color-warning:        /* Warning/attention needed */
--color-danger:         /* Danger/destructive actions */
--color-neutral:        /* Neutral/gray */

/* Theme-specific backgrounds */
--bg:                   /* Main background */
--bg-card:              /* Card/panel background */
--bar-bg:               /* Navigation bar background */
--btn-bg:               /* Button background */
--btn-bg--hover:         /* Button hover state */

/* Text colors */
--text:                 /* Primary text */
--text-dim:             /* Secondary/dimmed text */
--text-on-primary:      /* Text on primary background */

/* Borders & shadows */
--border:               /* Border color */
--shadow-color:         /* Shadow color for depth */
```

### Spacing Scale

```css
/* Spacing tokens: 0.25rem increments */
--spacing-1:   0.25rem  /* 4px */
--spacing-2:   0.5rem   /* 8px */
--spacing-3:   0.75rem  /* 12px */
--spacing-4:   1rem     /* 16px */
--spacing-6:   1.5rem   /* 24px */
--spacing-8:   2rem     /* 32px */
--spacing-12:  3rem     /* 48px */
--spacing-16:  4rem     /* 64px */
```

### Typography

```css
--font-body:       /* Body text font */
--font-heading:    /* Heading font */
--font-mono:       /* Monospace font */

--text-xs:    0.75rem
--text-sm:    0.875rem
--text-base:  1rem
--text-lg:    1.125rem
--text-xl:    1.25rem
--text-2xl:   1.5rem
--text-3xl:   1.875rem
--text-4xl:   2.25rem

--font-weight-normal:   400
--font-weight-medium:   500
--font-weight-semibold: 600
--font-weight-bold:     700
```

### Border Radius

```css
--radius-sm:    0.25rem   /* 4px */
--radius-md:    0.5rem    /* 8px */
--radius-lg:    0.75rem   /* 12px */
--radius-full:  9999px    /* Fully rounded */
```

### Other Tokens

```css
--shadow-sm:     0 1px 2px var(--shadow-color)
--shadow-md:     0 4px 6px var(--shadow-color)
--shadow-lg:     0 10px 15px var(--shadow-color)

--z-10:   10
--z-20:   20
--z-30:   30
--z-40:   40
--z-50:   50

--duration-fast:    150ms
--duration-normal:  300ms
--duration-slow:    500ms
```

See [TOKENS.md](TOKENS.md) for complete reference.

## Using Utilities

Utility classes follow Tailwind conventions:

```html
<!-- Spacing -->
<div class="p-4">Padding all sides</div>
<div class="px-4">Padding horizontal</div>
<div class="mt-2">Margin top</div>

<!-- Flexbox -->
<div class="flex gap-4">
  <div class="flex-1">First</div>
  <div class="flex-1">Second</div>
</div>

<!-- Text -->
<h1 class="text-3xl font-bold">Heading</h1>
<p class="text-gray-600">Gray text</p>

<!-- Colors -->
<div class="bg-blue-500 text-white p-4">Blue box</div>

<!-- Responsive (Mobile First) -->
<div class="text-sm md:text-base lg:text-lg">
  Responsive text size
</div>

<!-- Display -->
<div class="hidden md:block">Visible only on medium+ screens</div>
```

See [UTILITIES.md](UTILITIES.md) for complete utility reference.

## Using Components

Components are pre-built UI elements:

```html
<!-- Buttons -->
<button class="btn btn--primary">Primary Button</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--danger">Danger</button>

<!-- Cards -->
<div class="card">
  <h3 class="text-lg font-bold">Card Title</h3>
  <p class="text-gray-600 mt-2">Card content here</p>
</div>

<!-- Badges -->
<span class="badge badge--success">Success</span>
<span class="badge badge--warning">Warning</span>

<!-- Alerts -->
<div class="alert alert--info">
  <strong>Info:</strong> This is an informational message
</div>

<!-- Tables -->
<table class="table">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

See [COMPONENTS.md](COMPONENTS.md) for complete component catalog.

## Customization

### Override Theme Colors

```html
<head>
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.themes.min.css">
  <style>
    /* Override theme colors for your project */
    :root {
      --bg-color--primary: #ff6b6b;
      --heading-c1: #ff6b6b;
    }
  </style>
</head>
```

### Create Custom Theme

```css
/* In your custom-theme.css */
[data-theme="custom"] {
  --bg-color--primary: #your-color;
  --bg: #your-bg;
  --text: #your-text;
  /* ... override other tokens */
}
```

Then in HTML:
```html
<html data-theme="custom">
```

See [THEMES.md](THEMES.md) for detailed customization guide.

## File Size Summary

| Bundle | Size | Use Case |
|--------|------|----------|
| `tertium.min.css` | ~22KB | Full bundle (everything) |
| `tertium.themes.min.css` | ~4KB | Tokens + themes only |
| `tertium.utilities.min.css` | ~12KB | Utilities only |
| `tertium.variables.min.css` | ~2KB | Variables only |

All bundles are gzipped and optimized for production.

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

CSS custom properties (CSS variables) are supported in all modern browsers. For older browser support, use PostCSS plugins to convert to static values.

## Need Help?

- See [COMPONENTS.md](COMPONENTS.md) for component examples
- See [UTILITIES.md](UTILITIES.md) for utility reference
- See [MIGRATION.md](MIGRATION.md) for migrating from project-specific styles
- See [THEMES.md](THEMES.md) for theme customization
