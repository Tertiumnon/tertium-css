# Tertium CSS Changelog

## [Next Release - Version TBD]

### Release Overview
Design system foundation with backward compatibility - ready to release when version is decided.

**Recommended:** Bump to 0.3.0 (minor version for new features, no breaking changes)

---

## Features Ready for Release (2026-06-21)

### ✨ Major Features Added

#### Design System Foundation
- **Design Tokens** - Complete CSS variable system for spacing, colors, typography, shadows, z-index, timing, breakpoints
- **Theme System** - Three built-in theme presets (Dark Purple Gold, Light, Blue) with runtime switching
- **Pre-built Components** - Buttons, cards with multiple variants
- **Modular Bundles** - Six different consumption models for different project needs

#### New Entry Points
- `dist/tertium.min.css` - Full bundle with everything (backward compatible)
- `dist/tertium.themes.min.css` - Tokens + 3 themes only (~4KB)
- `dist/tertium.skeleton.min.css` - Layout essentials (flex, grid, spacing) (~8KB)
- `dist/tertium.utilities.min.css` - All utilities (~12KB)
- `dist/tertium.components.min.css` - Components only (~6KB)
- `dist/tertium.variables.min.css` - Just tokens (~2KB)

#### NPM Exports
Added `exports` field for selective imports:
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

### 📚 Documentation
- **DESIGN_SYSTEM_OVERVIEW.md** - System architecture, principles, consumption patterns
- **BUNDLES.md** - Detailed comparison matrix and detailed explanation of each bundle
- **EXAMPLES.md** - Five complete working code examples (one for each approach)
- **THEMES.md** - Theme switching guide, customization, accessibility support
- **MIGRATION.md** - Backward compatibility guarantees and gradual adoption strategies
- **INSTALLATION.md** - Setup guide with code samples for each consumption model
- **STRUCTURE.md** - Directory organization and build system explanation

### 🔄 Backward Compatibility

✅ **100% Backward Compatible**
- Existing imports continue to work unchanged
- All existing utility classes preserved
- No breaking changes to API or file structure
- Gradual migration possible

### 📦 Package Updates
- Updated `package.json` description to "Universal design system with tokens, themes, components, and utilities"
- Added new keywords: design-system, tokens, themes, components
- Bumped version from 0.2.1 → 0.3.0

### 🎨 Design System Details

#### Design Tokens
- **Spacing Scale**: 0.25rem to 4rem (--spacing-1 through --spacing-24)
- **Typography**: Font families, sizes (--text-xs to --text-5xl), weights, line heights
- **Colors**: Semantic colors (primary, secondary, success, warning, danger) + utility color scales
- **Shadows**: sm, md, lg, xl with configurable shadow-color
- **Border Radius**: sm, md, lg, xl, full
- **Z-Index**: 10, 20, 30, 40, 50
- **Animation**: Duration (fast, normal, slow) + timing functions

#### Themes
1. **Dark Purple Gold** (default)
   - Primary: Purple #c084fc
   - Secondary: Gold #f0c060
   - Background: Deep purple-black #0d0820
   - Use case: Gaming, fantasy, fantasy interfaces

2. **Light**
   - Primary: Red #d32f2f
   - Secondary: Orange #f57c00
   - Background: White #ffffff
   - Use case: Documentation, content-focused sites

3. **Blue**
   - Primary: Blue #2563eb
   - Background: Dark slate #0f172a
   - Use case: Professional, business applications

#### Components
- **Buttons**: primary, secondary, ghost, danger, success (with sm/lg sizes)
- **Cards**: default, elevated, flat, outlined, primary/success/warning/danger/warning variants
- **Base Reset**: Comprehensive CSS normalization
- **More coming**: Forms, Tables, Alerts, Badges, Modals, Navigation

