const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const resultado = cidades.filter(function(cidade) {
    return cidade.length <= 8
})

console.log(resultado.join(', '))