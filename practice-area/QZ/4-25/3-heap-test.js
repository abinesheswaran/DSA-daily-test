class MinHeap {
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
        this.swap(t, s);
        t = s;
      } else break;
    }
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
  print() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(
        `v->${this.arr[i]}||l->${this.arr[this.getleft(i)]}||r->${
          this.arr[this.getright(i)]
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

//Output
//------
// v->1||l->2||r->3
// v->2||l->6||r->5
// v->3||l->7||r->4
// v->6||l->8||r->__
// v->5||l->__||r->__
// v->7||l->__||r->__
// v->4||l->__||r->__
// v->8||l->__||r->__
// _________________________________
// v->2||l->5||r->3
// v->5||l->6||r->8
// v->3||l->7||r->4
// v->6||l->__||r->__
// v->8||l->__||r->__
// v->7||l->__||r->__
// v->4||l->__||r->__
