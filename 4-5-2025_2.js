class Node {
  v = null;
  r = null;
  l = null;
  constructor(v) {
    this.v = v;
  }
  set r(address) {
    this.r = address;
  }
  set l(address) {
    this.l = address;
  }
}
class BinarySearchTree {
  head = null;
  constructor() {}
  add(v) {
    const node = new Node(v);
    if (this.head) {
      let temp = this.head;
      while (temp) {
        const curVal = temp.v;
        if (v < curVal) {
          if (!temp.l) {
            temp.l = node;
            break;
          }
          temp = temp.l;
        } else {
          if (!temp.r) {
            temp.r = node;
            break;
          }
          temp = temp.r;
        }
      }
    } else {
      this.head = node;
    }
    return this.head;
  }
  isPresent(v) {
    let temp = this.head;
    while (temp) {
      if (temp.v === v) return true;
      else if (temp.v < v) temp = temp.l;
      else temp = temp.r;
    }
    return false;
  }
}

const bf = (bt) => {
  const arr = [bt];
  for (let i = 0; i < arr.length; i++) {
    const node = arr[i];
    if (!node) continue;
    console.log(node.v);
    arr.push(node.l);
    arr.push(node.r);
  }
};

const dfInorder = (bt) => {
  if (!bt) return;
  dfInorder(bt.l);
  console.log(bt.v);
  dfInorder(bt.r);
};

const dfPreorder = (bt) => {
  if (!bt) return;
  console.log(bt.v);
  dfPreorder(bt.l);
  dfPreorder(bt.r);
};

const dfPostorder = (bt) => {
  if (!bt) return;
  dfPostorder(bt.l);
  dfPostorder(bt.r);
  console.log(bt.v);
};

const bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(3);
bst.add(7);

console.log('BFS:');
bf(bst.head);

console.log('DFS Inorder:');
dfInorder(bst.head);

console.log('DFS Preorder:');
dfPreorder(bst.head);

console.log('DFS Postorder:');
dfPostorder(bst.head);
