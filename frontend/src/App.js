import React from 'react'

import Home from './pages/Home/Home'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import ProductPage from './pages/ProductPage/ProductPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
