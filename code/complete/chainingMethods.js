const peppers = [
  { name: 'cayenne' },
  { name: 'habanero' },
  { name: 'bell' },
  { name: 'jalapeno' },
  { name: 'ghost' },
  { name: 'carolina reaper' },
  { name: "dragon's breath" },
];

// Chain array methods to create a sorted array of pepper names surrounded by divs
let output = peppers
  .map(pepper => pepper.name)
  .sort()
  .map(pepper => {
    return `<div>${pepper}</div>`;
  });

console.log(output);
