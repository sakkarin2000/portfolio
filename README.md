# 🧑‍💼 Portfolio

This is my personal portfolio site. Built with **React 19**, **Vite**, **Tailwind CSS**, and running with **Bun**. Deployment goes through **GitHub Pages**.

## 🚀 Live Site

[https://sakkarin2000.github.io/portfolio/](https://sakkarin2000.github.io/portfolio/)

---

## 🛠 Stack

- React 19
- Vite
- Tailwind CSS
- Bun (dev/build tool)
- TypeScript
- Deployed with `gh-pages`

---

## 📦 Install

```bash
bun install
```

---

## 💻 Dev mode

```bash
bun run dev
```

Starts Vite dev server.

---

## 🔍 Preview production build

```bash
bun run preview
```

Runs the `dist` build locally with Vite preview.

---

## 🧪 Lint

```bash
bun run lint
```

Runs ESLint across the project.

---

## 🏗 Build

```bash
bun run build
```

- Runs `tsc -b` and builds the app with Vite  
- Output will be in the `dist/` folder

---

## 🚢 Deploy

```bash
bun run deploy
```

This will:
- Build the app first (automatically runs `bun run build` via `predeploy`)
- Push `dist/` to the `gh-pages` branch
- GitHub Pages will pick it up

> 🔁 You don’t need to build manually before deploy — `predeploy` already handles that:

```json
"predeploy": "bun run build",
"deploy": "gh-pages -d dist"
```

Make sure:
- GitHub Pages is enabled in your repo settings
- Source is set to `gh-pages` branch

---

## 📁 Project Structure

```
/
├─ public/           # Static files
├─ src/              # App source code
│  ├─ components/    # React components
│  └─ ...
├─ dist/             # Build output (auto-generated)
├─ bun.lockb         # Bun lockfile
├─ tsconfig.json     # TypeScript config
└─ vite.config.ts    # Vite config
```

---

## ✍️ Customization

Update content or style by editing stuff inside `src/`. Tailwind is already set up so you can use utility classes freely.

---

## 📄 License

This project is personal. You can use it for inspiration, but don’t straight-up copy it.

---