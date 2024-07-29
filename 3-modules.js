// Modules
// CommonJS, every file is module by default
// Modules - Encapsulated code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const person = require('./6-alternative-export').singlePerson;
require('./7-mind-grenade');

console.log(person);

sayHi('Susan');
sayHi(names.person1)
sayHi(person.name);