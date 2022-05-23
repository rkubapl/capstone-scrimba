import {useContext, useState} from "react"

import {Context} from "../Context"
import CartItem from "../components/CartItem"

export default function Cart() {
    const { cartItems, emptyCart } = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = 5.99*cartItems.length
    const totalCostVisible = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const [buttonText, setButtonText] = useState("Place order")

    function placeOrder() {
        setButtonText("Ordering...")

        setTimeout(() => {
            alert("Order placed!")
            emptyCart()

            setButtonText("Place order")
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}

            <p className="total-cost">Total: {totalCostVisible}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>You have no items in cart</p>
            }
        </main>
    )
}
