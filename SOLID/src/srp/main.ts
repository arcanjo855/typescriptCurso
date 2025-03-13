import { Order } from "./order"
import { ShoppingCart } from "./shopping-cart"

const carrinho = new ShoppingCart()
const order = new Order(carrinho)


carrinho.addItem({ name: 'bone', price: 20 })
carrinho.addItem({ name: 'camisa', price: 30 })
carrinho.addItem({ name: 'caneca', price: 50 })

console.log(carrinho.items)
carrinho.removeItem(2)
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)