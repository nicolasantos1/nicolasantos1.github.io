import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const routes = ["/", "/sobre", "/projetos", "/formacao", "/contato"];
for (const route of routes) {
  const file = join("out", route === "/" ? "index.html" : `${route.slice(1)}.html`);
  assert.ok(existsSync(file), `Missing exported route: ${route}`);
  const html = readFileSync(file, "utf8");
  assert.match(html, /<h1[ >]/, `Missing main heading: ${route}`);
  assert.match(html, /id="conteudo"/, `Missing skip-link target: ${route}`);
  for (const [, url] of html.matchAll(/(?:href|src)="(\/(?!\/)[^"?#]*)/g)) {
    if (url.startsWith("/_next/")) continue;
    assert.ok(routes.includes(url) || existsSync(join("out", url)), `Broken local link on ${route}: ${url}`);
  }
}
console.log("Verified 5 exported routes, headings, skip links and local assets.");
