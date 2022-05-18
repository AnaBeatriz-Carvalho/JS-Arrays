const arrayOriginal = ['Maria', 'Carlos', 'Eduardo', 'Samanta'];
const arrayConcat = arrayOriginal.concat('André', 'Fernanda');

console.log(arrayConcat);
console.log(arrayOriginal);

console.log('-----------------------------')
const arrayConcat2 = arrayOriginal.concat(['André', 'Fernanda'], ['Ricardo', 'Ana'], ['Marcelo', 'Bia']);

console.log(arrayConcat2);
console.log(arrayOriginal);

console.log('-----------------------------')
const arrayOriginal2 = [50, 60, 70];
const arrayConcat3 = arrayOriginal2.concat([80, [90, 100]]);

console.log(arrayConcat3);
console.log(arrayOriginal2);