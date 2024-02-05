import React, {useState} from 'react'
import {useNavigate } from "react-router-dom"
import '../styles/signup.css'
import image from '../assets/studycreekcolorICON.png'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebaseConfig"
import { FaAngleRight } from "react-icons/fa6";

export default function Signup() {

    const[userInfo, setUserInfo] = useState({
        Email: '',
        Password: '', 
        Firstname:'',
        Lastname:'',
        Country:'',
        Phonenumber:''
    })

    const[showSuccessSign, setShowSuccessSign] = useState(false)

    const navigate = useNavigate()

    const handleInputChange= (e)=>{
        const {value, name} = e.target

        setUserInfo(prev=>({
            ...prev,
            [name]: value
        }))
    }

    const createUser =()=>{
        createUserWithEmailAndPassword(auth, userInfo.Email, userInfo.Password)
        .then((userCredential)=>{
            console.log(userCredential)
          updateProfile(auth.currentUser,{
            displayName: userInfo.Firstname + " "+ userInfo.Lastname,
            phoneNumber: userInfo.Phonenumber
          })
        })
        .then(()=>{
          setTimeout(()=>{
            setShowSuccessSign(true)
          }, 1000)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div className='signupPage'>
        <div className='logo-heading'>
            <img src={image} alt='logo' width='70px'/>
            <h2>Study Creek</h2>
        </div>
        
        <div className='signupfield'>
            <div className='inputfield'>
            { showSuccessSign &&
              <div className='signup-sucess'>
                <h2 className='success-text'>Successs!</h2>
                <p>Thank you for signing up, we are happy to have you onboard as a prestigiuos member</p>
                <button className='success-button' onClick={()=>navigate('/welcome-back')}>Sign In <span><FaAngleRight /></span></button>
            </div>}
                <div className= {showSuccessSign? 'blur input-div':'input-div'}>
                    <h2>Create Your Account</h2> 
                    <div class="input-area">
                        <label htmlFor="Firstname"><span class="label-style">*First Name</span></label>
                        <input type="text" name="Firstname"
                            onChange={handleInputChange}
                            value={userInfo.Firstname}
                        />
                    </div>
                    <div className="input-area">
                        <label htmlFor="Lastname"><span class="label-style">*Last Name</span></label>
                        <input type="text" name="Lastname"
                            onChange={handleInputChange}
                            value={userInfo.Lastname}
                        />
                    </div>
                    <div className="input-area">
                        <label htmlFor="Email"><span class="label-style">*Email</span></label>
                        <input type="text"
                            name='Email'
                            onChange={handleInputChange}
                            value={userInfo.Email}
                        />
                    </div>
                    <div className="input-area">
                        <label htmlFor="Phonenumber"><span class="label-style">*Phone Number</span></label>
                        <input type="text" 
                            name='Phonenumber'
                            onChange={handleInputChange}
                            value={userInfo.Phonenumber}
                        />
                    </div>
                    <div className="input-area">
                        <label htmlFor="Country"><span class="label-style">*Country</span></label>
                        <input type="text" 
                            name='Country'
                            onChange={handleInputChange}
                            value={userInfo.Country}
                        />
                    </div>
                    <div className="input-area">
                        <label htmlFor="Password"><span class="label-style">*Password</span></label>
                        <input type="password"
                            name='Password'
                            onChange={handleInputChange}
                            value={userInfo.Password}
                        />
                    </div>
                    <div className="input-area">
                        <label htmlFor="Lastname"><span class="label-style">*Confirm Password</span></label>
                        <input type="password"/>
                    </div>
                    <button className='signup-button'
                        onClick={createUser}>Submit
                    </button>
                </div>
            </div>
                
        </div>
        <div>

        </div>
    </div>
  )
}
