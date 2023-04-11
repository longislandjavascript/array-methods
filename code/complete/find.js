const peppers = [
  { name: 'cayenne', hotness: 3 },
  { name: 'habanero', hotness: 5 },
  { name: 'bell', hotness: 0 },
  { name: 'jalapeno', hotness: 2 },
  { name: 'ghost', hotness: 7 },
  { name: 'carolina reaper', hotness: 9 },
  { name: "dragon's breath", hotness: 10 },
];

// Find a pepper with a hotness below 3 - for loop ==============
let newHotnessLowerFor = [];
for (let i = 0; i < peppers.length; i++) {
  if (peppers[i].hotness < 3) {
    newHotnessLowerFor.push(peppers[i]);
  }
}

console.log('Hotness Lower - for loop: ', newHotnessLowerFor[0]);

// Find a pepper with a hotness below 3 - find ==================
let newHotnessLowerFind = peppers.find(pepper => {
  return pepper.hotness < 3;
});

console.log('Hotness Lower - find: ', newHotnessLowerFind);
