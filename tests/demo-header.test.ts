import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const headerScript = readFileSync("demo/header.js", "utf8");

test("demo pages render the same header with the current page selected", () => {
  for (const page of ["index", "movies", "about", "contact"]) {
    const html = readFileSync(`demo/${page}.html`, "utf8");
    expect(html.match(/id="site-header"/g)).toHaveLength(1);
    expect(html.match(/src="header.js"/g)).toHaveLength(1);
    expect(html).toMatch(
      /<nav\s+id="site-header"\s+class="navbar navbar--responsive"/,
    );
    expect(html).toMatch(/<main class="container-xl page-content">/);
    expect(html).toMatch(
      /<footer class="page-footer">[\s\S]*?<div class="container-xl flex flex-wrap justify-between gap-4">/,
    );

    const header = { innerHTML: "" };
    runInNewContext(headerScript, {
      location: { pathname: `/demo/${page}.html` },
      document: { querySelector: () => header },
    });
    expect(header.innerHTML.match(/aria-current="page"/g)).toHaveLength(1);
    expect(header.innerHTML).toContain('<div class="container-xl">');
    expect(header.innerHTML).toContain(`href="${page}.html"`);
    expect(header.innerHTML).toMatch(
      new RegExp(`href="${page}\\.html"[^>]*aria-current="page"`),
    );
    for (const language of ["en", "de", "fr", "ru"])
      expect(header.innerHTML).toContain(`value="${language}"`);
    expect(header.innerHTML.match(/class="profile-menu--option" type="button" data-theme-choice=/g)).toHaveLength(4);
    expect(header.innerHTML).not.toMatch(/<button[^>]*\sdata-theme=/);
  }
});

test("demo markup uses framework classes without page styles", () => {
  expect(readFileSync("demo/site.js", "utf8")).not.toMatch(/\.style\./);
  const classes = new Set(
    [
      ...readFileSync("dist/bundles/full.css", "utf8").matchAll(
        /\.([a-zA-Z][\w-]*)/g,
      ),
    ].map(([, name]) => name),
  );

  for (const page of ["index", "movies", "about", "contact"]) {
    const html = readFileSync(`demo/${page}.html`, "utf8").replace(
      /<pre\b[^>]*>[\s\S]*?<\/pre>/g,
      "",
    );
    const header = { innerHTML: "" };
    runInNewContext(headerScript, {
      location: { pathname: `/demo/${page}.html` },
      document: { querySelector: () => header },
    });
    const markup = html + header.innerHTML;
    expect(markup).not.toMatch(/\sstyle="/);
    expect(html).not.toMatch(/href="(?:site|movies)\.css"/);
    for (const [, value] of markup.matchAll(/class="([^"]+)"/g)) {
      for (const name of value.split(/\s+/))
        expect(classes.has(name), `${page}: ${name}`).toBe(true);
    }
  }
});
