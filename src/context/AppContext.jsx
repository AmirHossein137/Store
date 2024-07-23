import { createContext, useContext, useState } from "react";

export const AppContext = createContext({})


export function useAppContext() {
    if (AppContext) {
        return useContext(AppContext)
    }
}

function AppContextProvider({ children }) {

    const [cartItems, setCartItems] = useState('amir')

    return (
        <AppContext.Provider value={{ cartItems }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;