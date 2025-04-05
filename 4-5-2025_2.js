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
  findMin(node) {
    let temp = node ?? this.head;
    while (true) {
      if (!temp.l) return temp;
      temp = temp.l;
    }
  }
  delete(v) {
    const deletenode = (node, v) => {
      if (!node) return null;
      if (v < node.v) node.l = deletenode(node.l, v);
      else if (v > node.v) node.r = deletenode(node.r, v);
      else {
        if (!node.r && !node.l) return null;
        if (!node.r) return node.l;
        if (!node.l) return node.r;

        const successor = this.findMin(node.r);
        node.v = successor.v;
        node.r = deletenode(node.r, successor.v);
      }
      return node;
    };
    this.head = deletenode(this.head, v);
  }
  getHeight(node) {
    if (!node) return -1;
    return 1 + Math.max(this.getHeight(node.l), this.getHeight(node.r));
  }
  isBalanced = (node) => {
    if (!node) return true;
    const lheight = this.getHeight(node.l);
    const rheight = this.getHeight(node.r);
    return (
      Math.abs(lheight - rheight) <= 1 &&
      this.isBalanced(node.l) &&
      this.isBalanced(node.r)
    );
  };
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

const tree = new BinarySearchTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(12);
tree.add(18);

console.log('BFS:');
bf(tree.head);

console.log('Inorder DFS (should be sorted):');
dfInorder(tree.head);

console.log('Preorder DFS:');
dfPreorder(tree.head);

console.log('Postorder DFS:');
dfPostorder(tree.head);

console.log('Tree is balanced:', tree.isBalanced(tree.head));
console.log('Tree height:', tree.getHeight(tree.head));

tree.delete(10); // deleting root
console.log('Inorder after deletion:');
dfInorder(tree.head);

tree.add(100)
console.log('Inorder after deletion:');
dfInorder(tree.head);

console.log('Tree is balanced:', tree.isBalanced(tree.head));
console.log('Tree height:', tree.getHeight(tree.head));
