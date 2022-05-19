const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//para cada nota, executa soma das notas
//método que leva uma função
//callback
notas.forEach(nota =>{
    somaDasNotas+= nota
})

let media = somaDasNotas/notas.length;

console.log(media);
