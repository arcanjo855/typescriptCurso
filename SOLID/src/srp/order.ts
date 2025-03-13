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
        this.sendMessage('seu pedido foi recebido')
        this.saveOrder()
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