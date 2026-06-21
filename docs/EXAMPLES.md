# Tertium CSS - Usage Examples

Practical examples for each bundle type.

## Example 1: Skeleton (Layout-First Prototyping)

**Good for:** Quick prototypes, layout-focused sites, minimal CSS.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skeleton Example</title>
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.skeleton.min.css">
  <style>
    /* Only YOUR custom styles, layout is handled by skeleton */
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .product-card {
      border: 1px solid #e0e0e0;
      background: white;
    }
  </style>
</head>
<body>
  <header class="header p-8">
    <div class="flex justify-between items-center">
      <h1>My Store</h1>
      <nav class="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Cart</a>
      </nav>
    </div>
  </header>

  <main class="p-8">
    <h2 class="mb-6">Featured Products</h2>
    
    <div class="grid gap-6" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
      <div class="product-card p-6">
        <h3 class="mb-2">Product 1</h3>
        <p class="mb-4">Great product description</p>
        <button style="background: #667eea; color: white; padding: 8px 16px; border-radius: 4px;">
          Add to Cart
        </button>
      </div>
      
      <div class="product-card p-6">
        <h3 class="mb-2">Product 2</h3>
        <p class="mb-4">Another great product</p>
        <button style="background: #667eea; color: white; padding: 8px 16px; border-radius: 4px;">
          Add to Cart
        </button>
      </div>
    </div>
  </main>
</body>
</html>
```

**Key points:**
- Use skeleton for `.flex`, `.grid`, `.gap-*`, `.p-*`, `.m-*`
- Write custom CSS for specific component styling
- Minimal total CSS size
- Perfect for prototyping → component extraction

---

## Example 2: Components (Component-Driven Development)

**Good for:** UI libraries, design systems, component consistency.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Components Example</title>
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.components.min.css">
</head>
<body>
  <div style="padding: 40px; background: #f5f5f5;">
    <h1>Button Variants</h1>
    
    <div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
      <button class="btn btn--primary">Primary</button>
      <button class="btn btn--secondary">Secondary</button>
      <button class="btn btn--ghost">Ghost</button>
      <button class="btn btn--danger">Danger</button>
      <button class="btn btn--success">Success</button>
    </div>

    <div style="display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap;">
      <button class="btn btn--primary btn--sm">Small</button>
      <button class="btn btn--primary">Medium</button>
      <button class="btn btn--primary btn--lg">Large</button>
    </div>

    <h1 style="margin-top: 40px;">Card Variants</h1>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-top: 20px;">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Default Card</h3>
        </div>
        <div class="card-body">
          <p>Standard card with default styling</p>
        </div>
        <div class="card-footer">
          <button class="btn btn--secondary">Cancel</button>
          <button class="btn btn--primary">Save</button>
        </div>
      </div>

      <div class="card card--primary">
        <div class="card-header">
          <h3 class="card-title">Primary Accent</h3>
        </div>
        <div class="card-body">
          <p>Card with primary accent border</p>
        </div>
      </div>

      <div class="card card--success">
        <div class="card-header">
          <h3 class="card-title">Success State</h3>
        </div>
        <div class="card-body">
          <p>Green accent for success messages</p>
        </div>
      </div>

      <div class="card card--elevated">
        <div class="card-header">
          <h3 class="card-title">Elevated Card</h3>
        </div>
        <div class="card-body">
          <p>Extra shadow for prominence</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

**Key points:**
- All styling from pre-built components
- Consistent look without custom CSS
- Multiple variants available
- Easy to maintain design system

---

## Example 3: Utilities (Tailwind-Like Development)

**Good for:** Rapid development, utility-first mindset, complex layouts.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Utilities Example</title>
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.utilities.min.css">
</head>
<body>
  <!-- Navigation -->
  <nav class="bg-blue-900 text-white p-6">
    <div class="flex justify-between items-center max-w-6xl mx-auto">
      <h1 class="text-2xl font-bold">Logo</h1>
      <div class="flex gap-8">
        <a href="#" class="hover:text-blue-200 transition">Home</a>
        <a href="#" class="hover:text-blue-200 transition">Features</a>
        <a href="#" class="hover:text-blue-200 transition">Pricing</a>
        <a href="#" class="hover:text-blue-200 transition">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-5xl font-bold mb-4">Welcome to Tertium</h2>
      <p class="text-xl mb-8 text-blue-100">
        Universal CSS design system for any project
      </p>
      <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
        Get Started
      </button>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16">Features</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-8 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
            ⚡
          </div>
          <h3 class="text-xl font-bold mb-2">Fast</h3>
          <p class="text-gray-600">
            Minimal CSS bundles, lightning-fast load times
          </p>
        </div>

        <div class="p-8 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
            🎨
          </div>
          <h3 class="text-xl font-bold mb-2">Themeable</h3>
          <p class="text-gray-600">
            Runtime theme switching with CSS variables
          </p>
        </div>

        <div class="p-8 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
            🔧
          </div>
          <h3 class="text-xl font-bold mb-2">Modular</h3>
          <p class="text-gray-600">
            Choose exactly what you need, nothing more
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-gray-900 text-white py-16 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p class="text-gray-300 mb-8">Choose your bundle and start building</p>
      <div class="flex gap-4 justify-center flex-wrap">
        <button class="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
          Full Bundle
        </button>
        <button class="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition">
          View Docs
        </button>
      </div>
    </div>
  </section>
</body>
</html>
```

