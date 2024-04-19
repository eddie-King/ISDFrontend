import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Search = () => {
    const name = useParams();
    useEffect(()=>{
        response.axios.get(`http://localhost:8088/auth/products/list?name=${name}`)
        

    })
  return (
    <input type="text" placeholder='Search' name='text' className='input' onChange={handleSearchChange}/>
  )
}

export default Search