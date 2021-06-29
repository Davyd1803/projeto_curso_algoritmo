/*   nome: caracter
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval ("Digite seu nome")
      leia (nome)
   escreval ("Digite um número")
      leia(numero)
escreval(nome , " : ", numero, 15)
*/

var nome, numero

nome = prompt("Digite seu nome: ")
numero = prompt("Digite um numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero