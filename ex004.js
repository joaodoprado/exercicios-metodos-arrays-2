const numeros = [0, 122, 4, 6, 7, 8, 44];

const ePar = numeros.every(function(numero) {
    return numero % 2 === 0
})

if (ePar) {
    console.log('array válido') 
} else {
    console.log('array inválido')
}