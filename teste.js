
fetch('https://jsonplaceholder.typicode.com/users')
  .then(resposta => resposta.json())
  .then(dados => {
    dados.forEach(dado => {
      console.log(dado.name);
      console.log(dado.username);
      console.log(dado.email);
      console.log(dado.address.city); 
      console.log(dado.phone);
    });
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  });



async function carregarUsuarios() {
  try {

    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    const dados = await resposta.json();

    dados.forEach(dado => {
      console.log(dado.name);
      console.log(dado.username);
      console.log(dado.email);
      console.log(dado.address.city); 
      console.log(dado.phone);
      console.log('-------------------');
    });
    
  } catch (erro) {
    console.error('Erro na requisição:', erro);
  }
}



function esperar() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Ok");
    }, 3000); 
  });
}

async function executar() {
  const resultado = await esperar();
  console.log(resultado); 
}

carregarUsuarios();
executar();
