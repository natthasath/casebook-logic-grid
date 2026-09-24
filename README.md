# 🎉 Logic Grid Deduction

Casebook Logic Grid is a browser-based deduction notebook for solving Clue-style logic grid puzzles. Cross-reference Suspects, Locations, and Weapons in an interactive O/X matrix, then save checkpoints to test hypotheses whenever a suspect might be lying.

![last commit](https://img.shields.io/github/last-commit/natthasath/logic-grid-deduction)

### ✨ Features

- Freely resize each category (Suspects / Locations / Weapons) from 2 to 8 entries
- Mark cells correct (O) / incorrect (X) / clear — right-click always marks X without switching tools
- Undo up to 100 steps, plus a button to clear the whole grid
- **Checkpoints** — save the entire board state as a reference point, branch off to test a hypothesis (e.g. "what if this suspect is lying"), and jump back to a known-good point anytime
- Customize header symbols — pick from a library of 40 icons per category, rename them, or type your own 1–2 character symbol
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
| `components/IconSprite.tsx` | Hand-drawn SVG icon set (40 icons × 3 categories) |
| `lib/types.ts` | Shared puzzle state types |
| `Main.dc.html`, `support.js`, `vendor/` | Original design mockup — reference only, not part of the running app |

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

### ⚠️ Troubleshooting

> [!TIP]
> On Windows, `next dev` may print `Slow filesystem detected` if the project sits on a network or synced drive. Move it to a local disk path to speed up Turbopack rebuilds.

### ✉️ Contact

**Natthasath Saksupanara** — Computer Technical Officer, NIDA  
natthasath.sak@gmail.com
