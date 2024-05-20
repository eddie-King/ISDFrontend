
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
export default function Checkout() {

  const [cartItems, setCartItems] = useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    const storedCart = localStorage.getItem('myCart')
    if(storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])
  const totalAmount = cartItems.reduce((sum, obj) => sum + obj.amount, 0)
  const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0)



  return (
    <>
    <Header/>
    <Navbar/>

    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>
                    
                    {cartItems.map((item, index) => (
                    <div className="d-flex align-items-center mb-5" key = {index}>
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src={item.image}
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon/>
                        </a>
                        <MDBTypography tag="h5" className="text-primary">
                          {item.name}
                        </MDBTypography>
                        <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                          Amount: {item.amount}
                        </MDBTypography>
                          
                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">${item.price}</p>

                    
                        </div>
                      </div>
                    </div>

                     ))}
                   
                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total: 
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                       ${totalAmount * totalPrice}
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                        label="Card number"
                        type="text"
                        size="lg"
                        defaultValue="1234 5678 9012 3457"
                      />

                      <MDBInput
                        className="mb-5"
                        label="Name on card"
                        type="text"
                        size="lg"
                        defaultValue="John Smith"
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Expiration"
                            type="text"
                            size="lg"
                            minLength="7"
                            maxLength="7"
                            defaultValue="01/22"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Cvv"
                            type="text"
                            size="lg"
                            minLength="3"
                            maxLength="3"
                            placeholder="&#9679;&#9679;&#9679;"
                            defaultValue="&#9679;&#9679;&#9679;"
                          />
                        </MDBCol>
                      </MDBRow>

                      <p className="mb-5">
                        Your information will be under privated !
                        <a href="#!"> obcaecati sapiente</a>.
                      </p>

                      <MDBBtn block size="lg">
                        Buy now
                      </MDBBtn>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>


    <Footer/>
    </>
  );
}