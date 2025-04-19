class MinHeap {
  arr = null;
  constructor() {
    this.arr = new Array();
  }
  getleft(i) {
    return i * 2 + 1;
  }
  getright(i) {
    return i * 2 + 2;
  }
  getparent(i) {
    return Math.floor((i - 1) / 2);
  }
  swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }
  heapifyup() {
    let t = this.arr.length - 1;
    while (true) {
      const pi = this.getparent(t);
      if (this.arr[pi] > this.arr[t]) {
        this.swap(pi, t);
        t = pi;
      } else break;
    }
  }
  heapifydown() {
    let t = 0;
    let len = this.arr.length;
    while (true) {
      const r = this.getright(t);
      const l = this.getleft(t);
      let smallest = t;
      if (l < len && this.arr[l] < this.arr[smallest]) {
        smallest = l;
      }
      if (r < len && this.arr[r] < this.arr[smallest]) {
        smallest = r;
      }
      if (smallest != t) {
        this.swap(t, smallest);
        t = smallest;
      } else {
        break;
      }
    }
  }
  add(v) {
    this.arr.push(v);
    this.heapifyup();
  }
  delete() {
    if (this.arr.length <= 1) {
      return this.arr.pop();
    }
    this.arr[0] = this.arr.pop();
    this.heapifydown();
  }
  print() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(
        `v -> ${this.arr[i]} || l -> ${this.arr[this.getleft(i)]} || r -> ${
          this.arr[this.getright(i)]
        }`
      );
    }
  }
}

const minheap = new MinHeap();
minheap.add(8);
minheap.add(2);
minheap.add(4);
minheap.add(5);
minheap.add(1);
minheap.add(7);
minheap.add(3);
minheap.add(6);
minheap.print();
console.log('_________________________________');
minheap.delete();
minheap.print();
