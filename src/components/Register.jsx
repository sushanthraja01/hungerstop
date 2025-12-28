import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { mail, eye, eyeOff, person, pencil, phoneLandscape, call } from 'ionicons/icons';
import { api_path } from '../helper/Api_path';

const Register = ({fsl,fsh}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const [name, setName] = useState("");
  const togglePassword1 = () => setShowPassword1(!showPassword1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpass, setCpass] = useState("");
  const [pass, setPass] = useState("");


  const handlereg = async(e) => {
    e.preventDefault();
    try {
      if(pass !== cpass){
        alert("Password and Confirm Password are not matching")
        return
      }
      const response = await fetch(`${api_path}vendor/register/`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email,phoneno:phone,username,password:pass,role:"customer",verified:"no"})
      })
      const res = await response.json();
      if(response.ok){
        alert(res);
        setCpass("")
        setEmail("")
        setName("")
        setPass("")
        setPhone("")
        setUsername("")
        fsl
      }else{
        alert(res)
      }
    } catch (error) {
      console.error(error)
      alert("Error Happened")
    }
  }

  return (
    <>
      <button className='rounded-full bg-orange-600 cursor-pointer mt-[10px] ml-[10px] h-[40px] w-[40px]' onClick={fsh}><img src="images/back.png" /></button>
      <div className="flex justify-center items-start h-[calc(100vh-70px)] mt-[-50px] bg-white pt-[50px]">
      <div className="w-[550px] h-[650px] bg-gray-100 border border-black-300 rounded-xl shadow-md flex justify-center items-center">
        <div className="w-full p-10">
          <h2 className=" text-center text-2xl font-bold mb-5">REGISTER</h2>
          <form className="w-full" onSubmit={handlereg}>
            
            <div className="relative mb-8 border-b-2 border-black h-12">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full h-full px-3 bg-transparent outline-none text-black text-base"
                required
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-xl">
                <IonIcon icon={pencil} />
              </span>
            </div>

            <div className="relative mb-8 border-b-2 border-black h-12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full h-full px-3 bg-none outline-none text-black text-base"
                required
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-xl">
                <IonIcon icon={mail} />
              </span>
            </div>

            <div className="relative mb-8 border-b-2 border-black h-12">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full h-full px-3 bg-transparent outline-none text-black text-base"
                required
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-xl">
                <IonIcon icon={call} />
              </span>
            </div>

            <div className="relative mb-8 border-b-2 border-black h-12">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full h-full px-3 bg-transparent outline-none text-black text-base"
                required
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-xl">
                <IonIcon icon={person} />
              </span>
            </div>

            <div className="relative mb-8 border-b-2 border-black h-12">
              <input
                type={showPassword ? 'text' : 'password'}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
                className="w-full h-full px-3 bg-transparent outline-none text-black text-base"
                required
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-xl cursor-pointer"
                onClick={togglePassword}
              >
                <IonIcon icon={showPassword ? eyeOff : eye} />
              </span>
            </div>

            <div className="relative mb-8 border-b-2 border-black h-12">
              <input
                type={showPassword1 ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={cpass}
                onChange={(e) => setCpass(e.target.value)}
                className="w-full h-full px-3 bg-transparent outline-none text-black text-base"
                required
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-xl cursor-pointer"
                onClick={togglePassword1}
              >
                <IonIcon icon={showPassword1 ? eyeOff : eye} />
              </span>
            </div>

            <div className="flex flex-col items-end mt-2 gap-2">
              <button
                type="submit"
                className="w-full h-10 border-2 border-black text-black font-medium transition-transform duration-300 hover:bg-gray-300 hover:scale-105"
              >
                REGISTER
              </button>
            </div>

            <div className="mt-5 text-center text-sm">
              <p>
                I already have an account - <a className="text-black cursor-pointer font-bold" onClick={fsl} >Login</a>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
