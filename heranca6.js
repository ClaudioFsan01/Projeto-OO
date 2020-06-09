function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 256)
const aula2 = new Aula('Ate breve', 344)

console.log(aula1)
console.log(aula2)

// criando uma função que simula o operador new 
// Essa função recebe uma função construtora e um conjunto de parametros 

function novo(func, ...params){ // o operador (...) concatena um conjunto de parametros em um array 
    const obj = {}

    obj.__proto__ = func.prototype // objeto que criamos apontará para a função construtora ponto prototype

    func.apply(obj, params) /* funcao apply() recebe o objeto e um array com os parametros da função   */
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 256)
const aula4 = novo(Aula, 'Ate breve', 344)

console.log(aula3)
console.log(aula4)






