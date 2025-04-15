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