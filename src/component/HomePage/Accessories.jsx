import React, {useEffect} from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import si from "../../assets/Icon search.png";
import ic from "../../assets/Icon account.png";
import icd from "../../assets/Icon cart.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import"./all.css";
const Accessories = () => {
  const [menu, setMenu] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  const newClick = () => {
    navigate("/news");
  };
  const topClick = () => {
    navigate("/tops");
  };
  const bottomClick = () => {
    navigate("/bottoms");
  };
  const accessoriesClick = () => {
    navigate("/accessories");
  };

  const [products, setProducts]= useState([])
    
  useEffect(()=>{
    axios.get("http://localhost:8088/auth/products/list?categoryId=4")
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
      <div style={{ background: "#D9D9D9" }}>
        <div className="d-flex justify-content-end ">
          <div className="p-2">Support</div>
          <div className="p-2">English</div>
          <div className="p-2">Tiếng Việt</div>
        </div>
      </div>

      <div>
        <div className="navbar_container">
          <div className="nav-logo">
            <a href="/">
              <p>ShopNest</p>
            </a>
          </div>
          <ul className="nav-menu">
            <li
              onMouseEnter={() => {
                setMenu("news");
              }}
              onClick={newClick}
            >
              News {menu === "news" ? <hr /> : <></>}{" "}
            </li>
            <li
              onMouseEnter={() => {
                setMenu("tops");
              }}
              onClick={topClick}
            >
              Tops {menu === "tops" ? <hr /> : <></>}{" "}
            </li>
            <li
              onMouseEnter={() => {
                setMenu("bottoms");
              }}
              onClick={bottomClick}
            >
              Bottoms {menu === "bottoms" ? <hr /> : <></>}{" "}
            </li>
            <li
              onMouseEnter={() => {
                setMenu("accessories");
              }}
              onClick={accessoriesClick}
            >
              Accessories {menu === "accessories" ? <hr /> : <></>}{" "}
            </li>
          </ul>

          <div className='nav-search-login-cart'>
                <input type="text" placeholder='Search' name='text' className='input' />
                <img src={si} type = "button" style={{maxWidth: "35px"}}/>
               <img src={ic} type = "button" onClick={handleClick} style={{maxWidth:"35px"}}/>
               <img src={icd} type = "button" style={{maxWidth:"35px"}}/>
            
          </div>
        </div>
      </div>
      
      <div className="container mt-3">
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
                                <Button variant="primary" onClick={()=>gotoDetailPage(product.id)}>View More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
        <div className="row text-center bg-secondary-subtle p-4">
        <div className="col-3">
          <h5>About us</h5>
          <ul className='list-unstyled'>
            <li className="mb-2">
              Information
            </li>
          </ul>
        </div>

        <div className="col-3">
          <h5>Help</h5>
          <ul className='list-unstyled'>
            <li className="mb-2">
              FAQ
            </li>
            <li className="mb-2">
              Return Policy
            </li>
            <li className="mb-2">
              Privacy Policy
            </li>
            <li className="mb-2">
              Assesibility
            </li>
          </ul>
        </div>

        <div className="col-3">
          <h5>Account</h5>
          <ul className='list-unstyled'>
            <li className="mb-2">
              Profile
            </li>
          </ul>
        </div>
        
        <div className="col-3">
          <h5>Subcribe</h5>
          <ul className='list-unstyled'>
            <li className="d-inline-block">
             Sign up and be the first-in-the know about new arrivals,
             promotions, in-store events and more.
            </li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default Accessories;
