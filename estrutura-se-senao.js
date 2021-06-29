/*// escreva("A proposta deste programa é calcular dois valores baseado na operação da sua escolha.")

escreva(" Digite o primeiro valor: ")
leia (valor01)
escreva (valor01)
escreva(" DIgite  a operação: Ex.: + , - , * , /")
leia (operacao)
escreva(" Digite o segundo valor: ")
leia (valor02)
escreva (valor02)

   se operacao = "+" entao
      resultado := valor01 + valor02
         senao
              se operacao = "-" entao
                 resultado := valor01 - valor02

            senao
                 se operacao = "*" entao
                    resultado := valor01 * valor02
                    
                    senao
                         se operacao = "/" entao
                            resultado := valor01 / valor02
                       fimse
                     fimse
                  fimse
              fimse
  escreva ("O resultado do calculo é: ", resultado)
  */
Fimalgoritmo
function acaoBotao() { 
var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("DIgite a operação: Ex.: + , - , * , /")
    valor02 = prompt("Digite o segundo valor: ")
    
    if ( operacao == "+" ){
        resultado = parseInt( valor01 ) + parseInt( valor02 )
     } else  if( operacao == "-" ){
            resultado = parseInt( valor01 ) - parseInt(valor02 )
           }     else if ( operacao == "*" ){
                resultado = parseInt( valor01 ) * parseInt( valor02 )
               } else if ( operacao == "/" ){
                    resultado = parseInt( valor01 ) / parseInt( valor02 )    
       
    }                    
    document.getElementById("paragrafo").innerText = resultado
}

