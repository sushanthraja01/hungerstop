import React from 'react'
import { IonIcon } from '@ionic/react'
import {
  logoInstagram,
  logoDiscord,
  logoYoutube,
  logoWhatsapp,
  logoFacebook
} from "ionicons/icons";

const Downbar = () => {
  return (
    <>
      <div className="pt-10"></div>

      <div className="bg-black/10 px-6 md:pl-[10%] md:pr-[15%] py-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start md:items-center">

          {/* Logo Section */}
          <div className="w-full md:w-[400px] flex justify-center md:justify-start">
            <div className="flex items-center gap-4 text-center md:text-left">
              <img
                className="h-16 w-16"
                src="https://res.cloudinary.com/dme2vkioe/image/upload/v1766393651/ChatGPT_Image_Dec_21__2025__04_29_11_PM-removebg-preview_jqx3cr.png"
                alt="Hunger Stop"
              />
              <div>
                <h1 className="text-orange-600 text-2xl md:text-4xl font-bold">
                  Hunger Stop
                </h1>
                <p className="text-sm md:text-base">
                  Eat more and stay far from hunger
                </p>
              </div>
            </div>
          </div>

          {/* Get to Know Us */}
          <div className="w-full md:w-[200px] text-center md:text-left">
            <h1 className="font-bold">Get to Know Us:</h1>
            <p className="pt-3">About Hunger Stop</p>
            <p>Terms and Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
          </div>

          {/* Earn + Contact */}
          <div className="w-full md:w-[400px] flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="font-bold">Earn Money With Us:</h1>
                <p className="pt-3 cursor-pointer">How to earn with us</p>
                <p className="cursor-pointer">Required Documents</p>
                <p className="cursor-pointer">Join with us and earn</p>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="font-bold">Contact Us:</h1>
                <p className="pt-3 cursor-pointer">Email</p>
                <p className="cursor-pointer">Phone no</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="text-center md:text-left">
              <h1 className="font-bold mb-3">Connect with Us:</h1>
              <div className="flex justify-center md:justify-start gap-6">
                <IonIcon className="w-7 h-7" icon={logoInstagram} />
                <IonIcon className="w-7 h-7" icon={logoWhatsapp} />
                <IonIcon className="w-7 h-7" icon={logoYoutube} />
                <IonIcon className="w-7 h-7" icon={logoDiscord} />
                <IonIcon className="w-7 h-7" icon={logoFacebook} />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <h1 className="text-center text-xl md:text-4xl font-bold">
          Thank’s for visiting Hunger Stop
        </h1>
      </div>
    </>
  )
}

export default Downbar
