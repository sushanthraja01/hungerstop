import React from 'react'
import { IonIcon } from '@ionic/react'
import { logoInstagram, logoDiscord, logoYoutube, logoWhatsapp, logoFacebook } from "ionicons/icons";

const Downbar = () => {
  return (
    <>
      <div className='pt-10'>

      </div>
      <div className='bg-black/10 h-[450px] pl-[10%] pr-[15%]'>
        <div className='h-[380px] flex justify-between items-center border-0 border-black'>
          <div className='h-[70%] w-[400px] border-0 border-black'>
              <div className='h-[33%]'>
                  <div className='flex justify-center items-center gap-5'>
                    <img className='h-[30%] w-[20%]' src="https://res.cloudinary.com/dme2vkioe/image/upload/v1766393651/ChatGPT_Image_Dec_21__2025__04_29_11_PM-removebg-preview_jqx3cr.png" />
                    <div className='flex flex-col gap-1'>
                      <h1><b className='text-orange-600 text-4xl'>Hunger Stop</b></h1>
                      <b>Eat more and stay far from hunger</b>
                    </div>
                  </div>
              </div>
            </div>
            <div className='h-[70%] w-[200px] border-0 border-black'>
              <h1><b>Get to Know Us:</b></h1>
              <p className='pt-3'>About Hunger Stop</p>
              <p className='pt-1'>Terms and Conditions</p>
              <p className='pt-1'>Cookie Policy</p>
              <p className='pt-1'>Privacy Policy</p>
            </div>
            <div className='h-[70%] w-[400px] border-0 border-black flex flex-col'>
              <div className='h-[50%] flex gap-10'>
                <div className='border-0 border-black w-[50%]'>
                  <h1><b>Earn Money With Us:</b></h1>
                  <p className='pt-3 cursor-pointer'>how to earn with us</p>
                  <p className='pt-1 cursor-pointer'>Required Documents</p>
                  <p className='pt-1 cursor-pointer'>Join with us and earn</p>
                </div>
                <div className='border-0 border-red-500 w-[50%]'>
                  <h1><b>Contact Us:</b></h1>
                  <p className='pt-3 cursor-pointer'>Email</p>
                  <p className='pt-1 cursor-pointer'>Phone no</p>
                </div>
              </div>
              <div className='pt-10 border-0 border-black h-[20%]'>
                <h1><b>Connect with Us:</b></h1>
                <div className='flex gap-10'>
                  <IonIcon className='w-8 h-18' icon={logoInstagram}/>
                  <IonIcon className='w-8 h-18' icon={logoWhatsapp}/>
                  <IonIcon className='w-8 h-18' icon={logoYoutube}/>
                  <IonIcon className='w-8 h-18' icon={logoDiscord}/>
                  <IonIcon className='w-8 h-18' icon={logoFacebook}/>
                </div>
              </div>
            </div>
        </div>
        <hr />
        <h1><b><center className='pt-5 text-4xl'>Thank`s for visiting Hunger Stop</center></b></h1>
      </div>
    </>
  )
}

export default Downbar
