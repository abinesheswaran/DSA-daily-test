const tree = new BST();

// Add nodes
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(12);
tree.add(17);

console.log('Is 7 present?', tree.ispresent(7)); // true
console.log('Is 20 present?', tree.ispresent(20)); // false

console.log('Minimum value:', tree.findmin().v); // 3
console.log('Maximum value:', tree.findmax().v); // 17

console.log('Tree height:', tree.getheight()); // Should be 2
console.log('Is tree balanced?', tree.isbalanced()); // true

console.log('Deleting node 15...');
tree.delete(15);
console.log('Is 15 present after deletion?', tree.ispresent(15)); // false

console.log('Tree height after deletion:', tree.getheight());
console.log('Is tree balanced after deletion?', tree.isbalanced());
