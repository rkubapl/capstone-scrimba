import {createContext, useEffect, useState} from "react";

const Context = createContext();

function ContextProvider({ children }) {
    const [images, setImages] = useState([])
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cart")) || [])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    function toggleFavorite(id) {
        console.log(id)
        setImages(prevImages => {
            return prevImages.map(image =>
                image.id === id
                ? {...image, isFavorite: !image.isFavorite}
                : image
            )
        })
        console.log(images )
    }

    function isInCart(id) {
        return cartItems.some(item => item.id === id)
    }

    function addItemToCart(item) {
        setCartItems(prevItems => [...prevItems, item]);
    }

    function removeItemFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    function emptyCart() {
        setCartItems([])
    }


    return (
        <Context.Provider value={{images, toggleFavorite, addItemToCart, removeItemFromCart, isInCart, cartItems, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
