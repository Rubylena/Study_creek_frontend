import React from 'react'
import '../styles/courseDetail.css'

export default function CourseDetail() {
  return (
    <div className='courseDetail'>
        <h2>Course Detail</h2>
        <div className='details-form'> 
            <div className='details-div'>
             <label className='details-label'> Tiltle:</label>
             <input type='text' className='details-input'/>
            </div>
            <div className='details-div'>
                <label className='details-label'> Description:</label>
                 <textarea type='text' className='details-input'/>
            </div>
             <div className='details-div'>
             <label className='details-label'> Categories:</label>
             <input type='text' className='details-input'/>
            </div>
             <div className='details-div'>
             <h6 className='details-label'>Thumbnail:</h6>
             <div className='file-div'>
             <label htmlFor='file' className='file-label'> Choose Image</label>
             <input type='file' id='file'/>
             </div>
            
            </div>
            
            <button className='next-button'>Next</button>

        </div>
    </div>
  )
}
