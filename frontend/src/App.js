import React from 'react'

import Home from './pages/Home/Home'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import ProductPage from './pages/ProductPage/ProductPage'
import CartPage from './pages/CartPage/CartPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
