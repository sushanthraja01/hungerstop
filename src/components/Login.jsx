import { IonIcon } from '@ionic/react'
import { eye, eyeOff, person, close } from 'ionicons/icons'
import React, { useState,useEffect } from 'react'
import { api_path } from '../helper/Api_path'

const Login = ({fsr,fsfp,fsh,onClose}) => {

  const [user,setUser] = useState("")
  const [pass,setPass] = useState("")
  const [spass,setSpass] = useState(false)
  const toggle = () => setSpass(!spass)

  const al = (token) => {
    localStorage.setItem("token",token)
    fsh()
  }

  const hse = async() => {
    if(confirm("Existing Session You already have an existing session.Do you want to logout from the existing session and login here?")){
      const response = await fetch(`${api_path}vendor/hsl`,{
        method : "PATCH",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({user,password:pass})
      })
      const res = await response.json();
      if(response.ok){
        alert(res.mssg)
        al(res.token)
      }else{
        alert(res.mssg)
      }
    }
  }

  const hl = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api_path}vendor/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({user:user,password:pass})
      })
      const res = await response.json();
      if(response.ok){
        if(res.role=="vendor"){
          alert("Vender Cannot login to here")
        }else if(res.mssg=="Login Successful"){
          alert(res.mssg)
          al(res.token)
        }else if(res.mssg=="Already have an exsisting session"){
          hse()
        }else{
          alert(res.mssg)
        }
      }else{
        alert(res.mssg)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    document.body.classList.add('overflow-hidden')
    return ()=>{
      document.body.classList.remove('overflow-hidden')
    };
  },[])

  return (
    <>
    <div className='border-0 border-red-500 fixed inset-0 bg-black/60 flex items-center justify-center z-50' onMouseDown={onClose}>
      <div className='border-0 border-green-500 w-[350px] bg-gray-100 border border-fray-300 rounded-xl shadow-md flex justify-center items-center' onMouseDown={(e)=>e.stopPropagation()}>
        <div className='w-full p-10 border-0 border-blue-500'>
          <button className='relative -top-8 -right-68 border-1 border-black rounded-lg flex items-center justify-center cursor-pointer' onClick={onClose}><IonIcon className='h-7 w-7' icon={close}/></button>
          <h2 className='text-center text-2xl font-bold mb-8'>LOGIN</h2>
            <form onSubmit={hl}>
              <div className='relative border-b-2 mb-8 h-12'>
                <input 
                  className='w-full h-full px-3 bg-transparent text-base outline-none pr-8'
                  onChange={(e) => setUser(e.target.value)}
                  value={user} 
                  type='text' 
                  placeholder='Email / Username' 
                  required/>
                <span className='absolute right-2 top-1/2 transform -translate-y-1/2 text-xl'>
                  <IonIcon icon={person}/>
                </span>
              </div>
              <div className='relative border-b-2 mb-8 h-12'>
                <input 
                  className='w-full h-full px-3 bg-transparent text-base outline-none pr-8'
                  onChange={(e) => setPass(e.target.value)}
                  value={pass} 
                  type={spass?'text':'password'}
                  placeholder='Password' 
                  required/>
                <span className='absolute right-2 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer' onClick={toggle}>
                  <IonIcon icon={spass?eyeOff:eye}/>
                </span>
              </div>
              <div className="flex flex-col items-end mt-2 gap-2">
                <button className='w-full h-10 ring-2 font-medium transition-transform duration-300 hover:bg-gray-300 hover:scale-105' type="submit">LOGIN</button>
              </div>
              <div className='mt-2 w-full flex items-center justify-end text-sm'>
                <a className='cursor-pointer font-bold' onClick={fsfp}>Forgot Password</a>
              </div>
              <div className='mt-3 w-full flex items-center justify-center text-sm'>
                <p>Don`t have an account - <a className='cursor-pointer font-bold' onClick={fsr}>Register</a></p>
              </div>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
