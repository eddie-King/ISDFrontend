import { useState } from 'react'
import Homepage from './component/HomePage/Homepage'
import Login from './component/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './component/Register'
import News from './component/News';
import Tops from './component/Tops';
import Bottoms from './component/Bottoms';
import Accessories from './component/Accessories';
import ProductDetailPage from './component/ProductDetailPage';
import SearchResult from './component/SearchResult';
import Cart from './component/Cart';

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
                <Route path='/search/:keyword' element={<SearchResult/>}/>
                <Route path='/your-cart' element= {<Cart/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
