import React from 'react'
import { Outlet } from 'react-router-dom'
import '../styles/addCourse.css'

export default function AddCourse() {
  return (
    <div className='addCourse'>
        <h1>Add New Course</h1>
        <div className='addCourse-heading'>
            <h4>Details</h4>
            <h4>Upload</h4>
            <h4>Publish</h4>
        </div>
        <Outlet/>
    </div>
  )
}
