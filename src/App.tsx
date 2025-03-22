import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <nav className="flex space-x-4 mb-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Главная
        </Link>
        <Link to="/cart" className="text-blue-500 hover:underline">
          Корзина
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