**Key points:**
- Utility classes for everything (.flex, .gap-*, .p-*, .bg-*, .text-*)
- No custom CSS needed
- Familiar Tailwind-like naming
- Rapid development speed

---

## Example 4: Themes + Skeleton (Custom Components + Switching)

**Good for:** Shared design system, custom components, theme switching.

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Themes + Skeleton</title>
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.skeleton.min.css">
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.themes.min.css">
  
  <style>
    /* Custom components using tokens */
    body {
      background: var(--bg);
      color: var(--text);
      transition: background-color 0.3s, color 0.3s;
    }

    .custom-button {
      padding: var(--spacing-2) var(--spacing-4);
      background: var(--color-primary);
      color: white;
      border: none;
      border-radius: var(--radius-md);
      cursor: pointer;
      font-size: var(--text-base);
      transition: all var(--duration-fast);
    }

    .custom-button:hover {
      background: var(--color-primary-dark);
      transform: translateY(-2px);
    }

    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-6);
      box-shadow: var(--shadow-md);
    }

    .theme-switcher {
      display: flex;
      gap: var(--spacing-2);
      margin-bottom: var(--spacing-6);
    }

    .theme-switcher button {
      padding: var(--spacing-1) var(--spacing-3);
      background: var(--btn-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      color: var(--text);
      cursor: pointer;
      transition: all var(--duration-fast);
    }

    .theme-switcher button:hover,
    .theme-switcher button.active {
      background: var(--color-primary);
      border-color: var(--color-primary);
      color: white;
    }
  </style>
</head>
<body>
  <div class="p-8">
    <h1 style="color: var(--heading-c1); margin-bottom: var(--spacing-4);">
      Theme Switching Example
    </h1>

    <div class="theme-switcher" style="margin-bottom: var(--spacing-8);">
      <button class="active" onclick="setTheme('dark')">Dark Purple Gold</button>
      <button onclick="setTheme('light')">Light</button>
      <button onclick="setTheme('blue')">Blue</button>
    </div>

    <div class="flex gap-6">
      <div class="flex-1">
        <div class="card">
          <h2 style="color: var(--heading-c1); margin-bottom: var(--spacing-3);">
            Custom Components
          </h2>
          <p style="color: var(--text-dim); margin-bottom: var(--spacing-4);">
            All styling uses design tokens, so they automatically adapt to theme changes.
          </p>
          <button class="custom-button">
            Click Me
          </button>
        </div>
      </div>

      <div class="flex-1">
        <div class="card">
          <h3 style="color: var(--heading-c2); margin-bottom: var(--spacing-2);">
            How It Works
          </h3>
          <ul style="color: var(--text-dim); line-height: var(--line-height-relaxed);">
            <li>✓ Components use CSS variables</li>
            <li>✓ Variables change per theme</li>
            <li>✓ No recompile needed</li>
            <li>✓ Instant theme switching</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <script>
    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme-preference', theme);
      
      // Update active button
      document.querySelectorAll('.theme-switcher button').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
    }

    // Load saved theme on page load
    const savedTheme = localStorage.getItem('theme-preference') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  </script>
