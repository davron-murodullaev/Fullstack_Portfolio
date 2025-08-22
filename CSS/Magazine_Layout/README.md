# 📰 Magazine Layout (CSS Grid)

This project is part of the **freeCodeCamp Responsive Web Design Certification**.  
It demonstrates how to design a **magazine cover layout** using **CSS Grid**.

## 🎯 User Stories Covered
- A `<main>` element with the class **`magazine-cover`**.
- A `<header>` element with the class **`title`**, containing text.
- Four `<section>` elements with classes:
  - **`feature-article`**
  - **`small-article1`**
  - **`small-article2`**
  - **`cover-image`**
- The `.magazine-cover` container:
  - Uses **CSS Grid** (`display: grid`).
  - `grid-template-areas`:
    ```
    "title title title"
    "feature-article feature-article cover-image"
    "small-article1 small-article2 cover-image"
    ```
  - `grid-template-columns: repeat(3, 1fr)` → divides into 3 equal parts.
  - `grid-template-rows: auto 1fr 1fr` → auto for header, equal rows for content.
  - `gap: 10px` between grid items.
- `.title`, `.feature-article`, and `.cover-image` each have matching **grid-area** names.

All **tests (1–15)** from the lab are satisfied ✅.

## 📂 Project Structure

<img width="2879" height="1701" alt="image" src="https://github.com/user-attachments/assets/86341cf6-5f8c-456c-bbdf-308e0c84ddb7" />
