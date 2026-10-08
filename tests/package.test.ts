import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import pkg from "../package.json";

test("package exports point to built files", () => {
  for (const [name, file] of Object.entries(pkg.exports)) {
    expect(existsSync(resolve(file)), name).toBe(true);
  }
});

test("local CSS imports point to source files", async () => {
  for await (const file of new Bun.Glob("src/**/*.css").scan(".")) {
    const css = await Bun.file(file).text();
    for (const [, imported] of css.matchAll(/@import\s+["'](\.[^"']+)["']/g)) {
      expect(existsSync(resolve(dirname(file), imported)), `${file}: ${imported}`).toBe(true);
    }
  }
});

test("built CSS imports point to published files", async () => {
  for await (const file of new Bun.Glob("dist/**/*.css").scan(".")) {
    const css = await Bun.file(file).text();
    for (const [, imported] of css.matchAll(/@import\s+["'](\.[^"']+)["']/g)) {
      expect(existsSync(resolve(dirname(file), imported)), `${file}: ${imported}`).toBe(true);
    }
  }
});

test("theme files use distinct selectors", async () => {
  const selectors = new Set<string>();
  for await (const file of new Bun.Glob("src/themes/*.theme.css").scan(".")) {
    const match = (await Bun.file(file).text()).match(/\[data-theme="([^"]+)"\]/);
    expect(match, file).not.toBeNull();
    expect(selectors.has(match![1]), file).toBe(false);
    selectors.add(match![1]);
  }
});
