class PQ {
  constructor() {
    this.arr = [];
  }
  enqueue(v, p) {
    this.arr.push({ v, p });
    this.arr.sort((a, b) => a.p - b.p);
  }
  dequeue() {
    return this.arr.pop();
  }
  isEmpty() {
    return this.arr.length === 0;
  }
}

const dijkstra = (graph, start) => {
  const distances = {};
  const prev = {};
  const pq = new PQ();
  for (let n in graph) {
    distances[n] = start === n ? 0 : Infinity;
    pq.enqueue(n, distances[n]);
    prev[n] = null;
  }

  while (!pq.isEmpty()) {
    const { v: c } = pq.dequeue();
    for (let n of graph[c]) {
      const alt = distances[c] + n.weight;
      if (alt < distances[n.node]) {
        distances[n.node] = alt;
        prev[n.node] = c;
        pq.enqueue(n.node, alt);
      }
    }
  }
  return { distances, prev };
};

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
