# Tertium CSS - Directory Structure

This document describes the organization of the Tertium CSS design system codebase.

## Root Level

```
tertium-css/
├── src/                 # Source CSS files
├── dist/                # Built and minified outputs
├── docs/                # Documentation
├── examples/            # Example/demo HTML
├── types/               # TypeScript definitions (optional)
├── build.js             # Build script
├── package.json         # NPM package configuration
├── README.md            # Main README
└── .gitignore
```

## Source Structure (`src/`)

### Entry Points

Four main entry points for different use cases:

```
src/
├── index-full.css          # Full bundle (everything)
├── index-themes.css        # Themes + tokens only
├── index-utilities.css     # Utilities + base reset
└── index-variables.css     # Variables/tokens only
```

Build script generates corresponding minified versions:
```
dist/
├── tertium.min.css              # Full bundle (~22KB)
├── tertium.themes.min.css       # Themes only (~4KB)
├── tertium.utilities.min.css    # Utilities only (~12KB)
└── tertium.variables.min.css    # Variables only (~2KB)
```

### Token System (`src/tokens/`)

Design token definitions - the foundation of all styling:

```
tokens/
└── design-tokens.css       # Complete token hierarchy
                             # - Spacing scale
                             # - Typography (fonts, sizes, weights)
                             # - Colors (semantic + utility scales)
                             # - Shadows
                             # - Border radius
                             # - Z-index
                             # - Animation timing
                             # - Breakpoints
                             # - Container widths
```

**Key principle:** All token values defined here as CSS custom properties. No hardcoded values in component or utility files.

### Theme System (`src/themes/`)

Theme presets that override token defaults:

```
themes/
├── dark-purple-gold-theme.css  # Dark Purple Gold theme (default, from dragons-legends.www)
├── light-theme.css             # Light theme (red/orange)
├── blue-theme.css              # Blue theme (professional)
├── overrides.css               # Extension points + legacy support
└── index.css                   # Imports all themes
```

**How themes work:**
- Dark theme defines `:root` variables (default, no selector needed)
- Light/Blue themes use `[data-theme="light"]` / `[data-theme="blue"]` selectors
- Legacy `.theme-light` class supported for backward compatibility
- Each theme is self-contained - changing one doesn't affect others
- Support for system preference detection and high-contrast mode

### Base Styles (`src/base/`)

Foundation CSS - element resets and normalization:

```
base/
└── reset.css              # Normalization + base element styles
                            # - Box-sizing reset
                            # - Typography defaults
                            # - Form element styling
                            # - Link styles
                            # - Focus indicators
```

### Component Styles (`src/components/`)

Pre-built UI component styles:

```
components/
├── buttons.css            # Button variants (primary, secondary, ghost, danger)
├── cards.css              # Card layouts with variants
├── (future) forms.css     # Form elements
├── (future) tables.css    # Table styling
├── (future) alerts.css    # Alert/notification boxes
├── (future) badges.css    # Badge/tag components
├── (future) modals.css    # Modal/dialog styling
├── (future) navigation.css  # Nav bars, breadcrumbs
├── (future) typography.css  # Heading special styles
└── index.css              # Imports all components
```

**Component Philosophy:**
- Components use only token-based values (CSS variables)
- No hardcoded colors, spacing, fonts
- Components are responsive and accessible by default
- Variants through modifier classes (e.g., `.btn--primary`)
- Components can be combined with utilities for flexibility

### Utility Classes (`src/utilities/`)

Tailwind-inspired single-property utility classes:

```
utilities/
├── (references) ../styles/spacing.css      # Margin, padding utilities
├── (references) ../styles/typography.css   # Font size, weight, alignment
├── (references) ../styles/flexbox.css      # Flex layout utilities
├── (references) ../styles/colors.css       # Color utilities (bg, text)
├── (references) ../styles/borders.css      # Border utilities
├── (references) ../styles/layout.css       # Display, positioning
├── (references) ../styles/containers.css   # Container/responsive utilities
├── (references) ../styles/forms.css        # Form element utilities
└── index.css                               # Imports all utilities
```

**Note:** Utilities currently in `styles/` folder. Eventually should be moved to `utilities/` folder and updated to use CSS variables instead of hardcoded values.

### Existing Utilities (`src/styles/`)

Legacy utilities directory (being migrated):

```
styles/
├── spacing.css           # Margin, padding (.m-*, .p-*, .gap-*)
├── typography.css        # Text size, weight, alignment
├── flexbox.css          # Flex utilities
├── colors.css           # Color utilities (hardcoded - to update)
├── borders.css          # Border radius, width
├── layout.css           # Display, visibility, overflow
├── containers.css       # Max-width containers
├── forms.css            # Form element styling
└── styles.css           # Main import file (legacy)
```