#### Skeleton Bundle
Essential layout utilities:
- Flexbox (.flex, .gap-*, .justify-*, .items-*, etc.)
- Grid (.grid, .col-span-*, etc.)
- Spacing (.p-*, .m-*, .gap-*, etc.)
- Positioning (.relative, .absolute, .top-0, etc.)
- Display (.block, .flex, .grid, .hidden, etc.)
- Containers (.max-w-*, responsive containers)

### 📁 Directory Structure
```
src/
├── tokens/
│   └── design-tokens.css          # Complete token system
├── themes/
│   ├── dark--purple-gold-theme.css # Default theme
│   ├── light-theme.css
│   ├── blue-theme.css
│   ├── overrides.css              # Customization points
│   └── index.css                  # Theme imports
├── components/
│   ├── buttons.css
│   ├── cards.css
│   └── index.css                  # Component imports
├── base/
│   └── reset.css                  # CSS normalization
├── utilities/ → styles/           # Backward compatible path
│   └── index.css                  # Utility imports
├── styles/                        # Legacy utilities
│   ├── spacing.css
│   ├── typography.css
│   ├── flexbox.css
│   ├── colors.css
│   ├── borders.css
│   ├── layout.css
│   ├── containers.css
│   └── forms.css
├── styles.css                     # Main entry point (backward compatible)
├── index-full.css                 # Full bundle entry
├── index-themes.css               # Themes only entry
├── index-skeleton.css             # Skeleton entry
├── index-utilities.css            # Utilities entry
├── index-components.css           # Components entry
└── index-variables.css            # Variables only entry
```

### 🚀 Getting Started

**For Existing Users:**
No changes needed! Your existing code continues to work.

**For New Features:**
- Use design tokens in custom components: `var(--spacing-4)`, `var(--primary-color)`
- Enable themes: `<html data-theme="light">`
- Use pre-built components: `<button class="btn btn--primary">`
- Choose modular bundles: `dist/tertium.skeleton.min.css`

**For New Projects:**
Choose your bundle:
```html
<!-- Full (easiest) -->
<link rel="stylesheet" href="dist/tertium.min.css">

<!-- Or modular (optimized) -->
<link rel="stylesheet" href="dist/tertium.skeleton.min.css">
<link rel="stylesheet" href="dist/tertium.themes.min.css">
```

### 📖 Documentation Improvements
- **100+ pages of new documentation** covering every aspect
- Five complete working code examples
- Migration guide with zero-to-complete adoption path
- Theme customization guide with code samples
- Bundle comparison matrix
- FAQ section

### 🔮 Future Roadmap
- [ ] Storybook integration
- [ ] Complete component library (tables, forms, alerts, badges, modals)
- [ ] Design tokens JSON export
- [ ] CSS-in-JS support (styled-components, emotion)
- [ ] Figma plugin for design sync
- [ ] Dark mode auto-variants
- [ ] RTL language support
- [ ] CSS Grid templates
- [ ] Animation library

### 📝 Notes
- **Build System:** Still uses existing build.js, enhanced to generate 6 bundles
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge latest 2 versions)
- **CSS Size:** Minimal impact (~2KB for tokens, bundled options available)

---

## [0.2.1] - Previous Versions

See git history for changes to version 0.2.x and earlier.

---

## Backward Compatibility Policy

Tertium CSS is committed to backward compatibility:
- ✅ Existing imports always work
- ✅ Existing class names never removed
- ✅ No breaking changes within major versions
- ✅ New features are opt-in
- ✅ Gradual migration paths provided

If you have concerns about upgrading, see [MIGRATION.md](docs/MIGRATION.md) for detailed guidance.

---

**Questions?** Check our documentation:
- [DESIGN_SYSTEM_OVERVIEW.md](docs/DESIGN_SYSTEM_OVERVIEW.md) - System overview
- [MIGRATION.md](docs/MIGRATION.md) - Upgrade guide
- [BUNDLES.md](docs/BUNDLES.md) - Bundle options
- [EXAMPLES.md](docs/EXAMPLES.md) - Code examples
