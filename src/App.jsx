import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import Layout from './components/layout/Layout'

function App() {

  const { cartItems } = useContext(CartContext)

  console.log(cartItems)
  return (
    <>
      <Layout>
        <h1>Amir</h1>
      </Layout>

    </>
  )
}

export default App
