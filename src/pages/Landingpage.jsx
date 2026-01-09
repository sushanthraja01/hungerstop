import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Downbar from '../components/Downbar'
import { api_path } from '../helper/Api_path'

const Landingpage = () => {  

  const [sl,setSl] = useState(false)
  const [sr,setSr] = useState(false)
  const [sfp,setSfp] = useState(false)
  const [sh,setSh] = useState(true)
  const [l,setL] = useState(false)
  const [db,setDb] = useState(true)
  const [click,setClick] = useState(false)
  const [pphoto,setPphoto] = useState("")
  const [loading,setLoading] = useState(false)
    
  const fsr = () => {
    setSfp(false);
    setSh(true);
    setSl(false);
    setDb(true);
    setSr(true);
    setClick(!click)
  }

  const fsl = () => {
    setSl(true);
    setClick(!click)
  }

  const fsfp = () => {
    setSr(false);
    setSl(false);
    setDb(true);
    setSh(true);
    setSfp(true);
    setClick(!click)
  }

  const fsh = () => {
    setSr(false);
    setSl(false);
    setSfp(false);
    setDb(true);
    setSh(true);
    setClick(!click)
  }

  const ctv = async() => {
    const token = localStorage.getItem('token')
    if(!token){
      const response = await fetch(`${api_path}vendor/vt`,{
        method:"GET",
        credentials: "include",
        })
            if(response.ok){
          const res = await response.json()
          setPphoto(res.profile)
          setL(true)
        }else{
          localStorage.removeItem('token')
          setL(false)
        }
    }else{
      const response = await fetch(`${api_path}vendor/vt`,{
        method:"GET",
        headers:{
          "token":token
        }
      })
        if(response.ok){
        const res = await response.json()
        setPphoto(res.profile)
        setL(true)
      }else{
        localStorage.removeItem('token')
        setL(false)
      }
      }
  }

  
  useEffect(()=>{
    ctv()
  },[click])


  return (
    <div>
      <Navbar l={l} fsl={fsl} click={click} setClick={setClick} pphoto={pphoto}/>
      <Body fsl={fsl} fsr={fsr} fsfp={fsfp} fsh={fsh} sr={sr} sl={sl} sh={sh} sfp={sfp}/>
      {db && <Downbar />}
    </div>
  )
}

export default Landingpage
