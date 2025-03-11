/* eslint-disable */

export class Empresa {
    public readonly nome: string; // public nao necessario
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cargo:string){
        this.nome = nome;
        this.cnpj = cargo;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    mostrarColaboradores(): void{
        for(const colaboradores of this.colaboradores){
            console.log(colaboradores)
        }
    }

    getNome():string{
        return this.nome
    }
} 


export class Colaborador{
    constructor(public readonly nome:string, public readonly cargo:string){}
}

const empresa1 = new Empresa('arc inc', '33.111.111/0001-01');
const colaborador1 = new Colaborador('rafa', 'funcionario')
const colaborador2 = new Colaborador('rafa', 'chefe')
const colaborador3 = new Colaborador('rafa', 'estagiario')
empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
empresa1.adicionaColaborador(colaborador3)
empresa1.adicionaColaborador({
    nome:'rafa',
    cargo:'faxineiro'
})
empresa1.mostrarColaboradores()
console.log(empresa1.nome, empresa1.getNome())