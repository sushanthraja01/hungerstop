import React, { useState } from 'react'
import '../App.css'
import { api_path, cldname } from '../helper/Api_path'

const Navbar = ({l,fsl,click,setClick,pphoto}) => {

  const [open,setOpen] = useState(false)
  
  const hlogout = async() => {

    if(window.confirm("Logout")){
    const token = localStorage.getItem('token');
    if(token){
      console.log("Hi")
      localStorage.removeItem('token')
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
      }else{
      console.log("Bye")
      const response = await fetch(`${api_path}vendor/logout`,{
        method:"PATCH",
        credentials:"include"
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
  }

  return (
    <>
      <div>
          <div className="flex items-center justify-between bg-orange-600 p-4 shadow-lg h-[70px]">

          <div className='flex h-[70px] w-[35%] justify-between  items-center'>
            <button className='md:hidden flex flex-col gap-1' onClick={()=>setOpen(!open)}>
              <span className='w-5 h-0.5 bg-white'></span>
              <span className='w-5 h-0.5 bg-white'></span>  
              <span className='w-5 h-0.5 bg-white'></span>
            </button>       
            <img className="pt-1 w-40 h-[90px] border-null outline-none outline-none ring-0 focus:outline-none focus:ring-0" src="https://res.cloudinary.com/dme2vkioe/image/upload/v1766327372/download_iqcxuw.png" alt="navbar" />
            <div className='hidden md:flex gap-6 font-semibold tracking-wide'>
              <h2 className='pt-70px text-white font-bold'>Home</h2>
              <h2 className='pt-70px text-white font-bold'>About Us</h2>
              <h2 className='pt-70px text-white font-bold'>Contact Us</h2>
              <h2 className='pt-70px text-white font-bold'>Offers</h2>
            </div>
          </div>
          <div>
            {!l?
            <span><a className='text-white font-bold cursor-pointer' onClick={fsl}>Login</a></span>
            :
            <div className='rounded-full w-12 h-12 flex justify-center items-center' style={{background: `conic-gradient( #000000ff 1000%, #e5e7eb 0)`}}><img className='cursor-pointer h-10 w-10 rounded-full' onClick={hlogout} src={`${cldname}${pphoto}`} alt="Logout" /></div>
            }
          </div>
        </div>
      </div>
      {open && <div className='flex flex-col gap-2 md:hidden overflow-hidden transition-all duration-300 bg-white shadow'>
        <button className='text-left font-semibold hover:text-[#E10600]'>
          Home
        </button>
        <button className='text-left font-semibold'>
          About us
        </button>
        <button className='text-left font-semibold'>
          Contact us
        </button>
        <button className='text-left font-semibold'>
          Offers
        </button>
      </div>}
    </>
        
  )
}

export default Navbar
