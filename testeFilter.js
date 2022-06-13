function numerosMenoresQueDez (numeros){
    return numeros <= 10;
};

var listaNumeros = [12, 11, 4, 6, 7, 8, 9].filter(numerosMenoresQueDez);

console.log(listaNumeros)