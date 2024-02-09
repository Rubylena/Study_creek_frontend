import React from 'react'
import image from '../assets/Rectangle 6.png'
import image2 from '../assets/Rectangle 8.png'
import {Link} from 'react-router-dom'

export default function FrontPage() {
  return (
    <div className='frontpage'>
        <div className='frontpage-content'>
            <div className='logo-div'>
            <img src={image} alt='studycreek-logo' className='white-studycreek-logo' width='90px' />
            </div>
            <div>
                <img src={image2} alt='studentImage' className='studentImage'/>
            </div>
            <div className='frontpage-text'>
                <p> Transforming classrooms, empowering minds</p>
                <div className='buttons'>
                <button className='start-button'><Link to='/signin'> Get Started</Link></button>
                </div>
            </div>  
        </div>
    </div>
  )
}
