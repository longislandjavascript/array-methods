const peppers = [
  { name: 'cayenne', hotness: 3 },
  { name: 'habanero', hotness: 5 },
  { name: 'bell', hotness: 0 },
  { name: 'jalapeno', hotness: 2 },
  { name: 'ghost', hotness: 7 },
  { name: 'carolina reaper', hotness: 9 },
  { name: "dragon's breath", hotness: 10 },
];

// Map over peppers and print out a sentence about them - for loop ==================
let pepperLoopDesc = [];
for (let i = 0; i < peppers.length; i++) {
  pepperLoopDesc.push(
    `The ${peppers[i].name} pepper has a hotness of ${peppers[i].hotness}.`
  );
}

console.log('Pepper descriptions - for loop: ', pepperLoopDesc);

// Map over peppers and print out a sentence about them - map =======================
let pepperMapDesc = peppers.map(pepper => {
  return `The ${pepper.name} pepper has a hotness of ${pepper.hotness}.`;
});

console.log(`Pepper descriptions - map: `, pepperMapDesc);

// Map over peppers and return a string stating if the pepper is hot or not (hot is any hotness above 3)
let pepperHotOrNot = peppers.map(pepper => {
  if (pepper.hotness > 3) {
    return `${pepper.name} pepper is hot`;
  }
  return `${pepper.name} pepper is not too hot`;
});

console.log('Pepper hot or not: ', pepperHotOrNot);
