// Object.preventExtensions

const produto = Object.preventExtensions({
    nome : 'Qualquer', preco : 1.99 , tag : 'promoção'
}) 
/* Object.preventExtensions() permite alterar os valores dos atributos do objeto mas não permite 
inserir novos atributos(novas chaves e valores) porem é possivel excluir atributos  */
console.log('Extensivel : ', Object.isExtensible(produto))
/*Object.isExtensible(produto) verifica se é possivel inserir novas chaves e valores no objeto 
nesse caso o resultado é falso */

produto.nome = 'Borracha'
produto.descricao ='Borracha escolar branca'
delete produto.tag

console.log(produto)

/* Object.seal  = selar
Não permite inserir ou excluir atributos no objeto mas permite alterar seus valores 
*/

const pessoa1 = Object.seal({nome : 'Julia', idade : 35})

console.log(Object.isSealed(pessoa1)) //Object.isSealed(pessoa1)  verifica se o objeto está selado 

pessoa1.endereco = 'saviana 222'

delete pessoa1.idade

pessoa1.nome = 'Rosa'

console.log(pessoa1)

//Object.freeze = selado + não permite alterar os valores dos atributos do objeto


