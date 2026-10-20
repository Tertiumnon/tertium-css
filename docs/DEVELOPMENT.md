# Development

## File Structure

```
src/
├── system/                  # Design tokens and base styles
├── themes/                  # Four theme presets and generator configs
├── form/                    # Form controls and multiselect behavior
├── components/              # Pre-built components (buttons, cards, navigation)
├── utilities/               # Utility classes (spacing, display, colors, etc.)
└── bundles/                 # Composite bundle entry points

dist/
├── bundles/
│   ├── full.min.css         # Full bundle
│   ├── themes.min.css       # Theme presets
│   ├── form.min.css         # Form controls
│   ├── skeleton.min.css     # Layout essentials
│   ├── utilities.min.css    # All utilities
│   ├── components.min.css   # Components only
│   └── variables.min.css    # Design tokens only
├── themes/
│   ├── dark.purple--gold.theme.min.css
│   ├── dark.violet--gold.theme.min.css
│   ├── dark.blue--white.theme.min.css
│   └── light.white--red.theme.min.css
├── components/              # Individual component files
├── form/                    # Individual form files
├── system/                  # Base styles and tokens
├── utilities/               # Individual utility files
```

```bash
# Install dependencies
npm install

# Build all bundles
npm run build

# Check formatting and run tests
npm run lint
npm test
```

## Contributing

New themes follow the rules in [THEME.md](THEME.md). New components, tokens and utilities go in the `src/` folders listed under File Structure. Run `npm run lint` and `npm test` before committing.
