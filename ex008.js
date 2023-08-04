const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const frutasFormatadas = frutas.map(function(fruta) {
    return fruta[0].toUpperCase() + fruta.slice(1).toLowerCase()
})

console.log(frutasFormatadas)