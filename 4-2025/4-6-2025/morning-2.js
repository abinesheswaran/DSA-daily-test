const bubblesort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) return arr;
  }
  return arr;
};
const findMin = (arr, start) => {
  let min = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[min] > arr[i]) min = i;
  }
  return min;
};
const selectionsort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const min = findMin(arr, i);
    if (arr[min] < arr[i]) {
      const temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
};
const insertionsort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > num; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = num;
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
  const mid = Math.floor(arr.length / 2);
  const left = mergesort(arr.slice(0, mid));
  const right = mergesort(arr.slice(mid));
  return merge(left, right);
};

const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};
const quicksort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const p = partition(arr, low, high);
    quicksort(arr, low, p - 1);
    quicksort(arr, p + 1, high);
  }
  return arr;
};

const binarysearch = (arr, v) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    if (arr[mid] === v) return mid;
    else if (arr[mid] < v) j = mid - 1;
    else i = mid + 1;
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
