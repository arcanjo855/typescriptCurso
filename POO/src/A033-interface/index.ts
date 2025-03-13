interface tipoNome {
    nome: string,
}

interface tipoSobrenome {
    sobrenome: string,
}

interface tipoNomeCompleto {
    nomeCompleto():string
}

interface TipoPessoa2 extends tipoNome, tipoSobrenome, tipoNomeCompleto{}

export class Pessoa implements TipoPessoa2 {
    constructor(public nome: string, public sobrenome: string){}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }
}



const pessoa1 = new Pessoa('rafa', 'eu')

console.log(pessoa1.nomeCompleto())