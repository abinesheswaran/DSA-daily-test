class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const pq = new PriorityQueue();
  const prev = {};

  for (let node in graph) {
    distances[node] = node === start ? 0 : Infinity;
    pq.enqueue(node, distances[node]);
    prev[node] = null;
  }

  while (!pq.isEmpty()) {
    const { val: current } = pq.dequeue();

    for (let neighbor of graph[current]) {
      let alt = distances[current] + neighbor.weight;
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt;
        prev[neighbor.node] = current;
        pq.enqueue(neighbor.node, alt);
      }
    }
  }

  return { distances, prev };
}


const graph = {
    A: [{ node: 'B', weight: 2 }, { node: 'C', weight: 5 }],
    B: [{ node: 'C', weight: 1 }, { node: 'D', weight: 3 }],
    C: [{ node: 'D', weight: 2 }],
    D: [{ node: 'E', weight: 1 }],
    E: []
  };
  
  const result = dijkstra(graph, 'A');
  console.log(result.distances); 