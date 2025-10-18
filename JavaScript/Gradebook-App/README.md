# 🎓 Gradebook App

This is a simple **JavaScript Gradebook Application** built to calculate students' grades and class averages.

## 🧠 Features
- Calculates the **average score** of all students.
- Converts a student's **numeric score** to a **letter grade**.
- Determines if a student **passed** or **failed**.
- Displays a formatted message summarizing the result.

## 📄 Functions Overview

| Function | Description |
|-----------|-------------|
| `getAverage(scores)` | Returns the average score of an array of numbers. |
| `getGrade(score)` | Converts a score to a letter grade. |
| `hasPassingGrade(score)` | Returns `true` if grade is not "F". |
| `studentMsg(scores, studentScore)` | Combines all results into a readable message. |

## 🧩 Example
```js
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Class average: 71.7. Your grade: F. You failed the course.
