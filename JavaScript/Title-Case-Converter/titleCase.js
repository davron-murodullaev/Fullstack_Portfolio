function titleCase(str) {
  const words = str.split(" ");
  const converted = words.map(function(word) {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
  });
  return converted.join(" ");
}

// Example Tests
console.log(titleCase("I'm a little tea pot")); 
// "I'm A Little Tea Pot"

console.log(titleCase("sHoRt AnD sToUt")); 
// "Short And Stout"

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); 
// "Here Is My Handle Here Is My Spout"
