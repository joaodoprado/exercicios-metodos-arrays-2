const palavras = ["livro", "caneta", "sol", "carro", "orelha"]


const resultado = palavras.some(function(palavra){
  return palavra.length > 5

})

if (resultado === true) {
    console.log('existe palavra invalida')
   } else {
    console.log('palavra validada')
   }




