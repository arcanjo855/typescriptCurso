
export abstract class Persoangem{
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number
    ){}

    atacar(personagem: Persoangem):void{
        console.log(`${this.nome} esta atacando`)
        this.bordao()
        personagem.perderVida(this.ataque)
    }

    perderVida(forcaAtaque:number):void{
        this.vida -= forcaAtaque
        console.log(`${this.nome} agora tem ${this.vida} de vida`)
    }

    abstract bordao():void
}


export class Guerreira extends Persoangem{
    bordao(): void {
        console.log('aaaaaa')
    }
}
export class Monsto extends Persoangem{
    bordao(): void {
        console.log('bbbbb')
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000)
const monstro = new Monsto('Monstro', 100, 1000)


guerreira.atacar(monstro)
guerreira.atacar(monstro)
monstro.atacar(guerreira)