"""Check local links, anchors and images after `bun run build`.

Run: python3 scripts/check_export.py
"""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids = set()
        self.references = []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        key = {"a": "href", "img": "src"}.get(tag)
        if key and attrs.get(key):
            self.references.append(attrs[key])


root = Path(__file__).resolve().parents[1] / "dist"
pages = {path: Page(path) for path in root.rglob("*.html")}
assert pages, "No exported pages. Run bun run build first."
errors = []
checked = 0

for path, page in pages.items():
    for reference in page.references:
        url = urlsplit(urljoin("/" + path.relative_to(root).as_posix(), reference))
        if url.scheme or url.netloc:
            continue
        target = root / unquote(url.path).lstrip("/")
        candidates = [target, Path(str(target) + ".html"), target / "index.html"]
        resolved = next((candidate for candidate in candidates if candidate.is_file()), None)
        checked += 1
        if resolved is None:
            errors.append(f"{path.name}: missing {reference}")
        elif url.fragment and resolved in pages:
            if unquote(url.fragment) not in pages[resolved].ids:
                errors.append(f"{path.name}: missing anchor {reference}")

assert not errors, "\n".join(errors)
print(f"Checked {checked} local links/images across {len(pages)} exported pages.")
