import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

test("local CSS imports point to source files", async () => {
  for await (const file of new Bun.Glob("src/**/*.css").scan(".")) {
    const css = await Bun.file(file).text();
    for (const [, imported] of css.matchAll(/@import\s+["'](\.[^"']+)["']/g)) {
      expect(existsSync(resolve(dirname(file), imported)), `${file}: ${imported}`).toBe(true);
    }
  }
});
