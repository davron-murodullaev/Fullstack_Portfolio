# 🧾 Build a Job Application Form

A modern, accessible job application form showcasing clear labels, grouped radios, and rich CSS pseudo-class states for validation and interactivity.

---

## ✅ Overview
- **Goal:** Practice form semantics, labeling, grouped radio inputs, and CSS pseudo-classes (`:focus`, `:invalid`, `:valid`, `:checked`, `:first-of-type`, `:hover`)
- **Tech:** HTML, CSS
- **Status:** Completed

---

## 🧱 Form Fields
- **Full Name:** `input#name[type="text"]`
- **Email Address:** `input#email[type="email"]`
- **Position:** `select#position` (options for Front-End / Back-End / Full-Stack)
- **Availability:** `fieldset.radio-group` with `input[type="radio"][name="availability"]` + labels (Full-Time / Part-Time / Contract)
- **Message:** `textarea#message`
- **Submit:** `button[type="submit"]`

All inputs are **associated with `<label>`** elements for accessibility.

---

## 🎯 User Stories (all covered)
- [x] `.container` div wrapping the form  
- [x] Form contains `#name` (text), `#email` (email), `#position` (select with options), radio **availability** group, `#message` (textarea), and a submit button  
- [x] Every input has a matching label (`for` ↔ `id`)  
- [x] CSS pseudo-classes:
  - [x] `input:focus, textarea:focus` → border color changes (order matters)
  - [x] `input:invalid, select:invalid, textarea:invalid` → **red** border (list selector order: input, select, textarea)
  - [x] `input:valid, select:valid, textarea:valid` → **green** border (same order)
  - [x] `button:hover` → background color changes
  - [x] `.radio-group input[type="radio"]:checked` → custom **border**, **background**, **box-shadow**
  - [x] `input[type="radio"]:checked + label` → label text color change
  - [x] `input:first-of-type` → distinct styling for the first input

---

## ♿ Accessibility Notes
- Proper `label`–`input` association improves screen reader and focus UX.
- Grouped radios in a `fieldset` with a `legend` clarifies intent.
- Visible focus styles support keyboard users.

---

## 📂 Project Structure

<img width="2872" height="1693" alt="image" src="https://github.com/user-attachments/assets/577a65f0-2fdf-4d13-b765-4ee798316046" />
