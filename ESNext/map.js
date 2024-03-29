const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', {framework: true})

console.log(tecnologias.nome) // chamada errada
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // quantos elementos tem dentro
