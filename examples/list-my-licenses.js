// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const licenses = require('../index').licenseArray

console.log(licenses('./'))

// Expected Output:
// [ 'MIT',
//   'ISC',
//   'MIT',
//   'MIT',
//   'MIT',
//   '(MIT OR CC0-1.0)',
//   'MIT',
//   'MIT' ]