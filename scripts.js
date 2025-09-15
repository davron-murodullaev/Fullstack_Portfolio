/**
 * Returns the length of the longest word in the provided sentence.
 * @param {string} str - The sentence to analyze.
 * @returns {number} Length of the longest word.
 */
function findLongestWordLength(str) {
  if (typeof str !== "string") return 0;

  // Split on any whitespace; filter out empties just in case
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

// UI glue
function handleCheck() {
  const input = document.getElementById("sentenceInput").value;
  const result = findLongestWordLength(input);
  document.getElementById("result").textContent =
    `Length of the longest word: ${result}`;
}

document.getElementById("checkBtn").addEventListener("click", handleCheck);

// Quick console sanity check
// Expected: 6
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
