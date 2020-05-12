// criando da forma literal 

const obj1 = {}

console.log(typeof obj1)

// instanciando a função Object em js

/*const obj2 = new Object 

console.log(typeof obj2)*/
// ou

console.log(typeof Object)
console.log(typeof new Object)

//Funções construtoras

function Produto(nome, preco, desconto=0.1){
    this.nome = nome // o atributo this.nome está publico pode ser acessado por uma intancia de Produto fora do escopo da funçao 
   // os atributos preco e desconto estão privados não podem ser acessados por uma instancia de Produto fora da função
    this.getPrecoComDesconto = ()=>{return preco * (1-desconto)} // A função this.getPrecoComDesconto  está publica com uso da palavra this
}


const prod1 = new Produto('FordKA', 16.500, 0.05)
const prod2 = new Produto('Positivo', 800)

console.log(prod1.getPrecoComDesconto())
console.log(prod2.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
       // getDesconto() {return ((salario/30)*faltas)}
       //ou
       desconto : function (){return ((salario/30)*faltas)}

    }
}


const func1 = criarFuncionario('Paulo', 1500, 3)

console.log(func1.nome, func1.salario, func1.desconto())

// Object.create 

const obj3 = Object.create(null)

obj3.nome = 'Beto'

console.log(obj3.nome)

console.log(typeof obj3)

// Uma função famosa que retorna objeto 

const fromJSON = JSON.parse('{"info": "Sou um JSON"}') // Converte a String em objeto 

console.log(fromJSON) // acessando como objeto 

console.log(typeof fromJSON)













