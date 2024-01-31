import React from 'react'
import '../signup.css'
import image from '../assets/studycreekcolorlogo 1.png'

export default function Signup() {
  return (
    <div>
        <div className='logo-heading'>
            <img src={image} alt='logo'/>
            <h2>Study Creek</h2>
        </div>
        <div className='signupfield'>
            <div className='inputfield'>
                <div className='input-div'>
                <h2>Create Your Account</h2> 
            <div class="input-area">
                 <label for="name"><span class="label-style">*First Name</span></label>
                <input type="text" name="name"/>
            </div>
            <div class="input-area">
                 <label for="name"><span class="label-style">*Last Name</span></label>
                <input type="text" name="name"/>
            </div>
                <input type="text" placeholder='*Email Address'/>
                <input type="text" placeholder='*Phone Number' />
                <input type="text"  placeholder='*Country'/>
                <input type="password" placeholder='*Password'/>
                <input type="password" placeholder='*Confirm Password' />
                <button className='signup-button'>Submit</button>
            </div>
                </div>
                
        </div>
        <div>

        </div>
    </div>
  )
}
