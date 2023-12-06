/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(a) {
  let str = a.toLowerCase().trim();
  let count = 0;
  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels[char] === 0) {
      count += 1;
    }
  }
  return count;
}

module.exports = countVowels;
