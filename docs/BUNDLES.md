# Tertium CSS - Bundle Options

Choose the bundle that matches your needs. All bundles include design tokens.

## Bundle Comparison Matrix

| Feature | Variables | Skeleton | Themes | Components | Utilities | Full |
|---------|-----------|----------|--------|------------|-----------|------|
| **Design Tokens** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Base Reset** | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ |
| **Flex/Grid** | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ |
| **Spacing (m, p, gap)** | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ |
| **Display/Positioning** | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ |
| **Theme Presets** | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ |
| **Typography Utils** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Color Utils** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Border Utils** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Buttons** | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |
| **Cards** | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |
| **Other Components** | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |
| **File Size** | ~2KB | ~8KB | ~4KB | ~6KB | ~12KB | ~22KB |

## Bundle Details

### 1. Variables Only (~2KB)

**Use when:** You want maximum flexibility and plan to build everything custom.

**Include:**
```html
<link rel="stylesheet" href="dist/tertium.variables.min.css">
```

**What you get:**
- CSS custom properties (--spacing-4, --bg-color--primary, etc.)
- No HTML classes at all

**Example usage:**
```css
/* your-styles.css */
.my-card {
  padding: var(--spacing-6);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.my-button {
  padding: var(--spacing-2) var(--spacing-4);
  background: var(--bg-color--primary);
  color: #fff;
  border-radius: var(--radius-md);
}
```

**Best for:** Design system integration, projects with existing styles, strict design control.

---

### 2. Skeleton (~8KB)

**Use when:** You need layout tools (flex, grid, spacing) without full utilities or themes.

**Include:**
```html
<link rel="stylesheet" href="dist/tertium.skeleton.min.css">
```

**What you get:**
- Base CSS reset
- Flexbox utilities (.flex, .gap-4, .justify-center)
- Grid utilities (.grid, .col-span-2)
- Spacing utilities (.p-4, .m-2, .gap-6)
- Positioning utilities (.relative, .absolute, .top-0)
- Display utilities (.hidden, .block, .flex, .grid)

**Example usage:**
```html
<div class="flex gap-4 p-6">
  <div class="flex-1">Flexible content</div>
  <div class="flex-1">Flexible content</div>
</div>

<div class="grid gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

**Best for:** Rapid prototyping, layout-focused projects, minimal CSS footprint.

---

### 3. Themes (~4KB)

**Use when:** You want theme switching and consistent tokens without utilities or components.

**Include:**
```html
<link rel="stylesheet" href="dist/tertium.themes.min.css">
```

**What you get:**
- Design tokens (CSS variables)
- Three theme presets:
  - Dark Purple Gold (default)
  - Light
  - Blue
- Legacy `.theme-light` class support
- System preference detection

**Example usage:**
```html
<html data-theme="light">

<div style="background: var(--bg); color: var(--text);">
  Content automatically themed
</div>
```

**JavaScript theme switching:**
```javascript
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.setAttribute('data-theme', 'light');
document.documentElement.setAttribute('data-theme', 'blue');
```

**Best for:** Projects with custom components, teams sharing a design system, theme switching requirement.

---

### 4. Components (~6KB)

**Use when:** You want pre-styled UI components without utility classes.

**Include:**
```html
<link rel="stylesheet" href="dist/tertium.components.min.css">
```

**What you get:**
- Base CSS reset
- Pre-built components with multiple variants:
  - **Buttons**: primary, secondary, ghost, danger, success (with sizes)
  - **Cards**: elevated, flat, outlined, colored variants
  - **Forms**, **Tables**, **Alerts** (coming soon)
  - **Badges**, **Modals**, **Navigation** (coming soon)

**Example usage:**
```html
<button class="btn btn--primary">Primary Button</button>
<button class="btn btn--danger btn--lg">Large Danger</button>

<div class="card card--primary">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">Card content here</div>
  <div class="card-footer">
    <button class="btn btn--secondary">Cancel</button>
    <button class="btn btn--primary">Save</button>
  </div>
</div>
```

**Best for:** Component-driven development, design consistency, reducing custom CSS.

---

### 5. Utilities (~12KB)

**Use when:** You prefer Tailwind-like utility-first development.

**Include:**
```html
<link rel="stylesheet" href="dist/tertium.utilities.min.css">
```

**What you get:**
- Everything from **Skeleton** plus:
- Typography utilities (.text-lg, .font-bold, .text-center)
- Color utilities (.bg-blue-500, .text-red-600)
- Border utilities (.border, .rounded-lg, .border-red-300)
- All other utility classes

**Example usage:**
```html
<h2 class="text-2xl font-bold text-blue-600 mb-4">
  Heading with utilities
