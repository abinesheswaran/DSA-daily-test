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
    if (arr[min] > arr[i]) min = i;
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
  const mid = Math.floor(arr.length / 2);
  const l = mergesort(arr.slice(0, mid));
  const r = mergesort(arr.slice(mid));
  return merge(l, r);
};

const partition = (arr, l, h) => {
  const p = arr[h];
  let i = l - 1;
  for (let j = l; j < h; j++) {
    if (arr[j] < p) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
  }
  return i + 1;
};
const quicksort = (arr, l = 0, h = arr.length) => {
  if (l < h) {
    const p = partition(arr, l, h);
    quicksort(arr, low, q - 1);
    quicksort(arr, p + 1, h);
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

class Node {
  v = null;
  l = null;
  r = null;
  constructor(v) {
    this.v = v;
  }
  set l(add) {
    this.l = add;
  }
  set r(add) {
    this.r = add;
  }
}

class BST {
  head = null;
  constructor() {}
  add(v) {
    const node = new Node(v);
    if (!this.head) {
      this.head = node;
    } else {
      let t = this.head;
      while (t) {
        if (t.v > v) {
          if (t.l) t = t.l;
          else {
            t.l = node;
            return;
          }
        } else {
          if (t.r) t = t.r;
          else {
            t.r = node;
            return;
          }
        }
      }
    }
  }
  delete(v) {
    const deleteNode = (n, v) => {
      if (!n) return null;
      if (v < n.v) n.l = deleteNode(n.l, v);
      else if (v > n.v) n.r = deleteNode(n.r, v);
      else {
        if (!n.l && !n.r) return null;
        if (!n.l) return n.r;
        if (!n.r) return n.l;

        const s = this.findMin(n.r);
        n.v = s.v;
        n.r = deleteNode(n.r, s.v);
      }
      return n;
    };
    this.head = deleteNode(this.head, v);
  }
  getTopNodeValue() {
    return this.head.v;
  }
  isPresent(v) {
    let t = this.head;
    while (t) {
      if (t.v === v) return true;
      else if (t.v > v) t = t.l;
      else t = t.r;
    }
    return false;
  }
  findMin(t = this.head) {
    while (t.l) t = t.l;
    return t;
  }
  findMax(t = this.head) {
    while (t.r) t = t.r;
    return t;
  }
  getHeight(n) {
    if (!n) return 0;
    return 1 + Math.max(this.getHeight(n.l), this.getHeight(n.r));
  }
  isBalanced(n) {
    if (!n) return true;
    const l = this.getHeight(n.l);
    const r = this.getHeight(n.r);
    if (Math.abs(l - r) > 1) return false;
    return this.isBalanced(n.l) && this.isBalanced(n.r);
  }
}

const arr = [64, 25, 12, 22, 11];

console.log('Original Array:', [...arr]);

// Test Bubble Sort
const bubbleArr = [...arr];
console.log('Bubble Sort Result:', bubblesort(bubbleArr));

// Test Selection Sort
const selectionArr = [...arr];
console.log('Selection Sort Result:', selectionsort(selectionArr));

// Test Insertion Sort
const insertionArr = [...arr];
console.log('Insertion Sort Result:', insertionsort(insertionArr));

// Test Merge Sort
const mergeArr = [...arr];
console.log('Merge Sort Result:', mergesort(mergeArr));

// Test Merge function directly
console.log('Direct Merge Test:', merge([1, 3, 5], [2, 4, 6]));

const bst = new BST();

// Test Add
bst.add(50);
bst.add(30);
bst.add(70);
bst.add(20);
bst.add(40);
bst.add(60);
bst.add(80);

console.log('BST Top Node Value:', bst.getTopNodeValue()); // Should be 50

// Test isPresent
console.log('Is 60 present?', bst.isPresent(60)); // true
console.log('Is 100 present?', bst.isPresent(100)); // false

// Test findMin and findMax
console.log('Min value in BST:', bst.findMin()); // 20
console.log('Max value in BST:', bst.findMax()); // 80

// Test delete
bst.delete(20); // Delete leaf node
console.log('After deleting 20, is 20 present?', bst.isPresent(20)); // false

bst.delete(30); // Delete node with one child
console.log('After deleting 30, is 30 present?', bst.isPresent(30)); // false

bst.delete(50); // Delete root node with two children
console.log('After deleting root (50), new root:', bst.getTopNodeValue());

// Test delete remaining nodes
bst.delete(70);
bst.delete(60);
bst.delete(40);
bst.delete(80);

console.log('After deleting all, is 70 present?', bst.isPresent(70)); // false
console.log('Final tree top node (should be null):', bst.head);
