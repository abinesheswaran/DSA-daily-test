class Heap {
  arr = [];
  constructor() {}
  getfirst() {
    return this.arr[0] ?? -1;
  }
  push(v) {
    this.arr.push(v);
  }
  remove() {
    return this.arr.pop();
  }
  print() {
    
  }
}
