
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
   