# AI workshop deck: source

This is the editable source for `talks/ai-workshop/`, built on [kiwari-slides](https://github.com/zengrf/kiwari-slides).
`deck.yaml` was reconstructed from the published export; exporting it unchanged reproduced the old `index.html` byte for byte.

## Edit

```sh
.venv/bin/python tools/serve.py      # visual editor at the printed localhost URL; press E, save with ⌘S
```

Or edit `deck.yaml` in a text editor with the server running: the page reloads on save and opens the first changed slide
(`live-reload.js`). In VS Code, run **Simple Browser: Show** with the printed URL for a side-by-side preview.
Run `.venv/bin/python tools/sync.py` afterward if you want the no-server `index.html` fallback updated.

## Publish

```sh
rm -rf dist && .venv/bin/python tools/export_audience.py . dist
rsync -a dist/ ../ai-workshop/
```

Requires Google Chrome. The venv uses Python 3.12 (`uv venv --python 3.12 .venv && uv pip install --python .venv/bin/python -r requirements.txt`).

## Changes from upstream kiwari

- `theme-site.css`, `lib/site-fonts*`: the site look. Class `site-home` gives the sidebar layout; add `no-sidebar` and omit `visual` for a full-width slide.
- `workshop-figures.js`: raw HTML/SVG figures (`site-sidebar`, `lattice-dilates`, `lattice-explorer`, `process-flow`). Use as `visual: name`, or inline in a body as a paragraph containing only `FIGURE:name` (handled in `slides.js`).
- `audience/audience.js`, `tools/audience.html`: light/dark toggle (T) and a meta description from `meta.description`.
- `tools/serve.py`, `live-reload.js`: live preview of external edits; YAML errors show as a toast.
- `tools/export_audience.py`, `tools/export-render.js`: copy `theme-site.css` and the license; drop unused KaTeX files; export the description.
