const bubblesort = (a) => {
  for (let i = 0; i < a.length - 1; i++) {
    let swap = false;
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j + 1] < a[j]) {
        swap = true;
        [a[j + 1], a[j]] = [a[j], a[j + 1]];
      }
    }
    if (!swap) return a;
  }
  return a;
};

const findmin = (a, s) => {
  let m = s;
  for (let i = s + 1; i < a.length; i++) {
    if (a[m] > a[i]) m = i;
  }
  return m;
};
const selectionsort = (a) => {
  for (let i = 0; i < a.length; i++) {
    const m = findmin(a, i);
    if (a[m] < a[i]) [a[m], a[i]] = [a[i], a[m]];
  }
  return a;
};

const insertionsort = (a) => {
  for (let i = 1; i < a.length; i++) {
    const n = a[i];
    let j;
    for (j = i - 1; j >= 0 && a[j] > n; j--) {
      a[j + 1] = a[j];
    }
    a[j + 1] = n;
  }
  return a;
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
const mergesort = (a) => {
  if (a.length <= 1) return a;
  const m = Math.floor(a.length / 2);
  const l = mergesort(a.slice(0, m));
  const r = mergesort(a.slice(m));
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
  [a[i + 1], a[h]] = [a[h], a[i + 1]];
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
  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (a[m] === v) return m;
    if (a[m] > v) j = m - 1;
    else i = m + 1;
  }
  return -1;
};

// Test
const arr = [64, 34, 25, 12, 22, 11, 90];

console.log('Bubble Sort:', bubblesort([...arr]));
console.log('Selection Sort:', selectionsort([...arr]));
console.log('Insertion Sort:', insertionsort([...arr]));
console.log('Merge Sort:', mergesort([...arr]));
console.log('Quick Sort:', quicksort([...arr]));
console.log('Binary Search (find 22):', binarysearch(quicksort(arr), 22)); // Should print index
console.log('Binary Search (find 100):', binarysearch(quicksort(arr), 100)); // Should print -1 (not found)
