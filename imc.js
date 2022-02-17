var altura = prompt('Insira sua altura!')
var peso = prompt('insira seu peso!')
imc = peso / (altura * altura)

if (imc < 18.5) alert("Seu IMC é " + imc + "! " + "você está abaixo do peso!")
else if (imc < 25) alert("Seu IMC é " + imc +"! " + "Peso normal!")
else if (imc < 30) alert("Seu IMC é " + imc +"! " + "Sobrepeso grau 1!")
else if (imc < 40) alert("Seu IMC é " + imc +"! " + "Obesidade grau 2!")
else alert("Seu IMC é " + imc +"! " + "Obesidade grave grau 3!")