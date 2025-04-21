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
function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, left + 1, right - 1);
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
function powerSet(nums) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop(); // backtrack
    }
  }

  backtrack(0, []);
  return result;
}

console.log(powerSet([1, 2, 3]));
//
//
//
//
//

// 🔄 5. Permutations
function permute(nums) {
  const result = [];

  function backtrack(path, options) {
    if (options.length === 0) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < options.length; i++) {
      path.push(options[i]);
      backtrack(path, [...options.slice(0, i), ...options.slice(i + 1)]);
      path.pop(); // backtrack
    }
  }

  backtrack([], nums);
  return result;
}

console.log(permute([1, 2, 3]));
/*
  [
    [1,2,3], [1,3,2], [2,1,3],
    [2,3,1], [3,1,2], [3,2,1]
  ]
  */
