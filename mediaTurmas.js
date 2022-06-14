// média geral de cada turma (3 turmas)

const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 5];
const salaPython =[7, 3.5, 8, 9.5];

//contador = 0
//contador +=1

function mediaTurma(notasTurma){
    const somadasNotas = notasTurma.reduce((acumulador, atual) => 
    acumulador + atual, 0) 
    return somadasNotas/notasTurma.length;{
        
    };
}


console.log(`Média da sala de Javascript: ${mediaTurma(salaJs)}`);
console.log(`Média da sala de Java: ${mediaTurma(salaJava)}`);
console.log(`Média da sala de Python: ${mediaTurma(salaPython)}`);

const notas = [10, 6.5, 8, 7];

const media = notas.reduce((acumulador, atual) => 
    acumulador + atual, 0) / notas.length;

console.log(media);
