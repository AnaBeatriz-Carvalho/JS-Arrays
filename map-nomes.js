let nomes = ['ana Julia', 'Caio Vinicius', 'BIA silva']

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)

console.log("------------------------------------------")

const nome = "Alura";
// ["A", "l", "u", "r", "a"]
let nomeMaiusculas = "";

for (let i = 0; i <nome.length;i++){
    nomeMaiusculas+=nome[i].toLocaleUpperCase();
}

console.log(nomeMaiusculas)

console.log("------------------------------------------")

const nomeDoCurso = "Fundamentos de JS";
const nomeDaPlataforma = "Alura";

const nomeCompleto = nomeDoCurso.concat(" " + nomeDaPlataforma)
console.log(nomeCompleto)


