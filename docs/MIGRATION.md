# Migration Guide - Tertium CSS v0.2 → v0.3

## ✅ Backward Compatibility

**Great news:** Tertium CSS 0.3 is **100% backward compatible** with 0.2. Existing projects continue to work without any changes.

Your existing imports still work exactly the same:

```html
<!-- Still works! Nothing to change -->
<link rel="stylesheet" href="dist/tertium.min.css">
```

## What's New in 0.3

### 1. Design Tokens (CSS Variables)
Pre-defined variables for spacing, colors, typography, shadows, etc.

```css
var(--spacing-4)      /* 16px */
var(--color-primary)  /* Primary color */
var(--text-base)      /* Base font size */
```

### 2. Three Built-in Themes
- **Dark Purple Gold** - Purple (#c084fc) + Gold (#f0c060)
- **Light** - Red (#d32f2f) + Orange (#f57c00)
- **Blue** - Professional blue palette

Runtime theme switching:
```html
<html data-theme="light">
```

### 3. Pre-built Components
- Buttons (5 variants)
- Cards (6 variants)
- Forms, Tables (coming soon)

### 4. Modular Entry Points
Import only what you need instead of everything.

## Migration Strategies

Choose how aggressively to adopt the new system:

### Strategy 1: Keep Everything (Recommended)
No migration needed! Continue using existing utilities. The new features are available if you want them later.

```html
<link rel="stylesheet" href="dist/tertium.min.css">
```

**Pros:**
- Zero breaking changes
- Access to new tokens/themes when ready
- Components available for use
- Gradual adoption possible

**Cons:**
- Larger CSS bundle (includes everything)
- May not use new features initially

---

### Strategy 2: Adopt Tokens & Themes Gradually

Start using tokens in new components while keeping existing utilities.

**Step 1:** Reference design tokens in your custom components
```css
/* new-component.css */
.my-card {
  padding: var(--spacing-6);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

**Step 2:** Enable theme switching
```html
<html data-theme="dark">
```

**Step 3:** Replace custom utilities gradually
As you update components, use tertium utilities instead of custom CSS.

**Timeline:** Weeks/months - no rush, work at your pace.

---

### Strategy 3: Clean Split (Aggressive)

For greenfield components or new features, use the modular bundles instead of the full bundle.

```html
<!-- Old project: Keep using full bundle -->
<link rel="stylesheet" href="dist/tertium.min.css">

<!-- New project: Use skeleton only -->
<link rel="stylesheet" href="dist/tertium.skeleton.min.css">

<!-- New project: Use themes for custom components -->
<link rel="stylesheet" href="dist/tertium.themes.min.css">
```

**Pros:**
- Smaller CSS bundles for new projects
- Clear separation: old vs. new
- Faster adoption for new work

**Cons:**
- Multiple CSS files to manage
- May create maintenance burden if split long-term

---

## Recommended Path: Gradual Adoption

### Phase 1 (Week 1): Learn the System
1. Read [DESIGN_SYSTEM_OVERVIEW.md](DESIGN_SYSTEM_OVERVIEW.md)
2. Review [BUNDLES.md](BUNDLES.md) to understand options
3. Check [EXAMPLES.md](EXAMPLES.md) for code samples

**Action:** No code changes needed. Just explore.

### Phase 2 (Weeks 2-4): Use Tokens in New Code
1. Build new components using `var(--spacing-*)`, `var(--color-*)`
2. No need to change existing components
3. Test that theme switching works (Dark Purple Gold, Light, Blue)

```css
/* New components use tokens */
.hero {
  padding: var(--spacing-12);
  background: var(--color-primary);
  color: white;
}
```

### Phase 3 (Months 2-3): Replace Components
As you refactor components, use tertium components instead of custom CSS.

```html
<!-- Old way -->
<div class="my-card">...</div>

<!-- New way -->
<div class="card card--primary">...</div>
```

### Phase 4 (Months 3+): Consider Modular Bundles
If you've adopted most components and utilities:

Option A: Keep using full bundle (simplest)
```html
<link rel="stylesheet" href="dist/tertium.min.css">
```

Option B: Switch to modular bundles (smaller CSS)
```html
<link rel="stylesheet" href="dist/tertium.themes.min.css">
<link rel="stylesheet" href="dist/tertium.utilities.min.css">
<link rel="stylesheet" href="dist/tertium.components.min.css">
```

---

## Specific Project: dragons-legends.www

Dragons Legends Website can adopt the design system incrementally:

### Current State
- Custom dark/light theme in `src/styles.css`
- Project-specific component CSS
- Existing utility classes

### Phase 1: Extract Themes (Week 1)
```html
<!-- Import tertium themes instead of custom theme CSS -->
<link rel="stylesheet" href="@tertium/css">
```

- Remove custom `--gold`, `--purple`, `--text` definitions
- Keep existing component CSS
- Test theme switching with new presets

### Phase 2: Use Components (Weeks 2-4)
- Replace tables with tertium table styles
- Use tertium buttons instead of custom button CSS
- Add tertium cards for layout sections

### Phase 3: Use Utilities (Weeks 4-8)
- Replace custom spacing CSS with `.p-*`, `.m-*`
- Use `.flex`, `.grid` utilities
- Remove redundant utility-like CSS

### Phase 4: Cleanup (Weeks 8+)
- Archive custom component CSS that's now in tertium
- Keep only truly unique custom styles
- Consistent styling across the site

---

## Breaking Changes

**None!** Version 0.3 is fully backward compatible.

Existing:
- ✅ Utility classes work exactly the same
- ✅ File structure unchanged
- ✅ Import paths work unchanged
- ✅ All existing CSS valid

New:
- ✨ Can use design tokens
- ✨ Can use themes
- ✨ Can use components
- ✨ Can use modular bundles

---

## FAQ

### Q: Do I have to use the new design system?
**A:** No. Existing projects work unchanged. New features are optional.

### Q: Will my CSS file size increase?
**A:** Only if you use new features. The main bundle includes everything, but you can switch to modular bundles to reduce size.

### Q: Can I use themes without components?
**A:** Yes! Just import `dist/tertium.themes.min.css` and build your own components using the tokens.

### Q: How do I switch themes?
**A:** Add `data-theme` attribute to `<html>`:
```html
<html data-theme="light">
```

Or with JavaScript:
```javascript
document.documentElement.setAttribute('data-theme', 'blue');
```

### Q: Should I migrate all at once or gradually?
**A:** Gradually is recommended. You can adopt new features as you refactor components, without rushing.

### Q: Can I create custom themes?
**A:** Yes! See [THEMES.md](THEMES.md) for customization guide.

### Q: What if I only want certain utilities?
**A:** Use `dist/tertium.skeleton.min.css` for layout essentials, or `dist/tertium.utilities.min.css` for all utilities.

---

## Need Help?

- **Architecture questions:** See [DESIGN_SYSTEM_OVERVIEW.md](DESIGN_SYSTEM_OVERVIEW.md)
- **Bundle options:** See [BUNDLES.md](BUNDLES.md)
- **Code examples:** See [EXAMPLES.md](EXAMPLES.md)
- **Theme customization:** See [THEMES.md](THEMES.md)
- **Complete token reference:** See [TOKENS.md](TOKENS.md)

**Summary:** Upgrade at your own pace. No urgency, no breaking changes. Welcome to the new era of Tertium CSS! 🎉
