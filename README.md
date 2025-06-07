# Tertium CSS

A lightweight, Tailwind-inspired CSS utility library with zero dependencies.

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tertium-css.git

# Install dependencies
cd tertium-css
bun install

# Build the CSS files
bun run build
```

## Usage

### Complete Library

Include the full library in your HTML:

```html
<link rel="stylesheet" href="dist/tertium.min.css">
```

### Individual Components

Or include only the components you need:

```html
<link rel="stylesheet" href="dist/tertium.containers.min.css">
<link rel="stylesheet" href="dist/tertium.typography.min.css">
<link rel="stylesheet" href="dist/tertium.flexbox.min.css">
```

## Available Files

- **tertium.min.css** - Complete library with all utility classes
- **tertium.containers.min.css** - Container layouts and responsive utilities
- **tertium.typography.min.css** - Text styling, sizes, and weights
- **tertium.spacing.min.css** - Margin and padding utilities
- **tertium.flexbox.min.css** - Flexbox layout utilities
- **tertium.colors.min.css** - Background and text colors
- **tertium.borders.min.css** - Border styling utilities
- **tertium.layout.min.css** - Display, positioning, and sizing utilities
- **tertium.forms.min.css** - Form controls and input styling

## Example

```html
<div class="flex justify-between items-center p-4 bg-gray-100 rounded">
  <h2 class="text-xl font-bold text-blue-500">Hello Tertium</h2>
  <button class="bg-blue-500 text-white p-2 rounded">Click Me</button>
</div>
```

## Why Tertium CSS?

- **Lightweight** - Only 10-15KB minified for the complete library
- **No Build Step** - Use directly in your HTML, no compilation needed
- **Familiar API** - Uses class names similar to Tailwind
- **Modular** - Use only what you need
- **Zero Dependencies** - No JavaScript required

## License

MIT
