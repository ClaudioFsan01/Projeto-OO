class Avo{
    constructor(sobrenome='Não informado'){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao='Professor'){
        super(sobrenome) // chamando a função construtora ou construtor da classe Avo
       this.profissao = profissao        
    }
}

class Filho extends Pai{
constructor(nome='Generic', sobrenome, profissao){
    super(sobrenome, profissao) // chamando a função construtora Pai ou construtor da classe Pai
    this.nome = nome
}
}

console.log(new Filho())