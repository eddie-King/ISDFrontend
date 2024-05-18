import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Pagnation = ({totalElement, totalPage}) => {
  const listPageItem = []
  
  for(let i = 0; i< totalPage; i++){
    listPageItem.push(
      <Stack spacing={2}>
    <Pagination count={i+1} size="large" />
  </Stack>
    )
  }
  if(totalPage<=1){
    return null
  }else{
  return (
    <div className='pagnation d-flex justify-content-center align-items-center mb-2'>
    <Stack spacing={2}>
    <Pagination count={totalPage} size="large" />
  </Stack>
  </div>
  )
}
}

export default Pagnation