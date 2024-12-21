import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useDarkMode } from '../components/DarkModeContext'
import { FaInstagram, FaTwitter, FaYoutube, FaMobile, FaFax, FaArrowUp, FaMoon ,FaSun, FaFacebookF, FaBuilding } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import prop7 from "../assets/prop7.jpg"
import prop8 from "../assets/prop8.jpg"

const Footer = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  },[])

   const {darkMode,toggleDarkMode} = useDarkMode()
  return (
    <>
     <footer className={`${darkMode ? "dark bg-black" : "light bg-gray-800"} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10 `}>
              
                
                <div className="flex flex-col justify-center items-start gap-5 ">
                   <h1 className='text-white text-2xl font-semibold'>About Us</h1>
                   <p className='text-slate-200  text-justify'>Lorem ipsum dolor ipisicing elit. Id magni sunt laborum, perspiciatis quae facere dicta sed repudiandae iste esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas dolorum quo quae repudiandae aliquid! </p>

                   <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
                      <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
                          <FaFacebookF className='size-5'/>
                      </div>
                      <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
                          <FaInstagram className='size-5'/>
                      </div>
                      <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
                          <FaTwitter className='size-5'/>
                      </div>
                      <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
                          <FaYoutube className='size-5'/>
                      </div>                
                   </div>
                   <h1 className='text-white mt-8'>Copyright Real Estate, All Rights Reserved, Daniel Cipriano. </h1>
               </div>
               
                <div className="flex flex-col justify-center items-start gap-5 ">
                   <h1  className='text-white text-2xl font-semibold'>Contact Us</h1>
                    
                    <div className='flex justify-center items-center gap-3'>
                      <FaBuilding className='text-white size-5' />
                      <p className='text-slate-200  text-justify'>10845 Campo grande, av. dom joao sousa 90</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                      <FaMobile className='text-white size-5' />
                      <p className='text-slate-200  text-justify'>+ 351 924 362 234</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                      <FaFax className='text-white size-5' />
                      <p className='text-slate-200  text-justify'>+91 123 678 0912</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                      <IoMdMail className='text-white size-5' />
                      <p className='text-slate-200  text-justify'>myemailoffice93@gmail.com</p>
                    </div>
               </div>
               
                <div className="flex flex-col justify-center items-start gap-5 ">
                   <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
                    <div className='flex justify-center items-center gap-4'>
                        <img className='w-[120px] rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer' src={prop7} alt="" />
                        <div className='flex flex-col gap-2 justify-center items-start'>
                          <h1 className='text-white text-lg'>Villa with amazing view</h1>
                          <p className='text-slate-400'>$ 388.98</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <img className='w-[120px] rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer' src={prop8} alt="" />
                        <div className='flex flex-col gap-2 justify-center items-start'>
                          <h1 className='text-white text-lg'>Sea View Villa</h1>
                          <p className='text-slate-400'>$ 277.98</p>
                        </div>
                    </div>
               </div>  
            </footer>
            {/* slide to top button */}
            <div id='icon-box' className='bg-red-600 p-4 rounded-full cursor-pointer hover:bg-black fixed lg:bottom-12 bottom-6 right-6 '>
                <Link to='hero' spy={true} offset={-100} smooth={true}>
                  <FaArrowUp  className='text-white size-6'/>
                </Link>
            </div>

            {/* dark mode toogle */}
            <div>
              <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6 ' >
                {darkMode ? <FaMoon size={25} className='text-black'/> : <FaSun size={25} className="text-black"/> }
              </button>
            </div>
          </>
  )
}

export default Footer