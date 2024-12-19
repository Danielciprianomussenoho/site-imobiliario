import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
//import { property } from '../components/export'
 import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkedAlt, FaVideo, FaCamera} from 'react-icons/fa'
 import { MdSpaceDashboard } from 'react-icons/md'
 import AOS from 'aos'
 import "aos/dist/aos.css"


const Properties = () => {

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
    <div>Properti</div>
  )
}

export default Properties