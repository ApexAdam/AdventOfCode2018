const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let sum = 0
let reachedFreq = []
let found = false
let j = 0

for (let i = 0; !found; i++) {
  if (i > (input.length - 1)) {
    i = 0
  }
  sum += parseInt(input[i])
  if (reachedFreq.includes(sum)) {
    console.log(sum)
    found = true
    break
  }

  reachedFreq[j] = sum
  j++
}
