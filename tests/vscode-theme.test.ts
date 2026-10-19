import { expect, test } from "bun:test";
import { resolve } from "node:path";
import { loadThemeConfigs, vscodeTheme } from "../scripts/theme/vscode/vscode";

// Every theme must export as a valid VS Code colour theme with the workbench keys that matter most.
const REQUIRED_KEYS = ["editor.background", "editor.foreground", "button.background", "sideBar.background", "focusBorder"];

test("every theme exports a VS Code colour theme with valid colours", async () => {
  const configs = await loadThemeConfigs(resolve("src/themes"));
  expect(configs.length).toBeGreaterThan(0);
  for (const config of configs) {
    const theme = vscodeTheme(config) as { type: string; colors: Record<string, string> };
    expect(["dark", "light"]).toContain(theme.type);
    for (const key of REQUIRED_KEYS) {
      expect(theme.colors[key], `${config.metadata.name} ${key}`).toBeDefined();
    }
    for (const [key, value] of Object.entries(theme.colors)) {
      expect(value, `${config.metadata.name} ${key}`).toMatch(/^#[0-9a-f]{6}([0-9a-f]{2})?$/i);
    }
  }
});

