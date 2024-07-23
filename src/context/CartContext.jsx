import { createContext, useState } from "react";

export const CartContext = createContext({})

function CartContextProvider({ children }) {

    const [cartItems, setCartItems] = useState('amir')

    return (
        <CartContext.Provider value={{ cartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;