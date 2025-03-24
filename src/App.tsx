import { Routes, Route } from 'react-router'
import Header from './components/layout/Header'
import { lazy } from 'react';

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

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
