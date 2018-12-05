const fs = require('fs')
let input = fs.readFileSync('./polymers.txt', 'utf-8')

let length = input.length
let alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
let shortest = 50000
let polymersOriginal = input

for (let i = 0; i < alphabet.length; i++) {
  let unit = alphabet[i]
  for (let i = 0; i < length; i++) {
    input = input.replace(unit, "")
    input = input.replace(unit.toUpperCase(), "")

  }
  for (let i = 0; i < length + 2; i++) {
    if (input.charAt(i).toUpperCase() === input.charAt(i + 1).toUpperCase()) {
      if (input.charAt(i) !== input.charAt(i + 1)) {
        input = input.substr(0, i) + '' + input.substr(i + 2)
        i = 0
        length = input.length
      }
    }
  }
  if(input.length < shortest){
    shortest = input.length
  }
  input = polymersOriginal
}


console.log(shortest - 2)
