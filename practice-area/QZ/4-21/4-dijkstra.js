class PQ {
  constructor() {
    this.arr = [];
  }
  push(v, p) {
    this.arr.push({ v, p });
    this.arr.sort((a, b) => a.p - b.p);
  }
  shift() {
    return this.arr.shift();
  }
  isEmpty() {
    return this.arr.length === 0;
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const pq = new PQ();
  const prev = {};
  for (let node in graph) {
    distances[node] = node === start ? 0 : Infinity;
    pq.push(node, distances[node]);
    prev[node] = null;
  }
  while (!pq.isEmpty()) {
    const { v: current } = pq.shift();
    for (let neighbor of graph[current]) {
      let alt = distances[current] + neighbor.weight;
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt;
        prev[neighbor.node] = current;
        pq.push(neighbor.node, alt);
      }
    }
  }
  return { distances, prev };
}

const graph = {
  A: [
    { node: 'B', weight: 2 },
    { node: 'C', weight: 5 },
  ],
  B: [
    { node: 'C', weight: 1 },
    { node: 'D', weight: 3 },
  ],
  C: [{ node: 'D', weight: 2 }],
  D: [{ node: 'E', weight: 1 }],
  E: [],
};

const result = dijkstra(graph, 'A');
console.log(result);

// {
//     distances: { A: 0, B: 2, C: 3, D: 5, E: 6 },
//     prev: { A: null, B: 'A', C: 'B', D: 'B', E: 'D' }
//   }
