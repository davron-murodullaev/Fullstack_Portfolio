# Build a Confidential Email Page

A stylized confidential email with rotated security stamps, redacted text,
and strict sizing via `box-sizing: border-box`.

---

## ✅ Overview
- **Goal:** Practice layout sizing with `box-sizing`, inline-block badges, transforms, and CSS filters
- **Tech:** HTML, CSS
- **Status:** Completed

---

## 🎯 User Stories (covered)
- [x] `main#email` exists
- [x] `#email` → `padding: 50px`, `margin-top: 50px`, `width: 500px`, `border: 2px`
- [x] `#email` uses `box-sizing: border-box` so total width stays **500px**
- [x] Inside `#email`: `<div id="confidential">CONFIDENTIAL</div>` and `<div id="top-secret">TOP SECRET</div>`
- [x] `#confidential`, `#top-secret` → `display: inline-block`, **padding**, **margin-left**, **border**
- [x] Both stamps are rotated via `transform`
- [x] At least **three** paragraphs inside `#email`
- [x] At least **three** `<span class="blurred">…</span>` within paragraphs, and none are empty
- [x] `.blurred { filter: blur(3px); }`

---

## 📂 Project Structure

![Uploading image.png…]()
