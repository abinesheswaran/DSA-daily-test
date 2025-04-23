// 📘 1. Reverse a String
function reverseString(str) {
  if (str === '') return str;
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('hello')); // "olleh"
//
//
//
//
//

// 🔍 2. Palindrome Check (Recursively)
function isPalindrome(str, l = 0, h = str.length - 1) {
  if (l >= h) return true;
  if (str[l] !== str[h]) return false;
  return isPalindrome(str, l + 1, h - 1);
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
//
//
//
//
//

// 🧮 3. Factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
//
//
//
//
//

//🔢 Sum of Digits
function sumOfDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(1234)); // 10
//
//
//
//
//

//🌿 4. Power Set (Subsets)
function powerSet() {}

console.log(powerSet([1, 2, 3]));
//
//
//
//
//

// 🔄 5. Permutations
function permute() {}

console.log(permute([1, 2, 3]));
/*
  [
    [1,2,3], [1,3,2], [2,1,3],
    [2,3,1], [3,1,2], [3,2,1]
  ]
  */
