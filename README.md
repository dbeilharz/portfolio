# Daniel Beilharz Portfolio

## Technology Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/) / [Vitest](https://vitest.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Requirements

- [Node.js](https://nodejs.org/en) 20+ and [PnPm](https://pnpm.io/)

**Prettier**

[Prettier](https://prettier.io/) is used to ensure consistent formatting in the codebase.

It is recommended to install the `Prettier - Code formatter` plugin (Author
prettier.io) in VS Code and enable `Save on format`.

1. Under `Settings`, set `Default Formatter` to `Prettier - Code formatter`.
2. Under `Settings`, enable `Format on save` checkbox.

Alternatively, `pnpm prettier` command can be run manually to format the entire codebase.

## Getting Started

This codebase uses `PnPm` package manager to utilise it's speed and disk space efficiency features.
Usage is very similar to `npm` on the surface, but feel free to check out [PnPm motivation](https://pnpm.io/motivation) for more information.

**Install PnPm**

```bash
npm install -g pnpm
```

**Install Dependancies**

```bash
pnpm install
```

**Run Local Development Server**

```bash
pnpm dev
```

Local Development Server should now be accessible via `http://localhost:5173/`

## Unit Tests

```bash
pnpm test
```

## TS Checks / Linting

```bash
pnpm ts

pnpm lint
```

Alternatively running `pn all` will run commands to do unit test, linting and TypeScript checks.

## End To End Tests

```bash
pnpm e2e // chrome
or
pnpm e2e:firefox
or
pnpm e2e:webkit
```

or to run with UI for debugging

```bash
pnpm e2e:ui
```

You can also specify the browser in UI mode like so

```bash
pnpm e2e:ui --project firefox
```

## CI/CD
