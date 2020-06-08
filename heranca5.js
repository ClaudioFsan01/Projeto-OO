/* Toda função possui um atributo chamado prototype */

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


String.prototype.reverse = function(){
 return this.split('').reverse().join('')
}

/* função split() : Divida uma sequência em substrings usando o separador especificado e retorne-os como uma matriz. 
função reverse() inverte os elementos da matriz
função join() concatena os elementos */

console.log('aulas javascript'.reverse())

Array.prototype.first = function (){
    return this[0]
}

console.log([1,2,3,4].first())

console.log(['a', 'b', 'c'].first())

/* OBS : Não substitua (reescreva) os métodos já existentes nas funções prototipos e tome 
muito cuidado quando for adicionar métodos nessas funções prototipos*/