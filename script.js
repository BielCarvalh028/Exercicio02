let firstNumber = prompt('Digite o primeiro numero ')
let secondNumber = prompt('Digite o Segundo numero')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber
const resSum = sum % 2

alert('a soma dos dois numeros é: ' + sum)
alert('a subtração dos dois numeros é: ' + sub)
alert('a multiplicação dos dois numeros é: ' + multi)
alert('a divisão dos dois numeros é: ' + div)
alert('o resto dos dois numeros é: ' + restDiv)

if(firstNumber === secondNumber) {
    alert('Os numeros inseridos são iguais') 
}
if(firstNumber != secondNumber) {
    alert('os numeros inseridos não são iguais ')
}

if(firstNumber == 0){
   alert('O resultado das soma é um numero par')
}
else{
    alert('o resulado das soma é um numero impar')
}
