function mincost(arr)
{ 
	function mincost(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  // Create a MinHeap
  const heap = new MinHeap((a, b) => a - b);
  arr.forEach((num) => heap.push(num));

  let totalCost = 0;

  // Merge elements until only one remains
  while (heap.size() > 1) {
    const first = heap.pop();
    const second = heap.pop();
    const mergeCost = first + second;
    totalCost += mergeCost;
    heap.push(mergeCost);
  }

  return totalCost;
//write your code here
// return the min cost
  
}

module.exports=mincost;
