const Persons = require("./person01")


const person01 = new Persons("Zabaa")
console.log(person01.getName())
person01.setName("Madush")

console.log(person01.getName())

const person02 = new Persons("Perera")
console.log(person02.getName())