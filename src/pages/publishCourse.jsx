import React from 'react'

export default function PublishCourse() {
  return (
    <div className='publish-div'>
        <h1 className='publish-text'>Publish</h1>
        <div className='publish-consent'>
            <input type='checkbox'/>
            <p className='agree-text'> I agree to StudyCreek copyright and license for this content</p>
        </div>
        <button className='publish-button'>Publish</button>
    </div>
  )
}
