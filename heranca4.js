function MeuObjeto(){}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
/* Quando criamos um objeto apartir de uma função construtora utilizando o comando new , o prototipo
desse objeto automaticamente aponta para a função que criamos ponto prototype */
console.log(obj1.__proto__ === obj2.__proto__) 


console.log(MeuObjeto.prototype === obj1.__proto__)


/* console.log(MeuObjeto.prototype === obj1.__proto__) esse resultado é true uma vez que obj1 foi criado 
 de uma função construtora MeuObjeto utilizando o comando new sendo assim o atributo __proto__ desse objeto 
  obj1 automaticamente aponta para a função que criamos (MeuObjeto.prototype)*/

MeuObjeto.prototype.nome = 'Anonimo'

MeuObjeto.prototype.falar = function(){
    console.log(`Ola ! Meu nome é : ${this.nome}`) 
}


obj1.falar() /* Nesse caso  ${this.nome}` this aponta para o objeto em questão 
obj1 que herda o atributo nome do prototipo MeuObjeto.prototype */

obj2.nome = 'Claudio'

obj2.falar() /* Nesse caso ${this.nome} this aponta para obj2 que herda o atributo nome que foi reescrito*/

const obj3 ={} /* Desta forma const obj3 ={} estamos criando um objeto na notação literal de objeto 
portanto o ponteiro __proto__ do obj3 aponta por padrão para Object.prototype*/

console.log(obj3)

obj3.__proto__ = MeuObjeto.prototype /* Alterando o objeto prototipo do obj3 de Object.prototype para  MeuObjeto.prototype */


console.log(obj3)

console.log(obj3.falar())

//Resumindo a loucura

//isso aqui é novo

console.log(MeuObjeto.__proto__ === Function.prototype) /* O ponteiro __proto__ de uma função
aponta por padrão para Function.prototype*/

console.log(Function.prototype.__proto__ === Object.prototype)

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)

console.log(Object.prototype.__proto__ === null)

