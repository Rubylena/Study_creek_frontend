import React,{useState} from 'react'
import '../styles/courseDetail.css';
import { useNavigate } from 'react-router-dom';

export default function CourseDetail() {

  const [image, setImage] = useState(null)
  const navigate= useNavigate()

  const uploadImage =(e)=>{
    let reader = new FileReader()

    if (e.target.files && e.target.files[0]) {
      reader.onload = (e)=>{
        setImage(e.target.result)
      }
      reader.readAsDataURL(e.target.files[0])

    }
  }

  console.log(image)
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
             <input type='file' id='file' accept='image/*'
             onChange={uploadImage}/>
             {image && <img alt='' src={image} className='thumbnail-image'/>}
             </div> 
            
            </div>
            
            <button className='next-button'
              onClick={()=>navigate('/upload')}
            >Next</button>

        </div>
    </div>
  )
}
