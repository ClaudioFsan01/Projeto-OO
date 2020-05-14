const ferrari ={
    modelo : 'F40',
    velocMax : 325,
    
}

const volvo = {
    modelo : 'V40',
    velocMax : 200
} 

/*OBS : Por padrão Cada objeto possui uma propriedade (que vamos falar mais adiante) que aponta para Object.prototype.
O atributo prototype não está disponivel nos objetos mas está disponivel em Object que é uma função.
OBS :

O conceito [[Prototype]] não é a mesma coisa que o atributo prototype que existe dentro das funções.
 [[Prototype]] != prototype
*/

 /*__proto__ atraves dessa propriedade acessamos o Objeto pai(o Objeto prototipo) do objeto atual. 
caso um determinado atributo não seja encontrado dentro do objeto atual ele será procurado no Objeto pai(o Objeto prototipo) 
 e retorna esse valor, essa busca será feita em toda cadeia de Objetos prototipos. */

 console.log(ferrari.__proto__)/*ferrari.__proto__  mostra que o prototipo de ferrari é um objeto vazio */

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) /*Object.prototype.__proto__ retorna false pois Object.prototype
é o objeto mais alto nivel da cadeia portanto __proto__  nesse caso aponta para null */

console.log(Object.prototype.__proto__===null) 