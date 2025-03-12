export class Pessoa {
    constructor(
        private nome:string, 
        private idade:number, 
        private _cpf:string
    ){
        this.cpf = this._cpf
    }

    set cpf(cpf: string) {
        console.log('setter chamado')
        this._cpf = cpf
    }
    get cpf():string {
        console.log('getter chamado')
        return this._cpf.replace(/\D/g, '');
    }
}


const pessoa1 = new Pessoa('rafa', 24, '123.345.654-89')


pessoa1.cpf = '111.111.111-98'
console.log(pessoa1.cpf)