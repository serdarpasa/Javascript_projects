//To initialize const kelvin
const kelvin = 0;
//To initialize const celsius
const celsius = kelvin - 273;
//To initialize variable fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//To round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`${kelvin} kelvin is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(` ${celsius} celsius is ${newton} degrees Newton.`);
