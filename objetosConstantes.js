const pessoa = {nome : 'Pedro'}

console.log(pessoa.nome)

Object.freeze(pessoa) // O objeto é "congelado" , não é possivel efetuar modificações em seus atributos 

pessoa.nome = 'Ana' // O valor do atributo nome não será modificado 

console.log(pessoa.nome) 

// criando o objeto constante 
const pessoa2 = Object.freeze({nome :'Flavio'})

console.log(pessoa2.nome) 

pessoa2.nome = 'Carla'

console.log(pessoa2.nome) 



