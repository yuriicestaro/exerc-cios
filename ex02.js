/*
* Classificação de Triângulos:
Escreva um programa que recebe três números representandoos comprimentos dos lados 
de um triângulo e determina se ele é equilátero (todos os lados iguais), isósceles
(dois lados iguais) ou escaleno (todos os lados diferentes).

*/

//Pedindo pro usuário os dados

let comp1 = Number(prompt('Escreva o 1º comprimento do triângulo: '));
let comp2 = Number(prompt('Escreva o 2º comprimento do triângulo: '));
let comp3 = Number(prompt('Escreva o 3º comprimento do triângulo: '));

function geral (comp1, comp2, comp3) {

    /* Esta dando erro onde sempre que coloco os valores, todo tipo de resultado
       dá isósceles, tudo dá isósceles, acho que o problema está entre o computador e a cadeira
         */

// Função da formu. equilatero
function equilatero(comp1, comp2, comp3) {
    if (comp1 == comp2 == comp3) {
        return true;
    } else {
        return false;
    }
}

// Função da formu. isósceles

function iso(comp1, comp2, comp3) {
    if ((comp1 == comp2) !== comp3) {
        return true;
    } else {
        return false;
    }
}

// Função da formula escaleno

function escaleno(comp1, comp2, comp3) { 
    if (comp1 != comp2 != comp3) {
        return true;
    } else {
        return false;
    }
}
 /* guardando os resultados em variáveis*/

let equii = equilatero();
let isoc = iso();
let esc = escaleno();

//Resultados se for TRUE

if (equii == true) { 
    alert('Esse triângulo é equilatero.');
} else if (isoc == true) {
    alert('Esse triângulo é isósceles.');
} else if (esc == true) {
    alert('Esse triângulo é escaleno');
} 

}

geral();