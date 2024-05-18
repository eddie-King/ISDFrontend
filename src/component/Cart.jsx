import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
    






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
                      <tr>
                        <td>
                          <figure className="itemside">
                            <div className="aside">
                              <img
                                src="assets/images/items/1.jpg"
                                className="img-sm"
                              />
                            </div>

                            <figcaption className="info">
                              <a href="#" className="title text-dark">
                                Some name of item goes here nice
                              </a>
                            </figcaption>
                          </figure>
                        </td>

                        <td>
                         1
                        </td>

                        <td>
                          <div className="price-wrap">
                            <var className="price">$1156.00</var>
                        
                          </div>
                        </td>
                        <td className="text-right">
                          <a
                            data-original-title="Save to Wishlist"
                            title=""
                            href=""
                            className="btn btn-light mr-2"
                            data-toggle="tooltip"
                          >

                            {" "}
                            <i className="fa fa-heart"></i>
                          </a>

                          <a href="" className="btn btn-light">
                            {" "}
                            Remove
                          </a>
                        </td>
                      </tr>
                     
            
                    </tbody>
                  </table>
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
