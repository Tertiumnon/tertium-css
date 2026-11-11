import { expect, test } from "bun:test";
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { theme as workspaceTheme } from "../src/themes/light.white--blue.theme";

const luminance = (hex: string): number => {
  const channels = [1, 3, 5].map((offset): number => {
    const value = Number.parseInt(hex.slice(offset, offset + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
};

test("White Blue workspace text and blue actions meet normal text contrast on white", (): void => {
  for (const color of [workspaceTheme["text-colors"].primary, workspaceTheme["text-colors"].secondary, workspaceTheme.status.info]) {
    expect((luminance("#ffffff") + 0.05) / (luminance(color) + 0.05)).toBeGreaterThanOrEqual(4.5);
  }
});

// Theme contract: every theme defines the same variables, is named the same way, and every
// component only uses variables that a theme (or the shared tokens) define. That is what makes
// a component work under any theme, including a theme exported to another app such as VS Code.

const ROOT = resolve(".");
const THEME_DIR = join(ROOT, "src/themes");
const CONTRACT_DIRS = ["src/components", "src/form"].map((dir) => join(ROOT, dir));

const stripComments = (css: string): string => css.replace(/\/\*[\s\S]*?\*\//g, "");

function cssFiles(dir: string): string[] {
  return readdirSync(dir)
    .filter((file) => file.endsWith(".css"))
    .map((file) => join(dir, file));
}

// Variables declared inside the theme's [data-theme="..."] block.
function themeVariables(css: string): Set<string> {
  const names = new Set<string>();
  for (const match of stripComments(css).matchAll(/^\s*(--[a-z0-9-]+)\s*:/gm)) {
    names.add(match[1]);
  }
  return names;
}

const themeFiles = readdirSync(THEME_DIR)
  .filter((file) => file.endsWith(".theme.css"))
  .map((file) => join(THEME_DIR, file));

const themes = themeFiles.map((file) => {
  const css = readFileSync(file, "utf8");
  const name = /\[data-theme="([^"]+)"\]/.exec(css)?.[1] ?? "";
  return { file, name, variables: themeVariables(css) };
});

test("every theme has a data-theme name in the darkness--primary--accent form", () => {
  for (const theme of themes) {
    expect(theme.name, theme.file).toMatch(/^(dark|light)--[a-z]+--[a-z]+$/);
  }
});

test("every theme defines the same variables", () => {
  const [reference, ...others] = themes;
  for (const theme of others) {
    const missing = [...reference.variables].filter((name) => !theme.variables.has(name));
    const extra = [...theme.variables].filter((name) => !reference.variables.has(name));
    expect({ theme: theme.name, missing, extra }).toEqual({ theme: theme.name, missing: [], extra: [] });
  }
});

test("components and form use only variables that tokens or themes define", () => {
  const tokens = stripComments(readFileSync(join(ROOT, "src/system/tokens.css"), "utf8"));
  const defined = new Set([...themeVariables(tokens), ...themes[0].variables]);
  const unknown: string[] = [];
  for (const dir of CONTRACT_DIRS) {
    for (const file of cssFiles(dir)) {
      const css = stripComments(readFileSync(file, "utf8"));
      // A file may declare variables for its own use (such as --alert-color); those are not theme variables.
      const local = themeVariables(css);
      for (const match of css.matchAll(/var\((--[a-z0-9-]+)/g)) {
        if (!defined.has(match[1]) && !local.has(match[1])) unknown.push(`${file}: ${match[1]}`);
      }
    }
  }
  expect(unknown).toEqual([]);
});

test("components and form contain no colour literals", () => {
  const literal = /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(/;
  const offenders: string[] = [];
  for (const dir of CONTRACT_DIRS) {
    for (const file of cssFiles(dir)) {
      stripComments(readFileSync(file, "utf8"))
        .split("\n")
        .forEach((line, index) => {
          if (literal.test(line)) offenders.push(`${file}:${index + 1}: ${line.trim()}`);
        });
    }
  }
  expect(offenders).toEqual([]);
});
