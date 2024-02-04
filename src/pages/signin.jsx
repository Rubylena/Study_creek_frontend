import React, {useState} from 'react'
import image from '../assets/studycreekcolor.png'
import '../signin.css'
import { IoIosArrowRoundBack, IoLogoGoogle } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { toast } from "react-toastify";


export default function Signin() {
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    function signup(){
        navigate('/signup')
    }

    function signInWithEmail() {
        navigate('/welcome-back');
      }

    

    const facebookLogin = ()=>{
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const googleLogin =()=>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then((result)=>{
            console.log(result)
            localStorage.setItem("token", result?._tokenResponse?.idToken);
            toast.success('Sign-in successful!');
      
            navigate("/user-details")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div className='signup'>
          <h1 className='back-arrow' onClick={()=> navigate(-1)}><IoIosArrowRoundBack/></h1>
         <div className='signup-content'>
            <img src={image} alt='studycreek-logo' className='studycreek-logo'/>
            <div className='signinText-div'>
                <h3 className='signin-text'>Sign In</h3>
                <p>Enjoy easily accesible reimagined education</p>
            </div>
            <div className='signin-buttons'>
                <button className='button google-button' onClick={googleLogin}><span><IoLogoGoogle/></span> Sign In with Google</button>
                <button className='button linkedin-button' onClick={facebookLogin}><span><ImFacebook2/></span> Sign In with Facebook</button>
                <button className="button email-button" onClick={signInWithEmail}><span> <TfiEmail /></span>{' '} Sign In with Email</button>        
            </div>
        
            <p className='newtext'>New here? <span onClick={()=>{setShowModal(!showModal)}}>Create Account</span></p>
            {  showModal &&  <div className='signup-modal'>
                <div className='modal-content'>
                    <h3>Sign Up for free!</h3>
                    <p className='text'>I'm a </p>
                    <div className='modal-buttons'>
                        <button className='identity' onClick={signup}>Teacher</button>
                        <button className='identity' onClick={signup}>Student</button>
                    </div>
                </div>
                <p className='consent-text'>By proceeding you agree to our
             <a href>Terms & Condition and privacy policy</a></p>
            </div>}
            </div>
        </div>
    
   
  )
}
