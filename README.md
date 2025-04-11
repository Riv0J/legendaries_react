# Legendaries, made with Vite + React

## Steps to create a React project with Vite

npm create vite@latest projec-name --template react
in the project's folder, run

npm install
npm run dev

## Create components and insert them

- They start their name in caps, just like classes
- Use their own css, or inherited css from parent components
- Components can import and use other components

## Production build

Compile the genertaed code using
npm run build

## Serve production dist

To serve the generated code, use
serve -s dist

## Show demo in Github Pages 

Make sure to have installed git and set up the git remote set-url origin, and follow these:
- npm install gh-pages --save-dev

Add to package.json
- "homepage": "http://Riv0J.github.io/legendaries_react",
- "name": "legendaries_react",

Add to "scripts"
- "predeploy": "npm run build",
- "deploy": "gh-pages -d dist",

And run
- npm run deploy

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



