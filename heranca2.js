// Cadeia de prototipos (prototype chain)

Object.prototype.atrr0 = 'z' // não é recomendado 

const avo={atrr1 : 'a'} //a propriedade __proto__  do objeto avo aponta por padrão para Object.prototype

const pai = {__proto__ : avo, atrr2 : 'b', atrr3 : 'd'} // A propriedade padrão __proto__ do objeto pai aponta para o objeto avo
const filho ={__proto__ : pai, atrr3 : 'c'}

//console.log(filho.atrr1) 

console.log(filho.atrr0,filho.atrr1, filho.atrr2, filho.atrr3) /* No atributo filho.atrr3 é mostrado o valor c 
que foi atribuido dentro do escopo do objeto filho*/

const carro ={
    velocAtual : 0,
    velocMax : 200,
     acelelar(delta){
         if(this.velocAtual + delta <= this.velocMax){
            this.velocAtual += delta
         }else{
             this.velocAtual = this.velocMax
         }
     },
     status() {
         return `${this.velocAtual}Km/h de ${this.velocMax}Km/h`
        }
}

const ferrari ={
    modelo : 'F40',
    velocMax : 350, //shadowing
   // __proto__ : carro
}

const volvo ={
    modelo : 'volvo',
    status() {
        return `${this.modelo} : ${super.status()}` /* a palavra super referencia o objeto prototipo do objeto atual
                                                  e nesse caso o objeto prototipo do objeto volvo é o objeto carro */
    }
}

//console.log(ferrari.acelelar(50), ferrari.status())

// Estabelecendo a relação de prototipos de uma forma diferente 

Object.setPrototypeOf(ferrari, carro) /* estabelecido a relação entre o objeto ferrari e seu objeto prototipo carro */
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelelar(100)
console.log(volvo.status())
volvo.acelelar(150)
console.log(volvo.status())

ferrari.acelelar(250)
console.log(ferrari.status())




