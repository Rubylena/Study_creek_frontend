import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import '../styles/addCourse.css'

export default function AddCourse() {

  const location= useLocation()
  const activepage = location.pathname

  return (
    <div className='addCourse'>
        <h1>Add New Course</h1>
        <div className='addCourse-heading'>
            <h4 id={activepage==='/details'? 'active': ''}>Details</h4>
            <h4 id={activepage==='/upload'? 'active': ''}>Upload</h4>
            <h4 id={activepage==='/publish'? 'active': ''}>Publish</h4>
        </div>
        <Outlet/>
    </div>
  )
}
