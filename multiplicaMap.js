const multiplicaPorDez = (numeros) =>{
    return numeros *10
}

const arrayNums = [1, 2, 3, 4, 5, 6]

const multiplicados = arrayNums.map(multiplicaPorDez)
console.log(arrayNums);
console.log(multiplicados);