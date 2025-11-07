
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Navbar } from "./components/Navbar"
import { CartContextProvider } from './fetured/cart/cartContext'

function App() {

  return (

    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
