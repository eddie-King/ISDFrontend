import axios from 'axios';
import React, { useState } from 'react'
import './HomePage/homepage.css'
const Search = () => {
    const [input, setInput] = useState('')
    const fetchData = (value) => {
        fetch()
    }
  return (
    <input type="text" placeholder='Search' 
    name='text' className='input' 
    value= {input} 
    onChange={(e) => setInput(e.target.value)}/>
  )
}

export default Search