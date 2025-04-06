const bubblesort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        isSwapped = true;
      }
    }
    if (!isSwapped) return arr;
  }
  return arr;
};

const findMin = (arr, s) => {
  let min = s;
  for (let i = s + 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) min = i;
  }
  return min;
};
const selectionsort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const min = findMin(arr, i);
    if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
};

const insertionsort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const n = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > n; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = n;
  }
  return arr;
};

const merge = (a, b) => {
  let i = 0;
  let j = 0;
  const arr = [];
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) arr.push(a[i++]);
    else arr.push(b[j++]);
  }
  return arr.concat(a.slice(i), b.slice(j));
};
const mergesort = (arr) => {
  if (arr.length <= 1) return arr;
  const m = Math.floor(arr.length / 2);
  const l = mergesort(arr.slice(0, m));
  const r = mergesort(arr.slice(m));
  return merge(l, r);
};

const partition = (a, l, h) => {
  const p = a[h];
  let i = l - 1;
  for (let j = l; j < h; j++) {
    if (a[j] < p) {
      i++;
      [a[i], a[j]] = [a[j], a[i]];
    }
  }
  [a[h], a[i + 1]] = [a[i + 1], a[h]];
  return i + 1;
};
const quicksort = (a, l = 0, h = a.length - 1) => {
  if (l < h) {
    const p = partition(a, l, h);
    quicksort(a, l, p - 1);
    quicksort(a, p + 1, h);
  }
  return a;
};

const binarysearch = (a, v) => {
  let i = 0;
  let j = a.length - 1;
  while (i < j) {
    const m = Math.floor((i + j) / 2);
    if (a[m] === v) return m;
    else if (a[m] > v) j = m - 1;
    else i = m + 1;
  }
  return -1;
};

const testArray = [64, 25, 12, 22, 11];

console.log('Bubble Sort:', bubblesort([...testArray]));
console.log('Selection Sort:', selectionsort([...testArray]));
console.log('Insertion Sort:', insertionsort([...testArray]));
console.log('Merge Sort:', mergesort([...testArray]));
console.log('Quick Sort:', quicksort([...testArray]));

// Binary search test (searching in sorted array)
const sortedArray = mergesort([...testArray]); // let's use merge sort to ensure it's sorted
console.log('Binary Search (find 22):', binarysearch(sortedArray, 22)); // Should print index
console.log('Binary Search (find 100):', binarysearch(sortedArray, 100)); // Should print -1 (not found)
