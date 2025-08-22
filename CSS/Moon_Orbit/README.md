# 🌕 Moon Orbit (HTML + CSS)

A simple animation of the **Moon** orbiting around the **Earth** using only HTML and CSS.  
Built to satisfy the freeCodeCamp **Moon Orbit** lab user stories.

## ✅ User Stories Covered

- Center page content with **Flexbox** and `height: 100vh`
- A main container `.space` (200×200, `position: relative`)
- Inside `.space`: `.earth` (first) and `.orbit` (second)
- Inside `.orbit`: `.moon`
- `.earth`: `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);` size 100×100, circular with background color
- `.orbit`: absolute, size 200×200, centered via `top:50%; left:50%`, animation applied, circular path
- `.moon`: absolute, size 30×30, at top center of `.orbit`, with `left:50%` and `transform: translateX(-50%)`, circular with background color
- `@keyframes orbit` rotates `.orbit` **360°** with:
  - `0% { transform: rotate(0deg) translate(-50%, -50%); }`
  - `100% { transform: rotate(360deg) translate(-50%, -50%); }`
- `.orbit` uses `animation: orbit 5s linear infinite;`

## 🗂 Project Structure
https://github.com/user-attachments/assets/f2cddb13-a538-40b8-a936-dd0d1d5ee64c

