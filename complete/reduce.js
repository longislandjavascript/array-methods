const peppers = [
  { name: 'cayenne', hotness: 3 },
  { name: 'habanero', hotness: 5 },
  { name: 'bell', hotness: 0 },
  { name: 'jalapeno', hotness: 2 },
  { name: 'ghost', hotness: 7 },
  { name: 'carolina reaper', hotness: 9 },
  { name: "dragon's breath", hotness: 10 },
];

// Return the sum of the total hotness of the peppers in the pepper array - for loop
let sumOfAllLoopHotness = 0;
for (i = 0; i < peppers.length; i++) {
  sumOfAllLoopHotness = sumOfAllLoopHotness + peppers[i].hotness;
}

console.log('Sum of all hotness - for loop: ', sumOfAllLoopHotness);

// Return the sum of the total hotness of the peppers in the pepper array - reduce
let sumOfAllReduceHotness = peppers.reduce((sum, pepper) => {
  return sum + pepper.hotness;
}, 0);

console.log('Sum of all hotness - reduce: ', sumOfAllReduceHotness);
