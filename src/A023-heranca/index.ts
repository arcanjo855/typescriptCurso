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

interface TransportType {
moveOrder(): void
}

class BusTransport implements TransportType {
    moveOrder(): void {
        console.log('road')
    }
}

export abstract class TsTransport {
    abstract moveOrder(): void;
} 

const isTransport = (x: any) => x instanceof TsTransport

const tTransport = new TsTransport();

// javascript
class JsTransport {
    moveOrder() {
        throw new Error('not implmentatin')
    }
}

const transport = new JsTransport()
class AirportTransport extends TsTransport {
    constructor (public name) {
        super()
        this.name = name
    } 
    moveOrder() {
        console.log('vooooooou')
    }
}

const airport = new AirportTransport('a')
console.log('isTransport at Airport', isTransport(new AirportTransport()))
console.log(' Airport name ',airport.name)

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