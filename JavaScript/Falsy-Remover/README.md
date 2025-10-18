# 🧹 Falsy Remover (Bouncer Function)

This simple JavaScript project removes all **falsy values** from an array.  
Falsy values in JavaScript are:  
`false`, `null`, `0`, `""`, `undefined`, and `NaN`.

---

## 🎯 Objective

- Create a function named `bouncer` that takes an array as an argument.
- It should return a **new array** without falsy values.
- The original array must remain unchanged.

---

## 🧠 How It Works

The function uses JavaScript's built-in **`.filter()`** method with the `Boolean` constructor:

```js
function bouncer(arr) {
  return arr.filter(Boolean);
}
