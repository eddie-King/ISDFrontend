import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import si from '../../assets/Icon search.png'
import ic from '../../assets/Icon account.png'
import icd from '../../assets/Icon cart.png'
import hq1 from '../../assets/Ảnh homepage 1.jpg'
import hq2 from '../../assets/Ảnh hompage 2.jpg'
import hq3 from '../../assets/Ảnh homepage 3.jpg'
import hq4 from '../../assets/Ảnh Homepage 4.jpg'
import hq5 from '../../assets/Ảnh hompage 5.jpeg'
import sp1 from '../../assets/SP1.jpg'
import sp2 from '../../assets/SP2.jpg'
import sp3 from '../../assets/SP3.jpg'
import sp4 from '../../assets/SP4.jpg'
import sp5 from '../../assets/SP5.jpg'
import './homepage.css'
import Search from '../Search';
const Homepage = () => {
  const [menu, setMenu] = useState("")
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const handleClick = () => {
   navigate("/login")
  }
  const newClick = ()=>{
    navigate("/news")
  }
  const topClick = ()=>{
    navigate("/tops")
  }
  const bottomClick = ()=>{
    navigate("/bottoms")
  }
  const accessoriesClick = ()=>{
    navigate("/accessories")
  }

  

  
  return (
    <>
    {/*Header*/}
    <div style={{background:"#D9D9D9"}}>
      <div className="d-flex justify-content-end ">
          <div className="p-2">Support</div>
            <div className="p-2">English</div>
            <div className="p-2">Tiếng Việt</div>
          </div>
    </div>

    {/*NavBar*/}
    <div>
        <div className='navbar'>
          <div className='nav-logo'>
          <a href="/"><p>ShopNest</p></a>
          </div>
          <ul className='nav-menu'>
            <li onMouseEnter={()=>{setMenu("news")}} onClick={newClick} >News {menu==="news"? <hr/>: <></>} </li>
            <li onMouseEnter={()=>{setMenu("tops")}} onClick={topClick}>Tops {menu==="tops"? <hr/>: <></>} </li>
            <li onMouseEnter={()=>{setMenu("bottoms")}} onClick={bottomClick}>Bottoms {menu==="bottoms"? <hr/>: <></>} </li>
            <li onMouseEnter={()=>{setMenu("accessories")}} onClick={accessoriesClick}>Accessories {menu==="accessories"? <hr/>: <></>} </li>
          </ul>
          <div className='nav-search-login-cart'>
                <Search onResults={searchResults}/>
                <div>
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map(product => (
                            <li key={product.id}>{product.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No products found.</p>
                )}
            </div>
                <img src={si} type = "button" style={{maxWidth: "35px"}}/>
               <img src={ic} type = "button" onClick={handleClick} style={{maxWidth:"35px"}}/>
               <img src={icd} type = "button" style={{maxWidth:"35px"}}/>
            
          </div>
        </div>
    </div>

    {/*Div3*/}
    <div className='mb-5'>
        <img src={hq1} className= 'img-fluid'/>
    </div>

    {/*Div4*/}
    <div className="d-flex justify-content-evenly mb-5"  >
      <img src={hq2} alt="" className="img-thumbnail rounded" style={{maxWidth:'370px', maxHeight:'469px'}} />
      <img src={hq3} alt="" className="img-thumbnail rounded" style={{maxWidth:'370px', maxHeight:'469px'}}/>
      <img src={hq4} alt="" className="img-thumbnail rounded" style={{maxWidth:'370px', maxHeight:'469px'}}/>
      <img src={hq5} alt="" className="img-thumbnail rounded" style={{maxWidth:'370px', maxHeight:'469px'}} />
    </div>

    {/*div4: button */}
    <div className='mb-5 d-flex justify-content-evenly'>
      <button className="btn btn-outline-primary" type="button">New Arrival</button>
      <button className="btn btn-outline-primary" type="button">Best Seller</button>
      <button className="btn btn-outline-primary" type="button">Outlet</button>

    </div>

    {/*div5: product*/}

    <div className="d-flex justify-content-evenly mb-5"  >
      <img src={sp1} alt="" className="img-thumbnail rounded" style={{maxWidth:'270px', maxHeight:'469px'}} />
      <img src={sp2} alt="" className="img-thumbnail rounded" style={{maxWidth:'270px', maxHeight:'469px'}}/>
      <img src={sp3} alt="" className="img-thumbnail rounded" style={{maxWidth:'270px', maxHeight:'469px'}}/>
      <img src={sp4} alt="" className="img-thumbnail rounded" style={{maxWidth:'270px', maxHeight:'469px'}} />
      <img src={sp5} alt="" className="img-thumbnail rounded" style={{maxWidth:'270px', maxHeight:'469px'}} />
    </div>

     {/*div6: select all*/}
     <div className='mb-5 d-grid gap-2 col-3 mx-auto'>
      <button className="btn btn-primary" type="button">See All</button>
     </div>

      {/*div7: about */}

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
  )
}

export default Homepage