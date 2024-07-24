import { createContext, useContext, useState } from "react";
import Product from '../data/data';

export const AppContext = createContext({})


export function useAppContext() {
    if (AppContext) {
        return useContext(AppContext)
    }
}

function AppContextProvider({ children }) {
    const [cartItems, setCartItems] = useState(
        localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : []
    )
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState('')

    const filterItemsBySearch = Product.filter(item => item.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1)


    function filteredProducts(Product, search, selected) {
        let filteredItems = Product;
        if (search) {
            filteredItems = filterItemsBySearch;
        }
        if (selected) {
            filteredItems = filteredItems.filter(({ category, company, color }) => (
                selected === category ||
                selected === company ||
                selected === color
            ))
        }

        return filteredItems
    }

    const result = filteredProducts(Product, search, selected)



    const addToCart = (product) => {
        const quantity = cartItems.find((elem) => elem.id === product.id)?.quantity;
        if (quantity === undefined) {
            setCartItems(prev => {
                return [...prev, { ...product, quantity: 1 }]
            })
        } else {
            setCartItems(cartItems.map(cart => cart.id === product.id ? { ...cart, quantity: cart.quantity += 1 } : cart))
        }
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const Increase = (id) => {
        cartItems.map(item => {
            if (item.id === id) {
                return item.quantity += 1
            }
        })
        setCartItems([...cartItems])
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const Decreament = (id) => {
        cartItems.map(item => {
            if (item.id === id) {
                item.quantity === 1 ? item.quantity === 1 : item.quantity -= 1
            }
        })

        setCartItems([...cartItems])
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    return (
        <AppContext.Provider
            value={{ cartItems, search, setSearch, result, setSelected, addToCart, Increase, Decreament }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;