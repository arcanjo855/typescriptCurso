import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCart } from "./shopping-cart";

export class Order{
    private _oderStatus: OrderStatus = 'open'

    constructor(private readonly cart: ShoppingCart){}

    get orderStatus(): OrderStatus{
        return this._oderStatus
    }

    
    checkout(): void{
        if(this.isEmpty()){
            console.log('seu carrinho esta vazio')
            return
        }

        this._oderStatus = 'closed'
        this.sendMessage(`total do pedido: ${this.cart.total()}, total do pedido com desconto: ${this.cart.totalWithDiscount()}`)
        this.saveOrder()
        this.cart.clear()
    }

    isEmpty(): boolean{
        return this.cart.items.length === 0
    }

    //
    sendMessage(msg: string):void {
        console.log(msg)
    }

    //
    saveOrder():void{
        console.log(`pedido salvo com sucesso`)
    }

    
}