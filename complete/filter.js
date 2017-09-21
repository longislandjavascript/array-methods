const peppers = [
  { name: 'cayenne', hotness: 3 },
  { name: 'habanero', hotness: 5 },
  { name: 'bell', hotness: 0 },
  { name: 'jalapeno', hotness: 2 },
  { name: 'ghost', hotness: 7 },
  { name: 'carolina reaper', hotness: 9 },
  { name: "dragon's breath", hotness: 10 },
];

// Return only the ghost pepper - for loop =======================
let newGhostFor = [];
for (let i = 0; i < peppers.length; i++) {
  if (peppers[i].name === 'ghost') {
    newGhostFor.push(peppers[i]);
  }
}

console.log('Ghost - for loop: ', newGhostFor);

// Return only the ghost pepper - filter =========================
let ghostFilter = peppers.filter(pepper => {
  return pepper.name === 'ghost';
});

console.log('Ghost - filter: ', ghostFilter);

// Return all peppers with a hotness greater than 5 ==============
let hotnessFilter = peppers.filter(pepper => {
  return pepper.hotness > 5;
});

console.log('Hotness - filter: ', hotnessFilter);
