import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Navbar from './Navbar';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './SearchResult.css'
import { useNavigate } from 'react-router-dom';
import Pagnation from './Pagnation';
const SearchResult = () => {
    const {keyword} = useParams();
    const [products, setProducts] = useState({
      data: [],
      totalElement: 0,
      totalPage:0
    })
    const navigate = useNavigate()
    const [priceFrom, setPriceFrom] = useState()
    const [priceTo, setPriceTo]= useState()
    const [sortByPrice, setSortByPrice] = useState('asc')
    useEffect (()=>{
      const fetchProducts = async () => {
        try {
          const {data} = await axios.get(`http://localhost:8088/products/list?name=${keyword}`)
          if (data!== null) {
          setProducts(data)
          products.totalPage = data.totalPage
          products.totalElement = data.totalElement
          }
          if(data&& data.length === 0){
            setProducts([])
          }
        } catch (error){
          console.error('Error fetching products', error)
        }
      }
      fetchProducts();
    }, [keyword])



    const gotoDetailPage = (id)=>{
    
      navigate(`/product-detail/${id}`)
    }
    const Render404 = ()=>{
      return (
        <>
        <Header/>
        <Navbar/>
        <div className="d-flex align-items-center justify-content-center vh-100 mt-1">
            <div className="text-center row">
                <div className=" col-md-6">
                    <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                        className="img-fluid"/>
                </div>
                <div className=" col-md-6 mt-5">
                    <p className="fs-3"> <span className="text-danger"></span> Product not found!</p>
                    <p className="lead">
                        The Product you're looking for doesn't exist.
                    </p>
                    <a href="/" className="btn btn-success">Go Home</a>
                </div>

            </div>
        </div>
        
       
        <Footer/>
        </>
      )
    }
  const RenderProduct = () => { return (
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
                                <Button variant="success" onClick={()=>gotoDetailPage(product.id)} >View More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

    <Pagnation
      totalElement= {products.totalElement}
      totalPage = {products.totalPage}
      />
    <Footer/>
    </>
  )
}

return (
  <>
  {products !==null ? <Render404/>: <RenderProduct/>}
  </>
)

}





export default SearchResult