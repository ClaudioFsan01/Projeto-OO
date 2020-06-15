class Lancamento{
    constructor(nome = 'Generic', valor=0){
        this.nome = nome
        this.valor = valor

    }
}

class CicloFinanceiro{
constructor(mes, ano){
    this.mes = mes
    this.ano = ano 
    this.lancamentos = []
}

addLancamentos(...lancamentos){
lancamentos.forEach(l=>this.lancamentos.push(l)) /* O operador (...) concatena o conjunto de parametros em um array que chamamos de 
lancamentos. A função forEach percorre cada elemento do array lancamentos e chama a função  l=>this.addLancamentos.push(l)
 passando para o paramtro l dessa função o elemento atual do array lancamentos. A palavra this aponta para o objeto 
 atual instanciado acessando o array ( this.lancamentos = [])criado no construtor. A função push() adiciona o valor de 
 l no vetor  ( this.lancamentos = [])*/
}

sumario(){
    let valorConsolidado = 0
    this.lancamentos.forEach(l=>{
        valorConsolidado += l.valor
    })
}
}

const salario = new Lancamento('Carlos', 45000)
const contaLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)


//contas.addLancamentos(salario, contaLuz)

contas.addLancamentos(salrio, contaLuz)
console.log(contas.sumario())

