import React from 'react'
import image from '../assets/studycreekcolorICON.png'
import { MdOutlineMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import '../dashboard.css'

export default function Dashboard() {
  return (
    <div>
           <div className='logo-section'>
            <span className='menuIcon'><MdOutlineMenu/></span>
            <img src={image} alt='logo' width='70px'/>
            <h2>Study Creek</h2>
            <span className='profileIcon'> <CgProfile/></span>
        </div>
        
    </div>
  )
}
