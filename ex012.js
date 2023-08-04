const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];


const programadoresMaiores20 = pessoas.filter(function(pessoa) {
    return pessoa.profissao === "Programador" && pessoa.idade > 20
})

console.log(programadoresMaiores20)

const jornalistasMaiores30 = pessoas.filter(function(pessoa) {
    return pessoa.profissao === "Jornalista" && pessoa.idade > 30
})

console.log(jornalistasMaiores30)

const profissaoJovens = pessoas.filter(function(pessoa) {
    return pessoa.profissao === "Programador" && pessoa.idade < 30 || pessoa.profissao === "Jornalista" && pessoa.idade < 30
})

console.log(profissaoJovens)