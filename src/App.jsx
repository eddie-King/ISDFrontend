import { useState } from 'react'
import './App.css'
import Homepage from './component/HomePage/Homepage'
import Login from './component/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './component/Register'
import News from './component/HomePage/News';
import Tops from './component/HomePage/Tops';
import Bottoms from './component/HomePage/Bottoms';
import Accessories from './component/HomePage/Accessories';
import ProductDetailPage from './component/ProductDetailPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/news' element={<News/>} />
                <Route path='/tops' element={<Tops/>} />
                <Route path='/bottoms' element={<Bottoms/>} />
                <Route path='/accessories' element={<Accessories/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/product-detail/:productId' element={<ProductDetailPage/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
