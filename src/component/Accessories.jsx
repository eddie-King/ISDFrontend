import React, {useEffect} from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import './SearchResult'
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Accessories = () => {
 
  const navigate = useNavigate();
 

  const [products, setProducts]= useState([])
    
  useEffect(()=>{
    axios.get("http://localhost:8088/products/list?categoryId=4")
    . then(response =>{
      setProducts(response.data);
      console.log(response.data)
    })
    .catch(error =>
      console.log('Error fetching data', error))
  },[])
  const gotoDetailPage = (id)=>{
    
    navigate("/product-detail/"+id)
  }
   

  return (
    <>
      <Header/>
      <Navbar/>
      
      <div className="container mt-5 mb-5">
            <div className="masonry-grid">
                {products && products.data && products.data.map((product) => (
                    <div className="masonry-grid-item" key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    Price: ${product.price.toFixed(2)}
                                </Card.Text>
                                <Button variant="success" onClick={()=>gotoDetailPage(product.id)}>View More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>

    </>
  );
};

export default Accessories;