</h2>

<div class="bg-gray-100 p-6 rounded-lg shadow-md">
  <p class="text-gray-700 mb-3">Paragraph with utilities</p>
  <button class="bg-blue-500 text-white px-4 py-2 rounded">
    Action
  </button>
</div>
```

**Best for:** Rapid development, Tailwind-familiar developers, utility-first mindset.

---

### 6. Full Bundle (~22KB)

**Use when:** Building a complete application and want everything included.

**Include:**
```html
<link rel="stylesheet" href="dist/tertium.min.css">
```

**What you get:**
- Everything from all other bundles combined:
- Design tokens
- All three themes
- Skeleton layout utilities
- All utility classes
- Pre-built components

**Example usage:**
```html
<html data-theme="dark">

<div class="flex gap-6 p-8">
  <div class="flex-1">
    <h1 class="text-3xl font-bold text-blue-500 mb-4">
      Page Title
    </h1>

    <div class="card card--primary mb-6">
      <div class="card-header">
        <h2 class="card-title">Section</h2>
      </div>
      <div class="card-body">
        <p class="text-gray-600 mb-4">Content here</p>
        <button class="btn btn--primary">Action</button>
      </div>
    </div>
  </div>

  <aside class="w-64 bg-gray-100 p-6 rounded-lg">
    Sidebar
  </aside>
</div>
```

**Best for:** New projects, complete applications, "just work" simplicity.

---

## Common Combinations

Mix and match bundles for your specific needs:

### Skeleton + Themes
```html
<link rel="stylesheet" href="dist/tertium.skeleton.min.css">
<link rel="stylesheet" href="dist/tertium.themes.min.css">
```
**Result:** Layout utilities + theme switching (~12KB)
**Use for:** Custom components with layout and themes

### Components + Utilities
```html
<link rel="stylesheet" href="dist/tertium.components.min.css">
<link rel="stylesheet" href="dist/tertium.utilities.min.css">
```
**Result:** Pre-built components + utility classes (~18KB)
**Use for:** Mixed component + utility development

### Themes + Skeleton + Custom Components
```html
<link rel="stylesheet" href="dist/tertium.themes.min.css">
<link rel="stylesheet" href="dist/tertium.skeleton.min.css">
<link rel="stylesheet" href="your-components.css">
```
**Result:** Themed layouts with custom components (~12KB + your CSS)
**Use for:** Flexible customization with theme support

### Variables + Custom Everything
```html
<link rel="stylesheet" href="dist/tertium.variables.min.css">
<link rel="stylesheet" href="your-complete-styles.css">
```
**Result:** Consistent tokens everywhere (~2KB + your CSS)
**Use for:** Maximum control, shared token system

---

## Decision Tree

```
Start
├─ Do I want themes?
│  ├─ Yes
│  │  ├─ Do I want layout utilities?
│  │  │  ├─ Yes → Skeleton + Themes
│  │  │  └─ No → Themes only
│  │  └─ Do I need to build custom?
│  │     ├─ Yes → Themes + Variables
│  │     └─ No → Full or Themes + Components
│  │
│  └─ No
│     ├─ Do I prefer components?
│     │  ├─ Yes → Components
│     │  └─ No → Skeleton or Utilities
│     │
│     └─ Do I want maximum flexibility?
│        ├─ Yes → Variables only
│        └─ No → Skeleton or Utilities

End
```

---

## File Size Estimates

Minified and gzipped:

| Bundle | Minified | Gzipped |
|--------|----------|---------|
| Variables | ~2KB | ~0.5KB |
| Skeleton | ~8KB | ~3KB |
| Themes | ~4KB | ~1KB |
| Components | ~6KB | ~2KB |
| Utilities | ~12KB | ~5KB |
| Full | ~22KB | ~8KB |

---

## Migration Path

Start with **Skeleton** for rapid development, then:

1. Extract components → **Skeleton + Components**
2. Add theme switching → **Skeleton + Themes + Components**
3. Complete → **Full Bundle** (or stick with combination)

Or start with **Variables** and grow:

1. Add layout → **Skeleton**
2. Add utilities → **Utilities**
3. Add components → **Components**
4. Add themes → **Themes**
5. Complete → **Full Bundle**

Choose your own path based on project needs!
