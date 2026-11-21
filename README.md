# OpenCatalog

Document your event-driven architecture: domains, systems, services, events, commands, queries, channels, flows and the teams that own them, written as markdown and published as a searchable site with diagrams.

OpenCatalog is a fork of [EventCatalog](https://github.com/event-catalog/eventcatalog) 4.12.1. It keeps the MIT-licensed 4.x code and removes everything that was under the EventCatalog Commercial License, so the whole repository is MIT and can be used anywhere, including inside companies of any size, with no license key.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## What's included

- Pages for domains, subdomains, systems, services, events, commands, queries, channels, flows, entities, data products, containers, teams and users
- Architecture diagrams and the node-graph visualiser
- Schema viewers (JSON Schema, Avro, Protobuf, AsyncAPI, OpenAPI, GraphQL) and the schema explorer
- Search, changelogs, ADRs, RSS, `llms.txt`, and markdown downloads
- The SDK, linter, generators support and the `generate` command

## What's not included

These were paid EventCatalog features. Their code was removed, so they're off and can't be turned on:

- AI assistant (chat) and the MCP server
- Authentication and access rules
- Custom documentation (`docs/` folder), resource docs, and custom pages (`pages/*.astro`)
- Federation (`federate` command) and directory sources for users and teams
- Schema API, external schema sources, private remote schemas and the fields explorer
- Analytics integrations, embedding (Backstage), custom styles and custom branding
- Saving visualiser layouts in dev mode

See [NOTICE](NOTICE) for the full history.

## Getting started

Requires Node.js 22 and pnpm.

```bash
pnpm install
pnpm --filter '@opencatalog/core^...' run build:bin
pnpm run start:catalog
```

This builds the workspace packages the core depends on, then serves the example catalog in `examples/default` at http://localhost:3000.

## Repository layout

| Path | What it is |
|---|---|
| `packages/core` | `@opencatalog/core`: the catalog app and the `opencatalog` CLI (`eventcatalog` also works) |
| `packages/sdk`, `linter`, `visualiser`, `cli`, `connectors`, `diff`, `breaking-changes`, `create-eventcatalog` | Supporting packages, unchanged from EventCatalog 4.x and still published upstream under `@eventcatalog/*` |
| `examples/` | Example catalogs |

Internal names such as environment variables (`EVENTCATALOG_*`) and config files (`eventcatalog.config.js`) are unchanged, so existing EventCatalog 4.x catalogs work as they are.

## License

MIT. See [LICENSE](LICENSE) and [NOTICE](NOTICE). OpenCatalog is not affiliated with or endorsed by EventCatalog Ltd.
