import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Cart from "./pages/Cart.jsx"
import Home from "./pages/Home.jsx"
import { CartContextProvider } from "./reducerAndcontext/CartContext.jsx"

function App() {

  return (
    <>
    <CartContextProvider>
       <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter> 
    </CartContextProvider>
    </>
  )
}

export default App
