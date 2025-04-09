// Test
const arr = [64, 34, 25, 12, 22, 11, 90];

console.log('Bubble Sort:', bubblesort([...arr]));
console.log('Selection Sort:', selectionsort([...arr]));
console.log('Insertion Sort:', insertionsort([...arr]));
console.log('Merge Sort:', mergesort([...arr]));
console.log('Quick Sort:', quicksort([...arr]));
console.log('Binary Search (find 22):', binarysearch(quicksort(arr), 22)); // Should print index
console.log('Binary Search (find 100):', binarysearch(quicksort(arr), 100)); // Should print -1 (not found)
