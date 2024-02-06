import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UploadCourse() {

    const navigate = useNavigate()
  return (
    <div className='upload'>
        <h1 className='upload-course'>Upload Content</h1>
        <div className='upload-div'>
                <label className='upload-label'> File format:</label>
                <select className='upload-input'>
                    <option></option>
                </select>
        </div>
        <div className='upload-div'>
                <div className='uploadfile-div'>
                <label htmlFor='file' className='uploadfile-label'> Choose File</label>
                <input type='file' id='file'/>
                </div>
        </div>
        <button className='upload-button' onClick={()=>navigate('/publish')}>Upload</button>
    </div>
  )
}
