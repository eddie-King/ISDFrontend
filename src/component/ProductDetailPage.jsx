import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import Image from 'react-bootstrap/Image';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import swal from 'sweetalert'
const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProducts] = useState('')
  const [amount, setAmount]= useState(1);
  const [myCart, setMyCart]= useState([]);
  useEffect(()=>{
        const fetchData = async () => {
          const {data, err} = await axios.get(`http://localhost:8088/products/${productId}`)
          setProducts(data)
          console.log(data)
        }
        fetchData()
  },[])
  const addItems = ()=>{
    if(amount< product.quantity) setAmount(amount => amount +1)
  }
  const decreaseItems = () => {
    if(amount>1) { setAmount(amount => amount -1)}
  }
  
  const addToCart = () => {
    const cartItem = {
      id: productId,
      image: product.imageUrl,
      name: product.name,
      price: product.price,
      amount: amount,
      quantity: product.quantity
    };
    if(localStorage.getItem('access_token') === null)
      {
        swal({
          icon: "info",
          text: "Please login first!",
          
        });
        return;
      }

    if(localStorage.getItem('access_token') !== null){
  
    const storedCart = localStorage.getItem('myCart');
    let cartArray;

    try {
      cartArray = storedCart ? JSON.parse(storedCart) : [];
      if (!Array.isArray(cartArray)) {
        cartArray = [];
      }
    } catch (e) {
      cartArray = [];
    }
    const productExist = cartArray.some(item => item.id === productId)
    if(productExist){
      swal({
        icon: "error",
        text: "This product is already in your cart!",
      })
    }else{
    cartArray.push(cartItem);
    localStorage.setItem('myCart', JSON.stringify(cartArray));
    swal({
      icon: "success",
    });
  }}};
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
            <label htmlFor="amount">Amount:</label>
                <button className='btnQuantity' onClick={decreaseItems}> - </button>
                <p>{amount}</p>
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