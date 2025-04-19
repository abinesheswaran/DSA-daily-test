class MinHeap {
  arr = null;
  constructor() {
    this.arr = [];
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
  getfirst() {
    return this.arr[0];
  }
  push(v) {
    this.arr.push(v);
    this.heapup();
  }
  remove() {
    if (this.arr.length <= 1) {
      return this.arr.pop();
    }
    this.arr[0] = this.arr.pop();
    this.heapdown();
  }
  heapup() {
    let t = this.arr.length - 1;
    while (true) {
      const p = this.getparent(t);
      if (this.arr[p] > this.arr[t]) {
        this.swap(p, t);
        t = p;
      } else break;
    }
  }
  heapdown() {
    let t = 0;
    let len = this.arr.length;
    while (true) {
      const l = this.getleft(t);
      const r = this.getright(t);
      let s = t;
      if (l < len && this.arr[l] < this.arr[s]) s = l;
      if (r < len && this.arr[r] < this.arr[s]) s = r;
      if (s !== t) {
        this.swap(s, t);
        t = s;
      } else break;
    }
  }
  print() {
    for (let i = 0; i < this.arr.length; i++) {
      const l = this.getleft(i);
      const r = this.getright(i);
      console.log(
        `v->${this.arr[i]}||l->${this.arr[l] ?? '__'}||r->${
          this.arr[r] ?? '__'
        }`
      );
    }
  }
}

const minheap = new MinHeap();
minheap.push(8);
minheap.push(2);
minheap.push(4);
minheap.push(5);
minheap.push(1);
minheap.push(7);
minheap.push(3);
minheap.push(6);
minheap.print();
console.log('_________________________________');
minheap.remove();
minheap.print();
