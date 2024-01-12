import React, { useState } from 'react'
import {
  Home,
  User,
  FileBarChart,LayoutDashboard,
  Search,
  BellDot,
  PanelLeftOpen,
} from 'lucide-react'
import image from '../assets/summer.png'
import {motion} from 'framer-motion'



function Navbar() {
   
  const navLinks=[{icon:Home,text:'Home'},{icon:FileBarChart,text:'New'},{icon:User,text:'Profile'}]
  const [isActive,setIsActive] =useState(1);

  return (
    <motion.div className='h-screen  flex flex-col justify-between px-2
     rounded-md '>
      <div className='h-8 w-8'>
        <img src={image}></img>
      </div>

      <div className='text-[#526D82] space-y-4'>
        <a href=''>
          <Search />
        </a>
        {navLinks.map((link) => {
          return (
            <div
              className=' w-full  rounded flex
           '
            >
              <a href=''>
                <link.icon />
              </a>
            </div>
          )
        })}
      </div>

      <div className='text-[#526D82] space-y-6'>
        <a href=''>
          <BellDot />
        </a>
        <div onClick={() => setIsExpanded(!isExpanded)}>

          <a href=''>
            <PanelLeftOpen />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar