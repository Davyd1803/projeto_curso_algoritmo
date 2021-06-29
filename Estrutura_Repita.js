/*Var
// Seção de Declarações das variáveis 
   sairLoop: caractere
   valor01, valor02, valor03: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
       escreva("Digite o primeiro valor: ")
       leia(valor01)
       escreva("Digite o segundo valor: ")
       leia(valor02)
       escreva("Digite o terceiro valor: ")
       leia(valor03)
       escreval("Resultados: ", valor01 + valor02 + valor03)
       escreval("Deseja sair? S/N")
       leia(sairLoop)
   ate sairLoop <> "N"
   */
function acaoBotao(){
    var sairLoop, valor01, valor02, valor03
    do{  
       valor01 = prompt("Digite o primeiro valor: ")
       valor02 = prompt("Digite o segundo valor: ")
       valor03 = prompt("Digite o terceiro valor: ")
       document.getElementById("paragrafo").innerText = "O resultado é igual: " + (parseInt( valor01 ) + parseInt( valor02) + parseInt( valor03))
       sairLoop = prompt("Deseja sair? S/N")
    }while(sairLoop == "N")
}
   