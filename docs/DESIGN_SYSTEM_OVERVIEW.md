# Tertium CSS - Universal Design System

## Vision

Tertium CSS is a universal, framework-agnostic design system that provides:
- **Composable theme system** with CSS variables for runtime theme switching
- **Reusable component styles** (buttons, cards, tables, forms, etc.)
- **Scalable utility classes** following Tailwind conventions
- **Design tokens** for consistent spacing, colors, typography across projects

The goal is to create a single source of truth for styling that any project can consume flexibly—whether you need just CSS variables, full components, or everything bundled together.

## Key Principles

1. **Universal** - Pure CSS with no build dependencies; works in any project (vanilla HTML, React, Angular, Vue)
2. **Composable** - Import what you need (themes-only, utilities-only, full bundle, or custom combinations)
3. **Token-Based** - All styling derives from design tokens, enabling consistency and easy customization
4. **Theme-Switchable** - Runtime theme switching via CSS custom properties (no build step required)
5. **Semantic** - Variable names describe purpose, not appearance (--spacing-unit not --margin-1)
6. **Utility-First** - Components built from utilities, not monolithic CSS classes
7. **Accessible** - Built-in focus states, reduced-motion support, proper contrast ratios
8. **Responsive** - Mobile-first approach with sm:, md:, lg:, xl: responsive prefixes

## Directory Structure

```
tertium-css/
├── src/
│   ├── tokens/                      # Design token definitions
│   │   └── design-tokens.css        # Complete token hierarchy
│   │
│   ├── themes/                      # Theme presets
│   │   ├── dark-theme.css           # Dark theme (default)
│   │   ├── light-theme.css          # Light theme
│   │   ├── blue-theme.css           # Blue theme variant
│   │   ├── overrides.css            # Extension points for custom themes
│   │   └── index.css                # Import all themes
│   │
│   ├── components/                  # Component styles
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── tables.css
│   │   ├── forms.css
│   │   ├── alerts.css
│   │   ├── badges.css
│   │   ├── modals.css
│   │   ├── navigation.css
│   │   ├── typography.css
│   │   └── index.css
│   │
│   ├── utilities/                   # Utility classes
│   │   ├── spacing.css
│   │   ├── flexbox.css
│   │   ├── grid.css
│   │   ├── text.css
│   │   ├── sizing.css
│   │   ├── positioning.css
│   │   ├── visibility.css
│   │   ├── containers.css
│   │   ├── aspect-ratio.css
│   │   ├── animation.css
│   │   └── index.css
│   │
│   ├── base/                        # Base resets and defaults
│   │   └── reset.css
│   │
│   ├── index-full.css               # Full bundle entry point
│   ├── index-themes.css             # Themes-only entry point
│   ├── index-utilities.css          # Utilities-only entry point
│   └── index-variables.css          # Variables-only entry point
│
├── dist/                            # Built and minified outputs
│   ├── tertium.min.css              # Full bundle
│   ├── tertium.themes.min.css       # Themes only
│   ├── tertium.utilities.min.css    # Utilities only
│   ├── tertium.variables.min.css    # Variables only
│   └── tertium.*.min.css            # Individual components
│
├── types/
│   └── index.d.ts                   # TypeScript definitions
│
├── docs/                            # Documentation
│   ├── DESIGN_SYSTEM_OVERVIEW.md    # This file
│   ├── TOKENS.md                    # Design token reference
│   ├── THEMES.md                    # Theme guide & customization
│   ├── COMPONENTS.md                # Component catalog
│   ├── UTILITIES.md                 # Utility class reference
│   ├── MIGRATION.md                 # Migration from project-specific styles
│   ├── CONTRIBUTING.md              # Contributing guidelines
│   └── INSTALLATION.md              # Setup & usage patterns
│
├── examples/
│   ├── demo.html                    # Component showcase with theme switcher
│   └── styles.css                   # Demo-specific styles
│
└── build.js                         # Build script with multiple output targets
```

## How It Works

### Design Tokens
Design tokens are the single source of truth. They define:
- Color palette (primary, secondary, success, warning, danger, neutral)
- Spacing scale (0.25rem to 4rem increments)
- Typography (font families, sizes, weights, line-heights)
- Border radius (sm, md, lg, full)
- Shadows and elevation levels
- Z-index scale
- Opacity values
- Animation timing

All values are defined as CSS custom properties in `/src/tokens/design-tokens.css`.

### Themes
Themes are configurations of tokens for different visual presentations. Each theme defines root-level CSS variables that override token defaults.

**Built-in themes:**
- **Dark Purple Gold** (default) - Purple (#c084fc) + Gold (#f0c060), dark background (extracted from dragons-legends.www)
- **Light** - Red (#d32f2f) + Orange (#f57c00), light background

Themes are activated via:
```html
<!-- Use data-theme attribute (recommended) -->
<html data-theme="dark">

<!-- Or toggle class on root -->
<html class="theme-light">
```

### Components
Components are pre-built, styled UI elements that use tokens and utilities. Examples:
- `.btn` (primary, secondary, ghost, danger variants)
- `.card` (with hover effects, shadows)
- `.table` (with striped rows, hover states)
- `.badge` (inline labels with variants)
- `.alert` (success, warning, error, info)

Components use only token-based values—no hardcoded colors or spacing.

### Utilities
Utilities are single-property CSS classes for rapid styling:
- `.p-4` (padding using spacing token)
- `.flex` (flexbox display)
- `.text-lg` (font size using typography token)
- `.bg-primary` (background using token)
- `.md:hidden` (responsive visibility)

Utilities follow Tailwind naming conventions for familiarity.

## Consumption Patterns

### Pattern 1: Full Bundle (Everything)
```html
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.min.css">
```
Includes: tokens + themes + skeleton + utilities + components
- **Use when:** Building a complete application from scratch
- **File size:** ~22KB
- **Benefit:** No thinking about what to include

### Pattern 2: Themes Only (CSS Variables)
```html
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.themes.min.css">
```
Includes: design tokens + 3 theme presets
- **Use when:** Building custom components on top of a consistent token system
- **File size:** ~4KB
- **Benefit:** Lightweight, extensible, custom components use same variables

### Pattern 3: Skeleton (Layout Essentials)
```html
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.skeleton.min.css">
```
Includes: design tokens + base reset + flex/grid/spacing/positioning utilities
- **Use when:** Building layouts quickly without full utility library
- **File size:** ~8KB
- **Benefit:** Rapid prototyping, minimal CSS footprint, essential layout tools

### Pattern 4: Utilities Only (No Components)
```html
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.utilities.min.css">
```
Includes: all utility classes + base reset
- **Use when:** You prefer utility-first development (Tailwind-like)
- **File size:** ~12KB
- **Benefit:** Familiar class naming, rapid styling

### Pattern 5: Components Only
```html
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.components.min.css">
```
Includes: design tokens + base reset + pre-built components
- **Use when:** You want pre-styled components without utilities
- **File size:** ~6KB
- **Benefit:** Quick component library without utility overhead

### Pattern 6: Variables Only (Custom Build)
```html
<link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.variables.min.css">
<!-- Then import your own component styles that reference the variables -->
<link rel="stylesheet" href="styles/my-components.css">
```
Includes: only design tokens
- **Use when:** You want to build everything custom but use consistent tokens
- **File size:** ~2KB
- **Benefit:** Maximum flexibility, minimal CSS

### Pattern 5: Import Source Files (ESM/Asset Pipeline)
```css
/* In your styles.css */
@import '@tertium/css/src/themes.css';     /* Just themes */
@import '@tertium/css/src/utilities.css';  /* Just utilities */
@import '@tertium/css/src/components.css'; /* Just components */
```
- **Use when:** You have a build pipeline that can process @import
- **File size:** Same as above (processed by your build tool)
- **Benefit:** Tree-shake and minify with your own tooling

## Design Decision: Why CSS Variables Over SASS?

1. **Runtime theme switching** - No build step required to change themes
2. **Universal compatibility** - Works in any project (no SASS compiler needed)
3. **Smaller delivery** - Pre-compiled CSS is smaller than SASS source
4. **Browser native** - Cascading and specificity rules are consistent
5. **Legacy support** - Works in older projects without modern build tools

The tradeoff: CSS variables are slightly more verbose than SASS functions/mixins, but the flexibility is worth it.

## Roadmap

### Phase 1: Foundation (Current)
- [x] Design token system
- [x] Theme presets (dark, light, blue)
- [x] Base component styles (buttons, cards, tables, forms)
- [x] Utility class organization
- [ ] Build system for multiple outputs

### Phase 2: Polish & Documentation (Next)
- [ ] Complete component catalog
- [ ] Full documentation with examples
- [ ] TypeScript definitions
- [ ] Example/demo project
- [ ] Migration guide from project-specific styles

### Phase 3: Integration & Testing
- [ ] Integration tests for theme switching
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] dragons-legends.www migration

### Phase 4: Enhancement
- [ ] Storybook integration
- [ ] Design tokens JSON export
- [ ] Dark mode auto-variants
- [ ] RTL support
- [ ] CSS Grid templates

## Integration with dragons-legends.www

The dragons-legends.www project can gradually adopt Tertium CSS:

1. **Phase 1**: Import tertium themes, deprecate local `styles.css` theme definitions
2. **Phase 2**: Use tertium component styles for tables, buttons, forms
3. **Phase 3**: Replace custom utility-like CSS with tertium utilities
4. **Phase 4**: Remove redundant component CSS

This happens incrementally—no breaking changes needed.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding new components, tokens, or themes.

## Related Documentation

- [TOKENS.md](TOKENS.md) - Complete design token reference
- [THEMES.md](THEMES.md) - Theme switching and customization
- [COMPONENTS.md](COMPONENTS.md) - Component catalog with examples
- [UTILITIES.md](UTILITIES.md) - Utility class reference
- [MIGRATION.md](MIGRATION.md) - Migrating from project-specific styles
- [INSTALLATION.md](INSTALLATION.md) - Setup and usage patterns
