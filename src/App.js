import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App