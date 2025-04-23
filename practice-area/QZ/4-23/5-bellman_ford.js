function bellmanFord(edges, V, source) {
  const dist = Array(V).fill(Infinity);
  dist[source] = 0;

  for (let i = 0; i < V - 1; i++) {
    for (let [u, v, w] of edges) {
      if (dist[u] != Infinity && dist[u] + w < dist[v]) dist[v] = dist[u] + w;
    }
  }

  for (let i = 0; i < V - 1; i++) {
    for (let [u, v, w] of edges) {
      if (dist[u] != Infinity && dist[u] + w < dist[v]) {
        console.log('graph has -ve cycle');
        return;
      }
    }
  }

  return dist;
}

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
