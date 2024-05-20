import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import ic from './../assets/Icon account.png'
import icd from './../assets/Icon cart.png'
import Search from './Search';
import './Navbar.css'
import notify from '../ultils/Notify';
const Navbar = () => {
    const [menu, setMenu] = useState("")
    const navigate = useNavigate();
    const handleClick = () => {
     const token = localStorage.getItem('access_token')
     if(token === null){
     navigate("/login")}
     else{
      localStorage.clear()
      notify.success('Logout')

     }
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
    const toCart = () =>{
      navigate("/your-cart")
    }
  return (
    <div>
        
        <div>
        <div className='navbar_container'>
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
                <Search/>
               <img src={ic} type = "button" onClick={handleClick} style={{maxWidth:"35px"}}/>
               <img src={icd} type = "button" onClick={toCart}style={{maxWidth:"35px"}}/>
               <button>Logout</button>
            
          </div>
        </div>
    </div>


    </div>
  )
}

export default Navbar