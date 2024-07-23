import { createContext, useContext, useState } from "react";
import Product from '../data/data';

export const AppContext = createContext({})


export function useAppContext() {
    if (AppContext) {
        return useContext(AppContext)
    }
}

function AppContextProvider({ children }) {
    const [cartItems, setCartItems] = useState('amir')
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

    return (
        <AppContext.Provider value={{ cartItems, search, setSearch , result , setSelected }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;