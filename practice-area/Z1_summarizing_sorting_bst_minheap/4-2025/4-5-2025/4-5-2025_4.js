class Heap {
  arr = [];
  constructor() {}
  push(v) {
    this.arr.push(v);
  }
  remove() {
    const v = this.arr[0];
    this.arr[0] = this.arr.pop();
    return v;
  }
  print() {
    const fn = (i) => {
      if (i >= this.arr.length) return;
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      console.log(
        `value = ${this.arr[i]}, left = ${this.arr[l]}, right = ${this.arr[r]}`
      );
      fn(l);
      fn(r);
    };
    fn(0);
  }
}

class MinHeap {
  array = [];
  constructor() {}
  getMin() {
    return this.array[0];
  }
  add(v) {
    this.array.push(v);
    let cIndex = this.array.length - 1;
    while (cIndex >= 0) {
      let pIndex = Math.floor((cIndex - 1) / 2);
      if (this.array[cIndex] < this.array[pIndex]) {
        const temp = this.array[cIndex];
        this.array[cIndex] = this.array[pIndex];
        this.array[pIndex] = temp;
        cIndex = pIndex;
      } else break;
    }
  }
  deleteroot() {
    this.array[0] = this.array.pop();
    let i = 0;
    while (i < this.array.length) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;
      let smallest = i;
      if (left < this.array.length && this.array[left] < this.array[smallest])
        smallest = left;
      if (right < this.array.length && this.array[right] < this.array[smallest])
        smallest = right;
      if (smallest != i) {
        const temp = this.array[smallest];
        this.array[smallest] = this.array[i];
        this.array[i] = temp;
        i = smallest;
      } else break;
    }
  }
  print() {
    const arr = [];
    const fn = (i) => {
      if (i >= this.array.length) return;
      console.log(this.array[i]);
      fn(2 * i + 1);
      fn(2 * i + 2);
    };
    fn(0);
  }
}

class MaxHeap {
  array = [];
  constructor() {}
  getMax() {
    return this.array[0];
  }
  add(v) {
    this.array.push(v);
    let cIndex = this.array.length - 1;
    while (cIndex >= 0) {
      let pIndex = Math.floor((cIndex - 1) / 2);
      if (this.array[cIndex] > this.array[pIndex]) {
        const temp = this.array[cIndex];
        this.array[cIndex] = this.array[pIndex];
        this.array[pIndex] = temp;
        cIndex = pIndex;
      } else break;
    }
  }
  deleteroot() {
    this.array[0] = this.array.pop();
    let i = 0;
    while (i < this.array.length) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;
      let biggest = i;
      if (left < this.array.length && this.array[left] > this.array[biggest])
        biggest = left;
      if (right < this.array.length && this.array[right] > this.array[biggest])
        biggest = right;
      if (biggest != i) {
        const temp = this.array[biggest];
        this.array[biggest] = this.array[i];
        this.array[i] = temp;
        i = biggest;
      } else break;
    }
  }
  print() {
    const arr = [];
    const fn = (i) => {
      if (i >= this.array.length) return;
      console.log(this.array[i]);
      fn(2 * i + 1);
      fn(2 * i + 2);
    };
    fn(0);
  }
}

// const heap = new Heap();
// heap.push(10);
// heap.push(5);
// heap.push(20);
// heap.push(2);
// heap.print();

// console.log('Removed:', heap.remove());
// heap.print();

const heap = new MinHeap();
heap.add(5);
heap.add(3);
heap.add(8);
heap.add(1);
heap.add(6);

console.log(heap.array); // Should show heapified array
heap.deleteroot();
console.log(heap.array); // Should show array after removing min (root)
console.log('---------------------');
const maxheap = new MaxHeap();
maxheap.add(5);
maxheap.add(3);
maxheap.add(8);
maxheap.add(1);
maxheap.add(6);

console.log(maxheap.array); // Should show heapified array
maxheap.deleteroot();
console.log(maxheap.array);
