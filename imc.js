var altura = prompt('Insira sua altura!')
var peso = prompt('insira seu peso!')
imc = peso / (altura * altura)

if (peso < 18.5) alert("Seu IMC é " + imc + "! " + "você está abaixo do peso!")
else if (peso <= 24.9) alert("Seu IMC é " + imc +"! " + "Peso normal!")
else if (peso <= 29.9) alert("Seu IMC é " + imc +"! " + "Sobrepeso grau 1!")
else if (peso <= 39.9) alert("Seu IMC é " + imc +"! " + "Obesidade grau 2!")
else alert("Seu IMC é " + imc +"! " + "Obesidade grave grau 3!")