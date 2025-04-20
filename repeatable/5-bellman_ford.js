const edges1 = [
  [0, 1, 4],
  [0, 2, 5],
  [1, 2, -3],
  [2, 3, 4],
  [3, 1, -6],
];
const edges2 = [
  [0, 1, 4],
  [0, 2, 5],
  [1, 2, 3],
  [2, 3, 4],
  [3, 1, 6],
];

const V = 4; // Nodes 0 to 3
const source = 0;

console.log(bellmanFord(edges1, V, source));

console.log(bellmanFord(edges2, V, source));

// Graph contains a negative weight cycle
// undefined
// [ 0, 4, 5, 9 ]
