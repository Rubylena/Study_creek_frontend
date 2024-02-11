import React, {useState} from 'react'
import image from '../assets/studycreekcolorICON.png'
import { MdOutlineMenu } from "react-icons/md";
import { PiUserCircleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import '../styles/Header.css'


export default function Header() {

  const [show, setShow] = useState(false)

  const showClass = ()=>{
      setShow(show=>!show)
  }

  return (
    <div className='header'>
         <div className='logo-section'>
           {show && <div className='sidebar'>
            <VscClose  className='close-icon' onClick={showClass}/>
              <div className='name-div'>
                <span className='sidebar-profile'><PiUserCircleThin /></span>
                <h5>Damilola</h5>
              </div>

              <div className='sidebar-list'>
                <h4>Dashboard</h4>
                <h4>Courses</h4>
                <h4>Settings</h4>
              </div>
            </div>}
            <div className='menuIcon-div'>
              <span className='menuIcon' onClick={showClass}><MdOutlineMenu/></span>
            </div>
            <div className='header-logo'>
                <img src={image} alt='logo' width='70px'/>
                <h2>Study Creek</h2>
            </div>
            <div className='profileIcon-div'>
              <span className='profileIcon'><PiUserCircleThin /></span>
            </div>
        </div>
    </div>
  )
}
