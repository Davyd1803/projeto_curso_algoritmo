/*
   escreval("Digite o seu nome")
   leia (nome)
   escreval("Digite a nota 01 do aluno")
   leia (nota01)
   escreval("Digite a nota 02 do aluno")
   leia (nota02)
   media:= (nota01 + nota02) / 2
   se media >= 50 entao
      escreval ("Aprovado! ", nome)
   senao
      escreval ("Reprovado! ", nota)
fimse*/

var nome, nota01, nota02;
nome = prompt("Digite o nome do Aluno: ")
nota01 = prompt("Digite a nota 01 do aluno: ")
nota02 = prompt("Digite a nota 02 do aluno: ")

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >= 50){
    alert("Aprovado! " + nome)
}
else
    alert("Reprovado! " + nome)


