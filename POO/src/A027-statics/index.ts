export class Pessoa {
    static idadePadrao = 0
    static cpfPadrao = '000.000.000-00'

    constructor(
        public nome:string,
        public sobrenome:string, 
        public idade:number, 
        public cpf:string
    ){}

    metodoNormal():void{
        console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao)
    }

    static criaPessoa(nome:string, sobrenome:string): Pessoa{
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
    }
}


const pessoa1 = new Pessoa('rafa', 'arcanjo', 24, '123.345.654-89')
const pessoa2 = Pessoa.criaPessoa('arcajo', 'silva')

pessoa1.metodoNormal()

console.log(pessoa1)
console.log(pessoa2)
