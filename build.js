import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'fs';
import { join, basename } from 'path';

// Clear dist directory if it exists, then recreate it
if (existsSync('./dist')) {
  rmSync('./dist', { recursive: true, force: true });
}
mkdirSync('./dist');

// Minify CSS
function minifyCss(css) {
  return css
    .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
    .replace(/ {2,}/g, ' ')
    .replace(/ ([{:}]) /g, '$1')
    .replace(/([;,]) /g, '$1')
    .replace(/ !/g, '!');
}

// Process main styles.css file
const mainCss = readFileSync('./src/styles.css', 'utf8');
let processedCss = mainCss.replace(/@import ['"](.+?)['"];/g, (match, importPath) => {
  const fullPath = join('./src', importPath);
  try {
    return readFileSync(fullPath, 'utf8');
  } catch (err) {
    console.error(`Error reading import: ${fullPath}`, err);
    return '';
  }
});

// Write minified CSS for main file
writeFileSync('./dist/tertium.min.css', minifyCss(processedCss));
console.log('Built: dist/tertium.min.css');

// Process individual component files
const styleFiles = readdirSync('./src/styles');
styleFiles.forEach(file => {
  if (file.endsWith('.css')) {
    const content = readFileSync(`./src/styles/${file}`, 'utf8');
    const baseName = basename(file, '.css');
    
    writeFileSync(`./dist/tertium.${baseName}.min.css`, minifyCss(content));
    console.log(`Built: dist/tertium.${baseName}.min.css`);
  }
});