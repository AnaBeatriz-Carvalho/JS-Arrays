const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

function situacaoAluno(nota){
    if (nota >= 7){
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}

const alunosAprovados = alunos.map((aluno, i) => {
    return `${aluno} foi ${situacaoAluno(notas[i])}`;
});

//const alunosAprovados = notas.map(situacaoAluno);

console.log(alunosAprovados);
console.log('----------------------------------');  


const reprovados = alunos.filter((aluno, indice) => notas[indice] < 5);
console.log(`reprovados: ${reprovados}`);

