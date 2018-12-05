const fs = require('fs')
const input = fs.readFileSync('./fabric.txt', 'utf-8').split('\n')

let fabric = Object.create(null)

for (let i = 0; i < input.length; i++) {

  let claim = input[i].split(' ')

  let fromLeft = Number(claim[2].split(',')[0])
  let fromTop = Number(claim[2].split(',')[1].replace(':', ''))

  let dimensionLeft = Number( claim[3].split('x')[0])
  let dimensionTop =  Number(claim[3].split('x')[1])

  //console.log(' From left: ' + fromLeft + ' From top: ' + fromTop + ' fabric left: ' + dimensionLeft + ' fabric top: ' + dimensionTop)

  for (let i = fromLeft; i < fromLeft + dimensionLeft; i++) {
    for (let j = fromTop; j < fromTop + dimensionTop; j++) {
      fabric[`${i},${j}`] = (fabric[`${i},${j}`] || 0) + 1
    }
  }
}

console.log(Object.values(fabric).filter(f => f > 1).length)
