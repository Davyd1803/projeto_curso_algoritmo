/*valor01, valor02, resultado: real
operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
 escreva("A proposta deste programa é calcular dois valores baseado na operação da sua escolha.")

 escreva(" Digite o primeiro valor: ")
 leia (valor01)
 escreva (valor01)
 escreva(" DIgite  a operação: Ex.: + , - , * , /")
 leia (operacao)
 escreva(" Digite o segundo valor: ")
 leia (valor02)

 escolha operacao
    caso "+"
         resultado := valor01 + valor02
         caso "-"
         resultado := valor01 - valor02
         caso "*"
         resultado := valor01 * valor02
         caso "/"
         resultado := valor01 / valor02


         fimescolha

   escreva ("O resultado do calculo é: ", resultado) */
   
   Fimalgoritmo
   function acaoBotao() { 
   var valor01, valor02, resultado, operacao
       valor01 = prompt("Digite o primeiro valor: ")
       operacao = prompt("DIgite a operação: Ex.: + , - , * , /")
       valor02 = prompt("Digite o segundo valor: ")
       switch(operacao){
            case "+":
                resultado = parseInt( valor01 ) + parseInt( valor02 )
                break;
            case "-":
                resultado = parseInt( valor01 ) - parseInt(valor02 )
                break;
            case "*":
                resultado = parseInt( valor01 ) * parseInt(valor02 )
                break;
            case "/":
                resultado = parseInt( valor01 ) / parseInt(valor02 )
            break;

       }

       }                    
       document.getElementById("paragrafo").innerText = resultado

