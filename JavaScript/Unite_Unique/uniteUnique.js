// Function: uniteUnique
// Description: Combines multiple arrays into one new array
// containing only unique values, in the order they first appear.

function uniteUnique(...arrays) {
  const result = [];
  const seen = new Set();

  // Loop through all provided arrays
  for (const arr of arrays) {
    // Loop through each value in the current array
    for (const value of arr) {
      // Add only values that haven't appeared before
      if (!seen.has(value)) {
        seen.add(value);      // mark value as seen
        result.push(value);   // keep original order
      }
    }
  }

  return result;
}

// Example test cases:
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// → [1, 3, 2, 5, 4]

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// → [1, 2, 3, 5]

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// → [1, 2, 3, 5, 4, 6, 7, 8]

console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
// → [1, 3, 2, 5, 4, 6]
