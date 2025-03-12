export class Carrinhodecompra{
    private readonly produtos: Produto[] = []

    inserirProduto(...produtos: Produto[]){
        for(const produto of produtos){
            this.produtos.push(produto)
        }
    }

    quantidadeProduto(): number{
        return this.produtos.length
    }

    valorTotal(): number{
        return this.produtos.reduce((soma, produto)=> soma + produto.preco,0)
    }
}


export class Produto{
    constructor(public nome: string, public preco: number){}
}

const produto1 = new Produto('camiseta' , 10)
const produto2 = new Produto('tenis' , 110)

const carrinhodecompra = new Carrinhodecompra()

carrinhodecompra.inserirProduto(produto1, produto2)

console.log(carrinhodecompra.valorTotal())