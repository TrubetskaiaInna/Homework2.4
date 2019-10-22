let obj = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}
let arrKeys = Object.keys(obj)
arrKeys.reverse()
const translateToTone = (str) => {
  let rest
  let resultNumber = []
  let result = ''
  for (let i = 0; i < arrKeys.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (Number(str) >= Number(arrKeys[i])) {
        rest = str - arrKeys[i]
        str = rest
        resultNumber.push(obj[arrKeys[i]])
        result = resultNumber.join('')
      }
    }
  }
  return result
}
let someStr = '2019'
let functionResult = translateToTone(someStr)
console.log(functionResult)
