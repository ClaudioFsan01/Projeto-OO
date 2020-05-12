const a = 1
const b = 2
const c = 3

// Antes da versão S 6 

const obj1 = {a: a, b: b, c: c} // Essa notação permite mudar o nome do atributo 

// Atualmente não é mais necessario

const obj2 = {a, b, c}

console.log(obj1, obj2)

// outros exemplos 
// notação literal de objetos

const nomeAtributo ='nota'
const valorAtributo ='7.87'

const obj3 ={}

obj3[nomeAtributo] = valorAtributo

//console.log(obj3)


// Nova versão 


const obj4 = {[nomeAtributo] : valorAtributo}

console.log(obj4)



const obj5 ={
    // Exemplo na forma antiga padrão chave/valor
    func1 : function (){

    },
    // forma da nova versão S 6
    func2(){

    }
}



console.log(obj5)