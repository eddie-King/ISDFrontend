import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
      const storedCart = localStorage.getItem('myCart')
      if(storedCart) {
        setCartItems(JSON.parse(storedCart))
      }
    }, [])
    const removeFromCart = (index) =>{
      const storedCard = localStorage.getItem('myCart')
      if (storedCard){
        let cartArray = JSON.parse(storedCard)
        if (Array.isArray(cartArray) && index >=0 && index< cartArray.length){
          cartArray.slice(index, 1)
          localStorage.setItem('myCart', JSON.stringify(cartArray))
        }
      }
    }

    const gotoDetailPage = (id)=>{
    
      navigate("/product-detail/"+id)
    }

  return (
    <>
      <Header />
      <Navbar />

      <div className="App mt-4 mb-5">
        <section className="section-pagetop bg">
          <div className="container">
            <h2 className="title-page">Shopping cart</h2>
          </div>
        </section>

        <section className="section-content padding-y">
          <div className="container">
            <div className="row">
              <main className="col-md-9">
                <div className="card">
                  <table className="table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>
                        <th scope="col" className="text-right" width="200">
                          {" "}
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartItems.map( (item, index) => (
                      <tr key = {index}>
                        <td>
                          <figure className="itemside">
                            <div className="aside">
                              <img
                                src={item.image}
                                className="img-sm"
                                width="50%"
                              />
                            </div>

                            <figcaption className="info">
                              <a onClick={()=>gotoDetailPage(item.id)}  className="title text-dark ">
                                {item.name}
                              </a>
                            </figcaption>
                          </figure>
                        </td>

                        <td>
                         {item.amount}
                        </td>

                        <td>
                          <div className="price-wrap">
                            <var className="price">${item.price * item.amount}</var>
                        
                          </div>
                        </td>
                        <td className="text-right">
                          <button
                            className="btn btn-light mr-2"
                          >
                            <i className="fa fa-heart"></i>
                          </button>

                          <button href="" className="btn btn-light" onClick={removeFromCart(index)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                     ))}
            
                    </tbody>
                  </table>
                        <div className="card-body border-top">
                          
                          <a href="/check-out" className="btn btn-success float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
                      </div> 
                </div>
              </main>
            </div>
          </div>
        </section>

    
      </div>

      <Footer />
    </>
  );
};

export default Cart;
