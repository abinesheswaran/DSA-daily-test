// 📘 1. Reverse a String
function reverseString(str) {
  if (str === '') return '';
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('hello')); // "olleh"
//
//
//
//
//

// 🔍 2. Palindrome Check (Recursively)
function isPalindrome(s, l = 0, r = s.length - 1) {
  if (l >= r) return true;
  if (s[l] !== s[r]) return false;
  return isPalindrome(s, l + 1, r - 1);
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
//
//
//
//
//

// 🧮 3. Sum of Digits OR Factorial
function factorial(n) {
  if (n === 0) return 1;
  return factorial(n - 1) * n;
}

console.log(factorial(5)); // 120
//
//
//
//
//

//🔢 Sum of Digits
function sumOfDigits(n) {
  if (n === 0) return n;
  return sumOfDigits(Math.floor(n / 10)) + (n % 10);
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
