const listaDeChamada = ['João', 'Ana', 'Caio','Lara', 'Marjorie', 'Leo'];

//remover Ana e Caio e adicionar Rodrigo
//listaDeChamada.splice(1, 2, 'Rodrigo');
//splice -> índice inicial, número de elementos 
//que quer remover, colocar um elemento
listaDeChamada.splice(2, 0, 'Rodrigo');
console.log(listaDeChamada);

