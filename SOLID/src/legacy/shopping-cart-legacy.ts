type CartItem = { name: string, price: number }
type OrderStatus = 'open' | 'closed'

export class ShoppingCartLegacy {
    private readonly _item: CartItem[] = []
    private _oderStatus: OrderStatus = 'open'

    addItem(item: CartItem): void{
        this._item.push(item)
    }

    removeItem(index: number): void{
        this._item.splice(index, 1)
    }

    get items(): Readonly<CartItem[]>{
        return this._item
    }

    get orderStatus(): OrderStatus{
        return this._oderStatus
    }

    total(): number{
        return +this._item
        .reduce((total, next) => total + next.price ,0)
        .toFixed(2)
    }

    checkout(): void{
        if(this.isEmpty()){
            console.log('seu carrinho esta vazio')
            return
        }

        this._oderStatus = 'closed'
        this.sendMessage('seu pedido foi recebido')
        this.saveOrder()
        this.clear()
    }

    isEmpty(): boolean{
        return this._item.length === 0
    }

    sendMessage(msg: string):void {
        console.log(msg)
    }

    saveOrder():void{
        console.log(`seu pedido teve um total de: ${this._item.length} itens e o valor de ${this.total()} reais`)
    }

    clear(): void{
        this._item.length = 0
        console.log('carrinho esvaziado')
    }

}

const carrinho = new ShoppingCartLegacy()


carrinho.addItem({ name: 'camisa', price: 22 })
carrinho.addItem({ name: 'camisa', price: 22 })
carrinho.addItem({ name: 'camisa', price: 22 })

console.log(carrinho.items)
carrinho.removeItem(2)
console.log(carrinho.total())
console.log(carrinho.orderStatus)
carrinho.checkout()
console.log(carrinho.orderStatus)