const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n')

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    for (let k = 0; k <= input[1].length; k++) {
      if(input[i].charAt(k) !== input[j].charAt(k)){
        let first =  input[i].substr(0, k) + '' + input[i].substr(k + 1)
        let second = input[j].substr(0, k) + '' + input[j].substr(k + 1)
        if(second === first){
          console.log(first)
          break
        }else{
          break
        }
      }
    }
  }
}
