let preco = 19.90
let desconto = 0.4

console.log(19.9 * 0.6)
console.log(preco * (1 - desconto))

console.log("Separação!")
let precoComDesconto = preco *(1-desconto)
console.log(precoComDesconto)

// String (Texto) -> sequencia de símbolos
let nome = "Caderno" 
let categoria = "Papelaria"
console.log("Produto: " + nome 
    + " - Categoria: " + categoria
    + " - Preco: " + preco
    + " - Desconto: " + desconto
    + " - PCD: " + precoComDesconto)