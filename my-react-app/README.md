# My Portfolio (local)

Quick steps to finish and run the portfolio locally.

1. Copy your resume PDF into the project's `public` folder as `resume.pdf`.

   Example (PowerShell):

   ```powershell
   copy "C:\Users\dasgu\Documents\Latest Resume Main\Resume_Arghya_Dasgupta.pdf" .\public\resume.pdf
   ```

2. Install dependencies (if not already):

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open http://localhost:5173 in your browser (Vite default). The About section includes a download link and an embedded preview for `resume.pdf`.

Notes:
- Replace the LinkedIn and email placeholders in `src/components/Contact.jsx` with your real links.
- To deploy, build with `npm run build` and serve the `dist` output using your chosen host.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
