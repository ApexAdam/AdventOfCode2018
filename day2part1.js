const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let doubles = 0
let triples = 0

for (let i = 0; i < input.length; i++) {
  let text = input[i]
  let doubleFound = false
  let tripleFound = false
  for (let j = 0; j < text.length; j++) {
    if (text.split(text.charAt(j)).length - 1 === 2 && !doubleFound) {
      doubles++
      doubleFound = true
    }
    if (text.split(text.charAt(j)).length - 1 === 3 && !tripleFound) {
      triples++
      tripleFound = true
    }
  }
}

console.log(doubles * triples)
