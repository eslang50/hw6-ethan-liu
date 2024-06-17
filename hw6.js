const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const operations = document.querySelectorAll('#operations button')
const result = document.getElementById('result-output')
const input1Res = document.getElementById('input1-output')
const input2Res = document.getElementById('input2-output')

const add = (a,b) => a + b
const sub = (a,b) => a - b
const mul = (a,b) => a * b
const div = (a,b) => a / b

operations.forEach((op) => {
  op.addEventListener('click', () => {
    const operation = op.textContent
    const a = parseInt(input1.value)
    const b = parseInt(input2.value)
    console.log(operation)
    if(operation === 'CLEAR') {
      result.textContent = ''
      input1Res.textContent = ''
      input2Res.textContent = ''
    }
    else if(isNaN(a) && isNaN(b)) result.textContent = "Error: Both inputs are invalid/empty, please enter a number"
    else if(isNaN(a)) result.textContent = "Error: Input1 is empty, please enter a number"
    else if(isNaN(b)) result.textContent = "Error: Input2 is empty, please enter a number"
    else {
        input1Res.textContent = `Input1 = ${a}`
        input2Res.textContent = `Input2 = ${b}`
      if(operation === '+') {
        result.textContent = `Input1 ${operation} Input2 = ${a} ${operation} ${b} = ${add(a,b)}`
      }
      else if(operation === '-') {
        result.textContent = `Input1 ${operation} Input2 = ${a} ${operation} ${b} = ${sub(a,b)}`
      }
      else if(operation === '*') {
        result.textContent = `Input1 ${operation} Input2 = ${a} ${operation} ${b} = ${mul(a,b)}`
      }
      else {
        result.textContent = `Input1 ${operation} Input2 = ${a} ${operation} ${b} = ${isNaN(div(a,b)) ? Infinity : div(a,b)}`
      }
    }
  }
  )
})
