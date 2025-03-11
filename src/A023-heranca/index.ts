export class Pessoa {
    constructor(
        public nome:string, 
        private idade:number, 
        protected cpf:string
    ){}

    getIdade():void {
        console.log(this.idade)
    }
    getNome():void {
        console.log(this.nome)
    }
    getCpf():void {
        console.log(this.cpf)
    }
}


export class Aluno extends Pessoa{
    getNome(): string {
        return 'isso vem do aluno ' + this.nome
    }
}
export class Cliente extends Pessoa{
    getNome(): string {
        return 'isso vem do aluno ' + this.cpf
    }
}

const pessoa1 = new Pessoa('rafa', 24, '123.345.654-89')
const aluno1 = new Aluno('rafael', 23, '234')

pessoa1.getNome()
console.log(aluno1.getNome())