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
  push(v) {
    this.arr.push(v);
    this.heapup();
  }
  remove() {
    const t = this.arr.pop();
    if (this.arr.length <= 0) return t;
    this.arr[0] = t;
    this.heapdown();
    return t;
  }
  getfirst() {
    return this.arr[0];
  }
  heapup() {
    let t = this.arr.length - 1;
    while (true) {
      const p = this.getparent(t);
      if (this.arr[t] < this.arr[p]) {
        this.swap(t, p);
        t = p;
      } else break;
    }
  }
  heapdown() {
    let t = 0;
    const len = this.arr.length;
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
      console.log(
        `v->${this.arr[i]}||l->${this.arr[this.getleft(i)] ?? '__'}||r->${
          this.arr[this.getright(i)] ?? '__'
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
