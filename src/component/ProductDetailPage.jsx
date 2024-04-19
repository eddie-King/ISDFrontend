import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProducts] = useState('')
  const [quantity, setQuantity]= useState(1);
  
  useEffect(()=>{
        const fetchData = async () => {
          const {data, err} = await axios.get(`http://localhost:8088/auth/products/${productId}`)
          setProducts(data)
        }
        fetchData()
  },[])
  
  const addItems = ()=>{
    if(quantity< product.quantity) setQuantity(quantity => quantity +1)
  }
  const decreaseItems = () => {
    if(quantity>1) { setQuantity(quantity => quantity -1)}
  }
  
  return (
    <>
      <div className="product-layout">
        <div className="image-section" key={product.id}>
          <Col xs={10} md={10}>
          <Image src={product.imageUrl} thumbnail />
        </Col>
          
        </div>
        <div>
          <div className="details-section">
            <div className="row">
              <h2>{product.name}</h2>
              <span>${product.price}</span>
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

          <button className="addCart">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailPage