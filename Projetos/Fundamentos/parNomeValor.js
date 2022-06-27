// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Maycon',
    idade: 37,
    peso: 65,
    endereco: {
        logradouro: 'Numa Rua',
        numero: 173
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)