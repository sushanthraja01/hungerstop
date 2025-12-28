import { IonIcon } from '@ionic/react'
import { mail, person } from 'ionicons/icons'
import React, { useState } from 'react'
import { api_path } from '../helper/Api_path'

const Forgotpass = ({fsl, fsh}) => {

    const [user,setUser] = useState("")
    const [email,setEmail] = useState("")

    const hfp = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${api_path}vendor/forgotpassword/`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username:user,email:email})
            })
            if(response.ok){
                const res = await response.json();
                alert(res)
                if(res=="New password sent to mail"){
                    fsl();
                }
            }else{
                const res = await response.json();
                alert(res)
            }
        } catch (error) {
            console.log(error)
            alert("Something Happened")
        }
    }

  return (
    <>
    <div className='' >
          <div className='w-[350px] bg-gray-100 border border-fray-300 rounded-xl shadow-md flex justify-center items-center border-0 boder-red-500' onMouseDown={fsh}>
            <div className='w-full p-10 border-2 border-blue-500' onMouseDown={(e)=>e.stopPropagation()}>
              <h2 className='text-center text-2xl font-bold mb-8'>Forgot Password</h2>
                <form onSubmit={hfp}>
                  <div className='relative border-b-2 mb-8 h-12'>
                    <input 
                      className='w-[calc(100%-7%)] h-full px-3 bg-transparent text-base outline-none'
                      onChange={(e) => setUser(e.target.value)}
                      value={user} 
                      type='text' 
                      placeholder='Username' 
                      required/>
                    <span className='absolute right-2 top-[55%] transform -translate-y-1/2 text-xl'>
                      <IonIcon icon={person}/>
                    </span>
                  </div>
                  <div className='relative border-b-2 mb-8 h-12'>
                    <input 
                      className='w-[calc(100%-7%)] h-full px-3 bg-transparent text-base outline-none'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email} 
                      type='text'
                      placeholder='Email' 
                      required/>
                    <span className='absolute right-2 top-[55%] transform -translate-y-1/2 text-xl cursor-pointer'>
                      <IonIcon icon={mail}/>
                    </span>
                  </div>
                  <div className="flex flex-col items-end mt-2 gap-2">
                    <button className='w-full h-10 ring-2 font-medium transition-transform duration-300 hover:bg-gray-300 hover:scale-105' type="submit">Request New Password</button>
                  </div>
                  <div className='mt-2 w-full flex items-center justify-end text-sm'>
                    <a className='cursor-pointer font-bold' onClick={fsl}>Login</a>
                  </div>
                </form>
            </div>
          </div>
        </div>
    </>
    
  )
}

export default Forgotpass
