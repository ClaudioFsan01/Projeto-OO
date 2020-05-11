// coleção dinâmica de pares chave/valor

// Object é uma função construtor e podemos instanciala (criar um objeto do seu tipo) com o comando new 

const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'  // utilizando identificador
produto.preco = 20

//console.log(produto)

// deletando atributos

delete produto.nome
delete produto['marca do produto']


//console.log(produto)


// criando objetos dentro de outros objetos 

const carro={
    modelo : 'A4',
    preco : 89000,
    proprietario : {
        nome : 'Claudio',
        idade : 36,
        logradouro : {
            Rua : 'Begon',
            numero : 132
        }
    },
     //criando array de objetos dentro do objeto carro
    condutores :[{nome : 'Italo', idade :19}, {nome : 'Fatima', idade : 32}],
    
    // criando uma função dentro do objeto carro
    calcularValorSeguro : function(){
        // 
    }

}


carro.proprietario.logradouro.numero = 1000 
// ou

carro['proprietario']['logradouro']['Rua'] = 'Utupeva'

console.log(carro)

delete carro.proprietario
delete carro.logradouro
delete carro.calcularValorSeguro

console.log(carro)




