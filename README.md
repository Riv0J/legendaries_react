# ⚔️ Legendaries, made with Vite + React

Github pages preview here: [Legendaries in Github Pages](https://riv0j.github.io/legendaries_react/)

## ⚙️ Steps to create a React project with Vite

Create the project  
- `npm create vite@latest projec-name --template react`

Move to the project's folder, run  
- `npm install`  
- `npm run dev`

## 🧩 Create components and insert them

- They start their name in caps, just like classes  
- Use their own css, or inherited css from parent components  
- Components can import and use other components

## 🏗️ Production build

Compile the optimized code using  
- `npm run build`

To serve the generated code, use
- `serve -s dist`

## 🚀 Show demo in GitHub Pages 

Set up/install git  
- `git remote set-url origin https://<TOKEN>@github.com/<USER>/<REPO>.git`  
- `git init`

Install GitHub Pages  
- `npm install gh-pages --save-dev`

Add to `package.json`  
- `"homepage": "http://Riv0J.github.io/legendaries_react",`  
- `"name": "legendaries_react",`

Add to `"scripts"`  
- `"predeploy": "npm run build",`  
- `"deploy": "gh-pages -d dist",`

Add repo name to `"defineConfig"` in `vite.config.js`
- `base: '/legendaries_react/',`

And finally, run
- `npm run deploy`