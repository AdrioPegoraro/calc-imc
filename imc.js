var altura = prompt('Insira sua altura!')
var peso = prompt('insira seu peso!')
imc = peso / (altura * altura)
alert("O IMC é " + imc)

if (imc < 18.5) alert("você está abaixo do peso!")
else if (imc < 25) alert("Peso normal!")
else if (imc < 30) alert("Sobrepeso grau 1!")
else if (imc < 40) alert("Obesidade grau 2!")
else alert("Obesidade grave grau 3!")