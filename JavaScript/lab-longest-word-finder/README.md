# Longest Word Finder

A tiny utility that returns the **length of the longest word** in a given sentence.  
This is based on the FreeCodeCamp **Basic Algorithm Scripting** exercise.

## 🎯 Objective
- Split a sentence into words
- Measure each word's length
- Return the maximum length

## ✅ Function
```javascript
function findLongestWordLength(str) {
  if (typeof str !== "string") return 0;

  const words = str.trim().split(/\s+/).filter(Boolean);
  let maxLen = 0;

  for (const word of words) {
    const len = word.length;
    if (len > maxLen) {
      maxLen = len;
    }
  }
  return maxLen;
}
