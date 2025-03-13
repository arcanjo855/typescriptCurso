type tipoNome = {
    nome: string,
}

type tipoSobrenome = {
    sobrenome: string,
}

type tipoNomeCompleto = {
    nomeCompleto():string
}

export class Pessoa implements tipoNome, tipoSobrenome, tipoNomeCompleto {
    constructor(public nome: string, public sobrenome: string){}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }
}



const pessoa1 = new Pessoa('rafa', 'eu')

console.log(pessoa1.nomeCompleto())