## Build System

### Build Configuration (`build.js`)

The build script:
1. Reads from `src/index-*.css` entry points
2. Processes CSS (currently just minification)
3. Outputs to `dist/` directory

**Future enhancements:**
- Autoprefixer for vendor prefixes
- CSS optimization
- Source maps for debugging
- File size metrics
- Optional PurgeCSS for unused utilities

### Output Strategy

Each entry point gets its own output:

| Entry Point | Output | Use Case |
|---|---|---|
| `index-full.css` | `tertium.min.css` | Complete system |
| `index-themes.css` | `tertium.themes.min.css` | Custom components |
| `index-utilities.css` | `tertium.utilities.min.css` | Utility-first development |
| `index-variables.css` | `tertium.variables.min.css` | Maximum flexibility |

## Documentation Structure

```
docs/
├── DESIGN_SYSTEM_OVERVIEW.md      # System overview & vision
├── STRUCTURE.md                   # This file - directory organization
├── INSTALLATION.md                # Setup & usage guide
├── THEMES.md                      # Theme switching & customization
├── TOKENS.md                      # Complete token reference (TODO)
├── COMPONENTS.md                  # Component catalog (TODO)
├── UTILITIES.md                   # Utility class reference (TODO)
├── MIGRATION.md                   # Migration from project-specific CSS (TODO)
└── CONTRIBUTING.md                # Contributing guidelines (TODO)
```

## File Naming Conventions

- **Kebab-case** for filenames: `button-variants.css`
- **CSS class names** follow Tailwind convention: `.btn`, `.btn--primary`, `.text-lg`
- **CSS variables** use semantic naming: `--color-primary`, `--spacing-unit`, not `--margin-1` or `--blue-300`
- **Theme selectors** use data attributes: `[data-theme="light"]`

## Import Order

When building custom bundles, maintain this import order to respect the cascade:

1. **Tokens** (design-tokens.css) - Foundation
2. **Base** (reset.css) - Element defaults
3. **Themes** (dark/light/blue) - Color overrides
4. **Components** (buttons, cards, etc.) - UI building blocks
5. **Utilities** (spacing, flexbox, etc.) - Utility classes

This order ensures:
- Tokens available for all downstream files
- Base styles applied before component styles
- Component styles can be overridden by utilities (if needed)
- Utilities are most specific, highest specificity

## Adding New Components

1. Create new file in `src/components/`: `src/components/mycomponent.css`
2. Add to `src/components/index.css`:
   ```css
   @import './mycomponent.css';
   ```
3. Build: `npm run build`
4. Document in `docs/COMPONENTS.md`
5. Add example HTML in `examples/demo.html`

## Adding New Tokens

1. Edit `src/tokens/design-tokens.css`
2. Add CSS custom property in `:root` block
3. Use in components/utilities: `padding: var(--your-new-token);`
4. Document in `docs/TOKENS.md`
5. Rebuild to update all bundles

## Migration Path: Project-Specific CSS to Design System

For projects like dragons-legends.www:

1. **Phase 1** - Extract themes
   - Import tertium themes
   - Remove local theme definitions
   - Keep custom component CSS

2. **Phase 2** - Use component styles
   - Replace custom buttons with tertium `.btn`
   - Replace custom cards with tertium `.card`
   - Remove redundant CSS

3. **Phase 3** - Use utilities
   - Replace custom spacing with `.p-*`, `.m-*`
   - Replace custom layout with `.flex`, `.gap-*`
   - Remove utility-like CSS rules

4. **Phase 4** - Final cleanup
   - Remove now-redundant project-specific CSS
   - Keep only truly custom/unique styles
   - Leverage tokens for consistency

## Size Targets

Target minified file sizes (with gzip):

- `tertium.min.css`: 22KB (8KB gzipped)
- `tertium.themes.min.css`: 4KB (1KB gzipped)
- `tertium.utilities.min.css`: 12KB (5KB gzipped)
- `tertium.variables.min.css`: 2KB (0.5KB gzipped)

## Performance Considerations

- **CSS variables overhead**: Negligible (native browser feature)
- **Bundle size**: Choose appropriate entry point for your needs
- **Runtime theme switching**: Instant (no recompile needed)
- **Caching**: All bundles can be long-term cached

## Future Enhancements

- [ ] Storybook integration
- [ ] Design tokens JSON export
- [ ] CSS-in-JS support (styled-components, emotion)
- [ ] Figure plugins for design sync
- [ ] Dark mode auto-variants
- [ ] RTL language support
- [ ] CSS Grid templates
- [ ] Animation library
