import React from 'react'
import image from '../assets/studycreekcolorICON.png'
import { MdOutlineMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import '../styles/Header.css'


export default function Header() {

  return (
    <div className='header'>
         <div className='logo-section'>
            <div className='menuIcon-div'>
              <span className='menuIcon'><MdOutlineMenu/></span>
            </div>
            <div className='header-logo'>
                <img src={image} alt='logo' width='70px'/>
                <h2>Study Creek</h2>
            </div>
            <div className='profileIcon-div'>
              <span className='profileIcon'><CgProfile/></span>
            </div>
        </div>
    </div>
  )
}
