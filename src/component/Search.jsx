import axios from 'axios';
import React, { useState } from 'react'
import si from './../assets/Icon search.png'
import { useNavigate } from 'react-router-dom';
import './Search.css'
const Search = () => {
    
  const [keyword, setKeyword] = useState('')
  const [product, setProduct] = useState(JSON.parse(localStorage.getItem('products')))
  const navigate = useNavigate();
  const handleSearch = async (e) =>{
    e.preventDefault();
    navigate(`/search/${keyword}`)
}

  return (
    <div className='container-input'>
    <form onSubmit={handleSearch}>
    <input type="text" placeholder='Search' 
    name='text' className='input' 
    value= {keyword} 
    onChange={(e) => setKeyword(e.target.value)}
    />
    <button type="submit" className="search-button">
          <img src={si} alt="Search" style={{ maxWidth: "35px" }}/>
        </button>
    </form>
    </div>
  )
}

export default Search