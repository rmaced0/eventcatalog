# @opencatalog/core

The OpenCatalog app and CLI: turns a folder of markdown describing your domains, services and messages into a documentation site with diagrams.

OpenCatalog is an MIT-licensed fork of EventCatalog 4.12.1 with the commercially licensed code removed. See the [repository README](https://github.com/rmaced0/eventcatalog#readme) for what is and isn't included.

## Commands

Run these from your catalog's folder (the one with `eventcatalog.config.js`):

| Command | What it does |
|---|---|
| `opencatalog dev` | Serve the catalog locally with live reload |
| `opencatalog build` | Build the site into `dist/` (or the configured `outDir`) |
| `opencatalog preview` / `start` | Serve a finished build |
| `opencatalog generate` | Run the generators listed in `eventcatalog.config.js` |
| `opencatalog export` | Export the catalog as JSON |

The `eventcatalog` command name also works, so existing scripts keep running.

## License

MIT. See [LICENSE](LICENSE).
