//método reduce() para “reduzir” uma lista de números para um único valor.

const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acumulador, atual)=>
    acumulador + atual, 0);

console.log(soma);