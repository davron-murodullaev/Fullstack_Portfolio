# 🏗️ Pyramid Generator

A simple yet elegant **JavaScript function** that generates a text-based pyramid pattern.  
This project demonstrates logic with loops, conditional rendering, and string manipulation.

---

## 📜 Objective

Create a function named **`pyramid`** that fulfills the following user stories:

1. The function should take **three arguments**:
   - `patternChar` → a string representing the pattern character.
   - `rows` → an integer representing the number of rows.
   - `inverted` → a Boolean value (`true` for an upside-down pyramid, `false` for normal).

2. The function should return a **string** forming a pyramid:
   - When `inverted` is `false`, the vertex points **upwards**.
   - When `inverted` is `true`, the vertex points **downwards**.
   - The vertex row always has **one** character, and each following row increases or decreases by **two**.
   - Each row should be **centered** using spaces at the beginning (no trailing spaces).
   - The returned string should **start and end** with a newline character `\n`.

---

## 💻 Code Implementation

```js
function pyramid(patternChar, rows, inverted) {
  // Take the first character safely (handle undefined/null)
  const ch = String(patternChar ?? '').charAt(0);
  let result = '\n';

  if (inverted) {
    // Inverted pyramid (vertex facing down)
    for (let i = 0; i < rows; i++) {
      const spaces = i;
      const chars = 2 * (rows - i) - 1;
      result += ' '.repeat(spaces) + ch.repeat(chars) + '\n';
    }
  } else {
    // Normal pyramid (vertex facing up)
    for (let i = 0; i < rows; i++) {
      const spaces = rows - i - 1;
      const chars = 2 * i + 1;
      result += ' '.repeat(spaces) + ch.repeat(chars) + '\n';
    }
  }

  return result;
}
