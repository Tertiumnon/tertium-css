import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// Exports every theme as a VS Code colour theme (colors only), so a theme made for the framework
// can be published as a VS Code theme. Colours follow the same derivation as the CSS generator.

type HSL = { hue: number; saturation: number; lightness: number };
type ThemeConfig = {
  metadata: { name: string; description: string; darkness: "dark" | "light" };
  "primary-color": { name: string; hsl: HSL };
  "accent-color": { name: string; hsl: HSL };
  variations: Record<string, number>;
  "text-colors": Record<string, string>;
  borders: Record<string, string>;
  backgrounds: Record<string, number>;
};

type Rgba = { r: number; g: number; b: number; a: number };

const hex2 = (value: number): string => Math.round(Math.min(255, Math.max(0, value))).toString(16).padStart(2, "0");

function hslToRgb({ hue, saturation, lightness }: HSL): Rgba {
  const h = (((hue % 360) + 360) % 360) / 360;
  const s = saturation / 100;
  const l = Math.min(100, Math.max(0, lightness)) / 100;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const channel = (t: number): number => {
    const x = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
    if (x < 1 / 6) return p + (q - p) * 6 * x;
    if (x < 1 / 2) return q;
    if (x < 2 / 3) return p + (q - p) * (2 / 3 - x) * 6;
    return p;
  };
  return { r: channel(h + 1 / 3) * 255, g: channel(h) * 255, b: channel(h - 1 / 3) * 255, a: 1 };
}

// Accepts the colour forms used in theme configs: #rgb, #rrggbb, rgb(), rgba(), hsl(), hsla().
function parseColor(value: string): Rgba {
  const text = value.trim();
  const hex = /^#([0-9a-f]{3,8})$/i.exec(text);
  if (hex) {
    let digits = hex[1];
    if (digits.length <= 4) digits = digits.split("").map((c) => c + c).join("");
    const byte = (i: number): number => parseInt(digits.slice(i, i + 2), 16);
    return { r: byte(0), g: byte(2), b: byte(4), a: digits.length === 8 ? byte(6) / 255 : 1 };
  }
  const parts = text.match(/^(rgba?|hsla?)\((.*)\)$/i);
  if (!parts) throw new Error(`Unsupported colour: ${value}`);
  const args = parts[2].split(",").map((part) => parseFloat(part));
  const alpha = args.length > 3 ? args[3] : 1;
  if (parts[1].startsWith("rgb")) return { r: args[0], g: args[1], b: args[2], a: alpha };
  return { ...hslToRgb({ hue: args[0], saturation: args[1], lightness: args[2] }), a: alpha };
}

const toHex = (color: Rgba, alpha = color.a): string => {
  const suffix = alpha < 1 ? hex2(alpha * 255) : "";
  return `#${hex2(color.r)}${hex2(color.g)}${hex2(color.b)}${suffix}`;
};

// A colour from a base HSL with a lightness offset, as the CSS generator does.
const shifted = (base: HSL, offset: number): string => toHex(hslToRgb({ ...base, lightness: base.lightness + offset }));

export function vscodeTheme(config: ThemeConfig): Record<string, unknown> {
  const { metadata, backgrounds, variations } = config;
  const primary = config["primary-color"].hsl;
  const accent = config["accent-color"].hsl;
  const text = parseColor(config["text-colors"].primary);
  const onAccent = toHex(parseColor(config["text-colors"]["on-accent"]));
  const border = toHex(parseColor(config.borders.color));
  const accentBase = shifted(accent, 0);
  const accentLight = shifted(accent, variations["accent-light-offset"]);
  const primaryBase = shifted(primary, 0);
  const page = shifted(primary, backgrounds["page-offset"]);
  const card = shifted(primary, backgrounds["card-offset"]);
  const formInput = shifted(primary, backgrounds["form-input-offset"]);
  const foreground = toHex(text);
  const selection = toHex(parseColor(accentBase), 0.35);

  return {
    name: metadata.description,
    type: metadata.darkness,
    colors: {
      "editor.background": page,
      "editor.foreground": foreground,
      "editor.selectionBackground": selection,
      "editorCursor.foreground": accentBase,
      "editorWidget.background": card,
      "editorWidget.border": border,
      "sideBar.background": card,
      "sideBar.foreground": foreground,
      "sideBar.border": border,
      "activityBar.background": primaryBase,
      "activityBar.foreground": foreground,
      "activityBarBadge.background": accentBase,
      "activityBarBadge.foreground": onAccent,
      "statusBar.background": primaryBase,
      "statusBar.foreground": foreground,
      "statusBar.border": border,
      "titleBar.activeBackground": primaryBase,
      "titleBar.activeForeground": foreground,
      "tab.activeBackground": page,
      "tab.activeForeground": foreground,
      "tab.activeBorderTop": accentBase,
      "tab.inactiveBackground": primaryBase,
      "tab.inactiveForeground": toHex(text, 0.7),
      "tab.border": border,
      "panel.background": page,
      "panel.border": border,
      "panelTitle.activeForeground": accentBase,
      "terminal.background": card,
      "terminal.foreground": foreground,
      "button.background": accentBase,
      "button.foreground": onAccent,
      "button.hoverBackground": accentLight,
      "input.background": formInput,
      "input.foreground": foreground,
      "input.border": border,
      "dropdown.background": card,
      "dropdown.foreground": foreground,
      "dropdown.border": border,
      "list.activeSelectionBackground": formInput,
      "list.activeSelectionForeground": foreground,
      "list.hoverBackground": formInput,
      "menu.background": card,
      "menu.foreground": foreground,
      "menu.border": border,
      focusBorder: accentBase,
      "textLink.foreground": accentLight,
      "textLink.activeForeground": accentBase,
      "badge.background": accentBase,
      "badge.foreground": onAccent,
    },
    tokenColors: [],
  };
}

export async function loadThemeConfigs(themeDir: string): Promise<ThemeConfig[]> {
  const files = readdirSync(themeDir).filter((file) => file.endsWith(".theme.ts"));
  const configs: ThemeConfig[] = [];
  for (const file of files) {
    const { theme } = await import(join(themeDir, file));
    configs.push(theme);
  }
  return configs;
}

if (import.meta.main) {
  const themeDir = resolve("src/themes");
  const outDir = resolve("dist/vscode");
  mkdirSync(outDir, { recursive: true });
  for (const config of await loadThemeConfigs(themeDir)) {
    const file = join(outDir, `${config.metadata.name}.json`);
    writeFileSync(file, `${JSON.stringify(vscodeTheme(config), null, 2)}\n`);
    console.log(`✓ ${file}`);
  }
}
