import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import Image from 'react-bootstrap/Image';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProducts] = useState('')
  const [quantity, setQuantity]= useState(1);
  
  useEffect(()=>{
        const fetchData = async () => {
          const {data, err} = await axios.get(`http://localhost:8088/products/${productId}`)
          setProducts(data)
          console.log(data)
        }
        fetchData()
  },[])
  
  const addItems = ()=>{
    if(quantity< product.quantity) setQuantity(quantity => quantity +1)
  }
  const decreaseItems = () => {
    if(quantity>1) { setQuantity(quantity => quantity -1)}
  }
  
  const addToCart = ()=>{
    
    
  }
  return (
    <>

    <Header/>
    <Navbar/>
      <div className="product-layout row mb-5 mt-5">

        <div className="image-section col-5" key={product.id}>
          
          <Image src={product.imageUrl} thumbnail />
        </div>

        <div className='col-7'>
          <div className="details-section ">
            <div className="row">
              <h2>{product.name}</h2>
              <span> ${product.price}</span>
              <p>Quantity: {product.quantity}</p>
              <p>Availability: {product.availability}</p>
            </div>

            <p>Description: {product.description}</p>
            <p className='categoryna'>Category: {product.category?.categoryName || 'No Category'}</p>

            <div className='quantityDiv'>
            <label htmlFor="quantity">Quantity:</label>
                <button className='btnQuantity' onClick={decreaseItems}> - </button>
                <p>{quantity}</p>
                <button className='btnQuantity' onClick={addItems}> + </button>
                </div>

          <button className="addCart" onClick={addToCart}>Add to cart</button>
          </div>
        </div>
      </div>


      <Footer/>
    </>
  )
}

export default ProductDetailPage