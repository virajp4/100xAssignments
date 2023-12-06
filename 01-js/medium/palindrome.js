/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let a = str.toLowerCase()
  let og = "";
  let rev = "";
  const re = /^[0-9a-z]+$/;
  for (let i = str.length - 1; i > -1; i--) {
    const char = a[i];
    if (char.match(re)){
      rev += char;
    }
  }
  for (let i = 0; i < str.length ; i++) {
    const char = a[i];
    if (char.match(re)) {
      og += char;
    }
  }
  return rev === og;
}

module.exports = isPalindrome;
