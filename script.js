const input = document.getElementById('inputBox')
const buttons = Array.from(document.querySelectorAll('button'))

let calculation = ''

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const btnValue = e.target.innerHTML

    switch (btnValue) {
      case '=':
        try {
          if (!calculation) return
          calculation = new Function('return ' + calculation)()
          if (Number(calculation) % 1 !== 0) {
            calculation = Number(calculation).toFixed(3)
          }
          input.value = calculation
        } catch {
          input.value = 'Error'
          calculation = ''
        }
        break
      case 'AC':
        calculation = ''
        input.value = calculation
        break
      case 'DEL':
        if (typeof calculation === 'number') {
          input.value = ''
          calculation = ''
          break
        }
        calculation = calculation.slice(0, -1)
        input.value = calculation
        break
      default:
        calculation += btnValue === 'x' ? '*' : btnValue
        input.value = calculation
    }
  })
})
