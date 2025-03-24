import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header'

function App() {
  return (
    <div className='relative'>
      <Header />

      <div className='px-4'>
        <div className='max-w-7xl mx-auto py-12'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
