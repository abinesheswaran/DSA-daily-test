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
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
};
const bubblesort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) return arr;
  }
  return arr;
};
const insertionsort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > num; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = num;
  }
  return arr;
};
const merge = (a, b) => {
  let i = 0,
    j = 0;
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
  let pivot = arr[high];
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
