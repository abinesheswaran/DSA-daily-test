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
