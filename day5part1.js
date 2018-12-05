const fs = require('fs')
let input = fs.readFileSync('./polymers.txt', 'utf-8')

let length = input.length
for (let i = 0; i < length + 2; i++) {
  if (input.charAt(i).toUpperCase() === input.charAt(i + 1).toUpperCase()) {
    if (input.charAt(i) !== input.charAt(i + 1)) {
        input = input.substr(0, i) + '' + input.substr(i + 2)
      i = 0
      length = input.length
    }
  }
}
console.log(input)
console.log(input.length -2) // for some reason first two chars are left out
