import React, { useEffect, useState } from 'react'
import Slidinghotels from '../components/Slidinghotels'
import Register from '../components/Register';
import Login from '../components/Login';
import Forgotpass from '../components/Forgotpass';
import Products from '../components/Products';

const Body = ({fsl,fsr,fsfp,fsh,sr,sl,sfp,sh}) => {
  return (
    <div className='body-sec'>
      {sr && <Register fsl={fsl} fsh={fsh}/>}
      {sl && <Login onClose={fsh} fsr={fsr} fsfp={fsfp} fsh={fsh}/>}
      {sfp && <Forgotpass fsl={fsl} fsh={fsh}/>}
      <div className='pt-5'></div>
      {sh && <Slidinghotels />}
      {sh && <Products />}
      
    </div>
  )
}

export default Body
