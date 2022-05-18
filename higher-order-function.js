console.log("---------------Primeira Etapa---------------")

const loginLuke = () =>{
    let array = [];
    for (i = 0; i < 90000; i++){
        array.push(i);
    }
    return "Usuário Luke foi logado com sucesso";
}
console.log(loginLuke());

const loginAna = () =>{
    let array = [];
    for (i = 0; i < 90000; i++){
        array.push(i);
    }
    return "Usuário Ana foi logado com sucesso";
}

console.log("---------------Segunda Etapa----------------")

const acesso = (nome) =>{
    return `Usuário ${nome} foi logado com sucesso`;
}

const usuarioLogin = (nome) => { //lógica
    let array = [];
    for (i = 0; i < 90000; i++){
        array.push(i);
    }
    return acesso(nome);
}

console.log(usuarioLogin("Ana"));

const diretoriaLogin = (nome) => {
    let array = [];
    for (i = 0; i <900000; i++){
        array.push(i);
    }
    return acesso(nome);
}

console.log(diretoriaLogin("Leia"));

console.log("---------------Terceira Etapa----------------")

const Acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return Acesso(pessoa.nome)
  }
  console.log(login({cargo: `diretoria`, nome: `Leia`}, autentica))
  //As funções acesso e autentica são “chamadas de volta” (ou, em inglês, called back) pela função login; 
 // esse tipo de função é chamada 
  //de “função callback”, sendo a função login a de ordem maior na hierarquia, ou seja, a ”higher order function.