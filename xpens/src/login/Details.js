import React from 'react'
import '../login/Details.css'
import TextBox from '../text-box'
import Drop from '../category'
const Details = () => {
  return (
    <div className='xadd'>
        <label><b>Amount : </b></label><TextBox/>
        <label><b>Category: </b></label><Drop/>
    </div>
  )
}

export default Details