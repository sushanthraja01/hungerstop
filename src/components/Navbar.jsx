import React from 'react'
import '../App.css'
import { api_path, cldname } from '../helper/Api_path'

const Navbar = ({l,fsl,click,setClick,pphoto}) => {

  console.log(pphoto)

  const hlogout = async() => {

    if(confirm("Logout")){
      const token = localStorage.getItem('token');
    localStorage.removeItem('token')

    if(!token){
      alert("Please Login First")
      return
    }
    
    const response = await fetch(`${api_path}vendor/logout`,{
      method:"PATCH",
      headers:{
        'token':`${token}`
      }
    })

    const res = await response.json()
    if(response.ok){
      setClick(!click)
      alert("Logout Success")
    }else{
      setClick(!click)
      alert(res)
    }
    }
  }

  return (
        <div className="flex items-center justify-between bg-orange-600 p-4 shadow-lg h-[70px]">
          <div className='flex h-[70px] w-[35%] justify-between  items-center'>          
            <img className="pt-1 w-40 h-[90px] border-null outline-none outline-none ring-0 focus:outline-none focus:ring-0" src="https://res.cloudinary.com/dme2vkioe/image/upload/v1766327372/download_iqcxuw.png" alt="navbar" />
            <h2 className='pt-70px text-white font-bold'>Home</h2>
            <h2 className='pt-70px text-white font-bold'>About Us</h2>
            <h2 className='pt-70px text-white font-bold'>Contact Us</h2>
            <h2 className='pt-70px text-white font-bold'>Offers</h2>
          </div>
          {!l?
          <span><a className='text-white font-bold cursor-pointer' onClick={fsl}>Login</a></span>
          :
          <div className='rounded-full w-12 h-12 flex justify-center items-center' style={{background: `conic-gradient( #000000ff 1000%, #e5e7eb 0)`}}><img className='cursor-pointer h-10 w-10 rounded-full' onClick={hlogout} src={`${cldname}${pphoto}`} alt="Logout" /></div>
          }

        </div>
  )
}

export default Navbar
