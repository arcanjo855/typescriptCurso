import { CartItem } from "./interfaces/cart-item"

export class ShoppingCart {
    private readonly _item: CartItem[] = []

    get items(): Readonly<CartItem[]>{
        return this._item
    }

    
    total(): number{
        return +this._item
        .reduce((total, next) => total + next.price ,0)
        .toFixed(2)
    }

    addItem(item: CartItem): void{
        this._item.push(item)
    }

    removeItem(index: number): void{
        this._item.splice(index, 1)
    }

    
    clear(): void{
        this._item.length = 0
        console.log('carrinho esvaziado')
    }

}

