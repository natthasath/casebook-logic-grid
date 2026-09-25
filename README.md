# 🎉 Casebook Logic Grid

Casebook Logic Grid is a browser-based deduction notebook for solving Clue-style logic grid puzzles. Cross-reference Suspects, Locations, and Weapons in an interactive O/X matrix, then save checkpoints to test hypotheses whenever a suspect might be lying.

![last commit](https://img.shields.io/github/last-commit/natthasath/casebook-logic-grid)

### ✨ Features

- Freely resize each category (Suspects / Locations / Weapons) from 2 to 8 entries
- Mark cells correct (O) / incorrect (X) / clear — right-click always marks X without switching tools
- Undo up to 100 steps, plus a button to clear the whole grid
- **Checkpoints** — save the entire board state as a reference point, branch off to test a hypothesis (e.g. "what if this suspect is lying"), and jump back to a known-good point anytime
- Customize header symbols — pick from a curated Material Symbols library (104 suspects / 63 locations / 54 weapons), rename them, type your own 1–2 character symbol, or randomize a single header symbol at a time
- Answer summary fields (culprit / weapon / location)
- Auto-saves to `localStorage` — pick up right where you left off

### 🧊 Tech Stack / Folder Structure

| Layer | Stack |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript |
| Styling | CSS Modules |
| State | React hooks + `localStorage` persistence |
| Package manager | Bun |

| Path | Purpose |
|---|---|
| `app/` | Next.js App Router entry (`layout.tsx`, `page.tsx`) |
| `components/LogicGrid.tsx` | Puzzle state, logic, and UI |
| `components/LogicGrid.module.css` | Component styling |
| `components/IconSprite.tsx` | Material Symbols icon set (221 icons — 104 suspects / 63 locations / 54 weapons) |
| `lib/types.ts` | Shared puzzle state types |
| `Main.dc.html`, `support.js`, `vendor/` | Original design mockup — historical reference only, no longer used as the icon source |

Icons: [Google Material Symbols](https://fonts.google.com/icons) (Apache License 2.0).

> [!IMPORTANT]
> `Main.dc.html` is a standalone design mockup exported from a visual design tool, not the production app. It won't run correctly opened directly via `file://` in some browsers — serve it locally (e.g. `python3 -m http.server`) if you need to view the original reference.

### ✅ Requirements

- Node.js ≥ 20.9 (required by Next.js 16)
- [Bun](https://bun.sh) ≥ 1.3 recommended — the repo ships a `bun.lock` (npm / pnpm / yarn also work)

### 🚀 Installation

```shell
bun install
```

### 🏆 Run

```shell
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Command | Purpose |
|---|---|---|
| `dev` | `bun run dev` | Start the local dev server (Turbopack) |
| `build` | `bun run build` | Production build |
| `start` | `bun run start` | Serve the production build |
| `lint` | `bun run lint` | Run ESLint |

### 👉🏼 Demo

- [logic-grid-deduction.vercel.app](https://logic-grid-deduction.vercel.app) — live production deployment (auto-deployed from `main` via Vercel's GitHub integration)

### ⚠️ Troubleshooting

> [!TIP]
> On Windows, `next dev` may print `Slow filesystem detected` if the project sits on a network or synced drive. Move it to a local disk path to speed up Turbopack rebuilds.

### ✉️ Contact

**Natthasath Saksupanara** — Computer Technical Officer, NIDA  
natthasath.sak@gmail.com
