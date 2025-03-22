import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
