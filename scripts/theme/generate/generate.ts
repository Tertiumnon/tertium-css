import { writeFileSync } from "fs";
import { resolve } from "path";

type ThemeConfig = any;

async function generateTheme(themeName: string, cssPath: string): Promise<void> {
  // Import TypeScript theme config
  const tsPath = resolve(process.cwd(), `src/themes/${themeName}.theme.ts`);
  const { theme } = await import(tsPath);

  const { metadata, "primary-color": primary, "accent-color": accent, variations, "text-colors": textColors, borders, shadows, status, backgrounds } = theme;
  const dataTheme = metadata.name;
  const primaryHsl = primary.hsl;
  const accentHsl = accent.hsl;

  // Generate CSS
  let css = `/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */\n`;
  css += `/* ${metadata.description.toUpperCase()} */\n`;
  css += `/* All colors derived from TWO base colors: ${primary.name} (primary      */\n`;
  css += `/* background) and ${accent.name} (secondary accent). */\n`;
  css += `/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */\n\n`;

  css += `[data-theme="${dataTheme}"] {\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* TWO BASE COLORS - Everything derives from these                 */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  // Base colors
  css += `  /* PRIMARY: ${primary.name} background */\n`;
  css += `  --primary-hue: ${primaryHsl.hue};\n`;
  css += `  --primary-sat: ${primaryHsl.saturation}%;\n`;
  css += `  --primary-light: ${primaryHsl.lightness}%;\n\n`;

  css += `  /* ACCENT: ${accent.name} highlight */\n`;
  css += `  --accent-hue: ${accentHsl.hue};\n`;
  css += `  --accent-sat: ${accentHsl.saturation}%;\n`;
  css += `  --accent-light: ${accentHsl.lightness}%;\n\n`;

  // Primary BG variations
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* PRIMARY BG COLOR - Variations                                   */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --primary-color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));\n`;
  css += `  --primary-color--light: hsl(var(--primary-hue), var(--primary-sat), calc(var(--primary-light) + ${variations["primary-light-offset"]}%));\n`;
  css += `  --primary-color--dark: hsl(var(--primary-hue), var(--primary-sat), calc(var(--primary-light) + ${variations["primary-dark-offset"]}%));\n\n`;

  // Accent variations
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* PRIMARY ACCENT COLOR - Variations                               */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --accent-color: hsl(var(--accent-hue), var(--accent-sat), var(--accent-light));\n`;
  css += `  --accent-color--light: hsl(var(--accent-hue), var(--accent-sat), calc(var(--accent-light) + ${variations["accent-light-offset"]}%));\n`;
  css += `  --accent-color--dark: hsl(var(--accent-hue), var(--accent-sat), calc(var(--accent-light) + ${variations["accent-dark-offset"]}%));\n\n`;

  // Contextual backgrounds
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* CONTEXTUAL BACKGROUND COLORS                                    */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --bg-page: hsl(var(--primary-hue), var(--primary-sat), calc(var(--primary-light) + ${backgrounds["page-offset"]}%));\n`;
  css += `  --bg-card: hsl(var(--primary-hue), var(--primary-sat), calc(var(--primary-light) + ${backgrounds["card-offset"]}%));\n`;
  css += `  --bg-form: hsl(var(--primary-hue), var(--primary-sat), calc(var(--primary-light) + ${backgrounds["form-offset"]}%));\n`;
  css += `  --bg-form-input: hsl(var(--primary-hue), var(--primary-sat), calc(var(--primary-light) + ${backgrounds["form-input-offset"]}%));\n`;
  css += `  --bg-button: hsl(var(--accent-hue), var(--accent-sat), calc(var(--accent-light) + ${backgrounds["button-light-offset"]}%));\n`;
  css += `  --bg-button--hover: hsl(var(--accent-hue), var(--accent-sat), calc(var(--accent-light) + ${backgrounds["button-hover-light-offset"]}%));\n\n`;

  // Text colors
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* TEXT COLORS - Derived from primary/accent contrast              */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --text-primary: ${textColors.primary};\n`;
  css += `  --text-secondary: ${textColors.secondary};\n`;
  css += `  --text-on-primary: ${textColors["on-primary"]};\n`;
  css += `  --text-on-accent: ${textColors["on-accent"]};\n`;
  css += `  --text-inverse: ${textColors.inverse};\n\n`;

  // Headings
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* HEADING COLORS - Use accent                                    */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --heading-color: var(--accent-color);\n`;
  css += `  --heading-shadow: hsla(var(--accent-hue), var(--accent-sat), var(--accent-light), 0.25);\n\n`;

  // Links
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* LINK COLORS - Derived from accent                               */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --link-color: hsl(var(--accent-hue), var(--accent-sat), calc(var(--accent-light) + 15%));\n`;
  css += `  --link-visited: hsl(var(--accent-hue), calc(var(--accent-sat) - 20%), calc(var(--accent-light) - 10%));\n`;
  css += `  --link-hover: var(--accent-color);\n\n`;

  // Borders & shadows
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* BORDER & SHADOW COLORS                                           */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --border-color: ${borders.color};\n`;
  css += `  --border-color--strong: ${borders["color-strong"]};\n`;
  css += `  --border-color--light: ${borders["color-light"]};\n`;
  css += `  --shadow-color: ${shadows.color};\n\n`;

  // Status colors
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* STATUS COLORS - Semantic (independent)                          */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --color-success: ${status.success};\n`;
  css += `  --color-warning: ${status.warning};\n`;
  css += `  --color-danger: ${status.danger};\n`;
  css += `  --color-info: ${status.info};\n\n`;

  // Progress & effects
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* PROGRESS & EFFECTS                                               */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --progress-track: hsla(var(--primary-hue), var(--primary-sat), calc(var(--primary-light) + 10%), 0.3);\n`;
  css += `  --glow: hsla(var(--accent-hue), var(--accent-sat), var(--accent-light), 0.2);\n\n`;

  // Gradients
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* BACKGROUND GRADIENTS                                             */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --gradient-page: linear-gradient(180deg, var(--bg-page), var(--bg-card));\n`;
  css += `  --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--primary-color--light));\n`;
  css += `  --gradient-radial: radial-gradient(circle at center, var(--primary-color--light), var(--primary-color--dark));\n\n`;

  // Navbar & menu colors
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n`;
  css += `  /* NAVBAR & MENU BACKGROUND - For dark themes                        */\n`;
  css += `  /* ═══════════════════════════════════════════════════════════════ */\n\n`;

  css += `  --navbar-bg: var(--primary-color);\n`;
  css += `  --menu-bg: var(--bg-card);\n`;
  css += `  --menu-text: var(--text-on-primary);\n`;

  css += `}\n\n`;

  // Body styling
  css += `/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */\n`;
  css += `/* BODY STYLING                                                         */\n`;
  css += `/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */\n\n`;

  css += `[data-theme="${dataTheme}"] body {\n`;
  css += `  background: var(--bg-page);\n`;
  css += `  color: var(--text-primary);\n`;
  css += `  position: relative;\n`;
  css += `}\n`;

  // Write CSS file
  writeFileSync(cssPath, css);
  console.log(`✓ Generated ${cssPath}`);
}

// Main
const themeName = process.argv[2] || "dark.purple--gold";
const cssPath = resolve(process.cwd(), `src/themes/${themeName}.theme.css`);

try {
  await generateTheme(themeName, cssPath);
  console.log(`Theme generated successfully!`);
} catch (error) {
  console.error(`Error generating theme:`, error);
  process.exit(1);
}
