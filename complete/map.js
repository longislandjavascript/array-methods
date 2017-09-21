const peppers = [
  { name: 'cayenne', hotness: 3 },
  { name: 'habanero', hotness: 5 },
  { name: 'bell', hotness: 0 },
  { name: 'jalapeno', hotness: 2 },
  { name: 'ghost', hotness: 7 },
  { name: 'carolina reaper', hotness: 9 },
  { name: "dragon's breath", hotness: 10 },
];

// Map over peppers and read out a sentence about them - for loop =========
for (let i = 0; i < peppers.length; i++) {
  console.log(
    `The ${peppers[i].name} pepper has a hotness of ${peppers[i].hotness}.`
  );
}

// Map over peppers and read out a sentence about them - map ==============
let pepperMapDesc = peppers.map(pepper => {
  return console.log(
    `The ${pepper.name} pepper has a hotness of ${pepper.hotness}.`
  );
});
