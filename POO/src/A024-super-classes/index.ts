export class Pessoa {
    constructor(
        public nome:string, 
        private idade:number, 
        protected cpf:string
    ){}

    getIdade():void {
        console.log(this.idade)
    }
    getNome():string {
        return this.nome
    }
    getCpf():void {
        console.log(this.cpf)
    }
}


export class Aluno extends Pessoa{
    constructor(
        nome:string, 
        idade:number, 
        cpf:string,
        public sala: number
    ){
        super(nome, idade, cpf)
        this.sala = sala
    }
    getNome(): string {
        console.log('fazendo algo antes');
        return super.getNome()
    }
}
export class Cliente extends Pessoa{
    getNome(): string {
        return 'isso vem do aluno ' + this.cpf
    }
}

const pessoa1 = new Pessoa('rafa', 24, '123.345.654-89')
const aluno1 = new Aluno('rafael', 23, '234', 21)

console.log(aluno1.getNome(), pessoa1, aluno1)