#!/usr/bin/env bun
import { join, basename, dirname } from 'path';
import { readdirSync } from 'fs';

// Clear dist directory if it exists, then recreate it
const distDir = './dist';
const dirs = ['dist', 'dist/bundles', 'dist/themes', 'dist/utilities', 'dist/components'];

for (const dir of dirs) {
  try {
    await Bun.$`rm -rf ${dir}`.quiet();
  } catch {}
  if (dir !== 'dist') {
    await Bun.$`mkdir -p ${dir}`.quiet();
  } else {
    await Bun.$`mkdir -p ${dir}`.quiet();
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// GENERATE THEMES FROM YAML SOURCE FILES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log('✨ Generating themes from TypeScript config...\n');

const themes = ['dark.navy--cyan', 'dark.purple--gold', 'light.white--red'];

for (const theme of themes) {
  try {
    const proc = await Bun.$`bun scripts/theme/generate/generate.ts ${theme}`;
    console.log(`✓ Generated ${theme}`);
  } catch (err) {
    console.error(`✗ Error generating theme ${theme}:`, err);
  }
}

console.log('');


// Minify CSS
function minifyCss(css: string): string {
  return css
    .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
    .replace(/ {2,}/g, ' ')
    .replace(/ ([{:}]) /g, '$1')
    .replace(/([;,]) /g, '$1')
    .replace(/ !/g, '!');
}

// Recursively resolve all @import statements
async function resolveImports(filePath: string, visited = new Set<string>()): Promise<string> {
  if (visited.has(filePath)) {
    return ''; // Prevent circular imports
  }
  visited.add(filePath);

  try {
    const file = Bun.file(filePath);
    let content = await file.text();

    // Find all @import statements
    const importRegex = /@import ['"](.+?)['"];/g;
    let match;

    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      const fullPath = join(dirname(filePath), importPath);

      try {
        const resolved = await resolveImports(fullPath, visited);
        content = content.replace(match[0], resolved);
      } catch (err) {
        console.error(`Error reading import: ${fullPath}`, err);
      }
    }

    return content;
  } catch (err) {
    console.error(`Error reading file: ${filePath}`, err);
    return '';
  }
}

// Helper to write both .css and .min.css versions
async function writeBundle(name: string, content: string, dir = './dist'): Promise<void> {
  const cssPath = `${dir}/${name}.css`;
  const minPath = `${dir}/${name}.min.css`;
  const minified = minifyCss(content);

  await Bun.write(cssPath, content);
  await Bun.write(minPath, minified);

  const cssKb = (content.length / 1024).toFixed(1);
  const minKb = (minified.length / 1024).toFixed(1);
  console.log(`✓ ${cssPath} (${cssKb}KB)`);
  console.log(`✓ ${minPath} (${minKb}KB)`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BUILD BUNDLES (main entry points)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log('\n📦 Building main bundles...\n');

const bundles = [
  { name: 'full', src: './src/bundles/full.css', desc: 'Full bundle (all themes, components, utilities)' },
  { name: 'skeleton', src: './src/bundles/skeleton.css', desc: 'Skeleton (layout essentials)' },
  { name: 'utilities', src: './src/bundles/utilities.css', desc: 'All utilities' },
  { name: 'components', src: './src/bundles/components.css', desc: 'Components only' },
  { name: 'variables', src: './src/bundles/variables.css', desc: 'Design tokens only' },
];

for (const bundle of bundles) {
  try {
    const content = await resolveImports(bundle.src);
    await writeBundle(bundle.name, content, './dist/bundles');
    console.log(`  └─ ${bundle.desc}\n`);
  } catch (err) {
    console.error(`✗ Error building ${bundle.name}:`, err);
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BUILD INDIVIDUAL THEME FILES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log('🎨 Building theme files...\n');

try {
  const themeDir = './src/themes';
  const files = readdirSync(themeDir).filter(f => f.endsWith('.theme.css'));

  for (const fileName of files) {
    const file = join(themeDir, fileName);
    const content = await Bun.file(file).text();
    const baseName = basename(file, '.css');
    await writeBundle(baseName, content, './dist/themes');
  }
} catch (err) {
  console.error('Error building theme files:', err);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BUILD INDIVIDUAL UTILITY FILES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log('🎯 Building individual utility files...\n');

try {
  const utilDir = './src/utilities';
  const files = readdirSync(utilDir).filter(f => f.endsWith('.css'));

  for (const fileName of files) {
    const file = join(utilDir, fileName);
    const content = await Bun.file(file).text();
    const baseName = basename(file, '.css');
    await writeBundle(baseName, content, './dist/utilities');
  }
} catch (err) {
  console.error('Error building utility files:', err);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BUILD INDIVIDUAL COMPONENT FILES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log('🧩 Building individual component files...\n');

try {
  const componentDir = './src/components';
  const files = readdirSync(componentDir).filter(f => f.endsWith('.css'));

  for (const fileName of files) {
    const file = join(componentDir, fileName);
    const content = await Bun.file(file).text();
    const baseName = basename(file, '.css');
    await writeBundle(baseName, content, './dist/components');
  }
} catch (err) {
  console.error('Error building component files:', err);
}
