import React from 'react'
import '../styles/dashboard.css'
import Published from '../components/published'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

  const navigate = useNavigate()
  return (

    <div className='dashboard'>
       <div className='first-div'>
          <h2>Dashboard</h2>
          <button onClick={()=>navigate('/details')}>Start a New Course</button>
        </div>
        <p className='welcome-text'>Welcome to your LMS where we can help you manage your contents as a teacher on study creek</p>
       
        <div className='search-div'>
          <h2 className='overview'>Course Overview</h2>
          <div className='search'>
              <input type='search' placeholder='search by course title'/>
          </div>
        </div>
        <div className='published-div'>
          <h2>Published Courses (1)</h2>
          <Published/>
        </div>
           
    </div>
  )
}
