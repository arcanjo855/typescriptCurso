export class Escritor{
    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string){}

    get nome(): string{
        return this.nome
    }

    set ferramenta(ferramenta:Ferramenta){
        this._ferramenta = ferramenta
    }

    get ferramenta(): Ferramenta | null{
        return this._ferramenta
    }

    escrever(): void{
        if(this.ferramenta === null){
            console.log('nao posso escrever sem ferramenta')
            return
        }
        this.ferramenta.escrever()
    }
}


export abstract class Ferramenta{
    constructor(private _nome: string){}
    abstract escrever(): void;

    get nome(): string{
        return this._nome
    }
}

export class Caneta extends Ferramenta{
    escrever(): void {
        console.log(`${this.nome} esta escrevendo`)
    }
}

export class MaquinaEscrever extends Ferramenta{
    escrever(): void {
        console.log(`${this.nome} esta digitando`)
    }
}



const escritor = new Escritor('luiz')
const caneta = new Caneta('bic')
const maquinaEscrever = new MaquinaEscrever('maquina')


console.log(escritor)
console.log(caneta)
console.log(maquinaEscrever)

escritor.ferramenta = caneta
escritor.ferramenta = maquinaEscrever
escritor.ferramenta = null
escritor.escrever()