const pai = {nome : 'Pedro', corCabelo : 'Preto'}

const filha1 = Object.create(pai) /*  Object.create(pai) cria o objeto filho1 definindo como seu objeto prototipo
o objeto pai passado no parametro */

filha1.nome= 'Clarice' /*Essa alteração fará com que o atributo nome do objeto filha1 passe a ser enumerable true.
Ou seja os atributos mesmo que sejam herdados não são listados por padrão*/

//console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai,{nome: {value : 'Bia', writable: false, enumerable: true }, idade :{
    value: 36, writable: true, enumerable: true}})/* writable: false não permite que o valor do atributo nome
seja modificado. enumerable: true permite que o atributo seja listado.
Nesse caso criamos um objeto filha2 que tem como objeto prototipo o objeto pai e passamos 
no parametro as caracteristicas especificas do objeto filha2.
*/
filha2.nome = 'Carla'
//console.log(filha2.nome, filha2.idade)

filha2.idade =34
//console.log(filha2.nome, filha2.idade)
//console.log(`${filha2.nome} tem cabelos ${filha2.corCabelo}`)

//console.log(Object.keys(filha1))
//console.log(Object.keys(filha2))
/*Object.keys(filha1) Passamos no parametro de Object.keys() um Objeto que contém as propriedades e métodos. 
Pode ser um objeto que você criou ou um objeto DOM (Document Object Model) existente. Retorna os nomes das propriedades 
e métodos da string enumerável do objeto.
*/

for(let key in filha2){
 filha2.hasOwnProperty(key)? console.log(key) : console.log(`Por herança: ${key} `)
}

/* filha2.hasOwnProperty(key) Determina se um objeto tem uma propriedade com o nome especificado.

filha2.hasOwnProperty(key)? se o objeto filha2 tem uma propriedade com o nome especificado passado no parametro
console.log(key) mostra o valor da propriedade se não : console.log(`Por herança: ${key}) mostra o valor 
da propriedade por herança */

