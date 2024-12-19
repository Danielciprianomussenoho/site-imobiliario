import React, { useEffect } from 'react'
import aboutimg from "../assets/about.jpg"
import {useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import "aos/dist/aos.css"


const About = () => {

  
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
    <section id='about' className={`${darkMode ? "dark bg-black" : "light bg-transparent"} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
    <div>
      <img data-aos="zoom-in" src={aboutimg} alt="about img" className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
    </div>
    <div className='flex flex-col justify-center items-start gap-8'>
      <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>WHO WE ARE</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>We help clients buy and sell houses since 1993</h1>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-xl text-gray-600 dark:text-white text-justify' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident suscipit inventore neque necessitatibus in aperiam quae dolorum ullam adipisci exercitationem veritatis, atque hic molestiae explicabo aliquid? Ipsam pariatur nihil recusandae.
      </p>
      <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl  cursor-pointer transform hover:scale-110 transition-transform duration-300'>VIEW MORE</button>
      
    </div>
    
    </section>
  )
}

export default About