</body>
</html>
```

**Key points:**
- Components use `var(--token-name)` for all styling
- Automatic theme adaptation
- Minimal custom CSS
- Runtime theme switching works perfectly

---

## Example 5: Full Bundle (Complete Application)

**Good for:** Everything included, no decisions needed, complete experience.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Full Bundle Example</title>
  <!-- Single import has everything -->
  <link rel="stylesheet" href="node_modules/@tertium/css/dist/tertium.min.css">
</head>
<body>
  <div class="p-8">
    <div class="flex gap-6 mb-8">
      <h1 class="flex-1 text-4xl font-bold">Dashboard</h1>
      <button class="btn btn--primary" onclick="switchTheme()">
        Switch Theme
      </button>
    </div>

    <div class="grid gap-6" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
      <!-- Card 1 -->
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Total Users</h2>
        </div>
        <div class="card-body">
          <p class="text-3xl font-bold text-blue-600 mb-2">1,234</p>
          <p class="text-green-600 text-sm">↑ 12% from last month</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card card--success">
        <div class="card-header">
          <h2 class="card-title">Revenue</h2>
        </div>
        <div class="card-body">
          <p class="text-3xl font-bold text-green-600 mb-2">$45,231</p>
          <p class="text-green-600 text-sm">↑ 8% from last month</p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="card card--warning">
        <div class="card-header">
          <h2 class="card-title">Pending Tasks</h2>
        </div>
        <div class="card-body">
          <p class="text-3xl font-bold text-yellow-600 mb-2">23</p>
          <p class="text-yellow-600 text-sm">Action needed</p>
        </div>
      </div>
    </div>

    <!-- Table Example -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-6">Recent Activity</h2>
      <table class="w-full">
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Login</td>
            <td>2024-01-15</td>
            <td><span class="bg-green-100 text-green-800 px-3 py-1 rounded">Success</span></td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Upload</td>
            <td>2024-01-15</td>
            <td><span class="bg-blue-100 text-blue-800 px-3 py-1 rounded">Processing</span></td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td>Export</td>
            <td>2024-01-14</td>
            <td><span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Completed</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <script>
    let currentTheme = 'dark';
    
    function switchTheme() {
      const themes = ['dark', 'light', 'blue'];
      const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
      document.documentElement.setAttribute('data-theme', nextTheme);
      currentTheme = nextTheme;
    }
  </script>
</body>
</html>
```

**Key points:**
- Single CSS import
- All features available
- Mix components (.btn, .card) with utilities (.flex, .gap-*, .p-*, .bg-*, .text-*)
- Complete dashboard with minimal code

---

## Quick Reference

| Bundle | Best For | CSS Size | Import |
|--------|----------|----------|--------|
| **Variables** | Custom styles, maximum flexibility | ~2KB | `dist/tertium.variables.min.css` |
| **Skeleton** | Layouts, prototyping, minimal CSS | ~8KB | `dist/tertium.skeleton.min.css` |
| **Themes** | Theme switching, custom components | ~4KB | `dist/tertium.themes.min.css` |
| **Components** | Component libraries, design systems | ~6KB | `dist/tertium.components.min.css` |
| **Utilities** | Tailwind-like development, rapid prototyping | ~12KB | `dist/tertium.utilities.min.css` |
| **Full** | Complete applications, no decisions | ~22KB | `dist/tertium.min.css` |

Choose what works for your project!
