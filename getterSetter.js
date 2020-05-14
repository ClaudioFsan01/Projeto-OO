const sequencia = {
    _valor : 1, // convenção 
    /* OBS : javaScript não suporta sobrecarga de método.
             Somente usando as palavras reservadas get e set que é possivel criar métodos com o mesmo nome
             conforme o exemplo a seguir:  */

    get valor(){return this._valor++},

    set valor(valor){
        if(valor>this._valor){
            this._valor = valor
        }

        }

}


console.log(sequencia.valor, sequencia.valor) /* Embora externamente pareca que estamos acessando o atributo valor diretamente,
internamente o javaScript chama o método get*/ 

sequencia.valor= 1000

console.log(sequencia.valor, sequencia.valor)