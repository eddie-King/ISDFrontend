import React from 'react'
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
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
const Homepage = () => {


  return (
    <>
    {/*Header*/}
     <Header/>

    {/*NavBar*/}
    <Navbar/>
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

      <Footer/>
    </>
  )
}

export default Homepage