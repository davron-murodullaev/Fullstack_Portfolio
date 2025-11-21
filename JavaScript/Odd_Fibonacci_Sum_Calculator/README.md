# 📌 Odd Fibonacci Sum Calculator

This project implements a JavaScript function that calculates the sum of all **odd Fibonacci numbers** less than or equal to a given number.  
It is part of the FreeCodeCamp "Algorithm Scripting" challenges.

---

## 📘 Overview

The `sumFibs()` function:

- Accepts a **positive integer**  
- Generates Fibonacci numbers starting from **0 and 1**  
- Adds **only odd Fibonacci values** to the total  
- Stops when Fibonacci numbers exceed the given input  
- Returns the final sum

---

## 🚀 How It Works

1. Start with initial Fibonacci values:
   ```js
   a = 0
   b = 1


   🟦 Example Outputs

`sumFibs(1);`        // → 1
`sumFibs(4);`        // → 5
`sumFibs(1000);`     // → 1785
`sumFibs(75024);`    // → 60696
`sumFibs(75025);`    // → 135721
`sumFibs(4000000);`  // → 4613732

