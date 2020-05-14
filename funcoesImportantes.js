
/*OBS : Objeto é uma coleção dinamica de chaves e valores */
const Pessoa ={
    nome : 'Rebeca',
    idade : 2,
    peso : 13
}

console.log(Object.keys(Pessoa)) // retorna os nomes das chaves(atributos) e métodos do objeto
console.log(Object.values(Pessoa)) // retorna os valores atribuidos às chaves(atributos) do objeto

console.log(Object.entries(Pessoa)) // retorna os nomes das chaves(atributos) e os valores atribuidos às chaves do objeto

Object.entries(Pessoa).forEach(([chave,valor]) => {     /* A função forEach() chama a função callback para cada elemento passando 
                                                          os parametros chave e valor do objeto*/
  return console.log(`${chave} : ${valor}`)
});


Object.defineProperty(Pessoa, 'dataNascimento',{ 
    /* Adiciona a propriedade no objeto e podemos definir as caracteristicas dessa propriedade */
    enumerable : true, // A propriedade dataNascimento será listada como chave(atributo) do objeto Pessoa
    Writable : false, // Writable : false  não aceita ser modificada
    value : '01/01/2019' // atribuindo uma data à nova propriedade
}) 

Pessoa.dataNascimento = '29/01/1952' // não aceita o novo valor devido o status Writable : false

console.log(Pessoa)

//Object.assign (ECMAScript 2015)

const destino ={ a: 1}
const obj1 ={b : 2}
const obj2 = {c : 3, d :4, a: 5}

console.log(Object.assign(destino,obj1, obj2)) /*Object.assign() adiciona no objeto de destino as chaves(atributos)
                                                 e os valores dos demais objetos passado no parametro   */



