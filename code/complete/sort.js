const simpleArray = ['cayenne', 'habanero', 'bell', 'jalapeno', 'ghost'];

const peppers = [
  { name: 'cayenne', hotness: 3 },
  { name: 'habanero', hotness: 5 },
  { name: 'bell', hotness: 0 },
  { name: 'jalapeno', hotness: 2 },
  { name: 'ghost', hotness: 7 },
  { name: 'carolina reaper', hotness: 9 },
  { name: "dragon's breath", hotness: 10 },
];

// Sort a simple array alphabetically ===================
let simpleSort = simpleArray.sort();

console.log('Simple sort: ', simpleSort);

// Sort peppers on object name ==========================
let alphaSortPeppers = peppers.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log('Alpha sort: ', alphaSortPeppers);

// Sort peppers based on object number ==================
let numSortPeppers = peppers.sort((a, b) => {
  return a.hotness - b.hotness;
});

console.log('Number sort: ', numSortPeppers);
