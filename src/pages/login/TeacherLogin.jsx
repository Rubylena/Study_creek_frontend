import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import logoImage from '../../assets/studycreekcolor.png';
import styles from './login.module.css';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth} from '../../firebaseConfig';
import { Context } from '../../context/contextProvider';

const TeacherLogin = () => {
  const {role} = useContext(Context)
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }


  function signIn(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) {
      toast.error('Please fill in both email and password.');
      return;
    }
    toast.success('Sign-in successful!');

    signInWithEmailAndPassword(auth, email,password).then((userCredential)=>{
      const token = userCredential._tokenResponse.idToken
            localStorage.setItem('userToken', token)
      // navigate('/dashboard')
    })
  }

  const getUser = async()=>{
    const userToken = localStorage.getItem('userToken')
    try{
     const users= await fetch('https://creek.onrender.com/users',
       { headers:{
            Authorization: `Bearer ${userToken}`,
            } 
        })

        console.log(users)
        
    }
    catch(err){
            console.log(err)
    } 
}
console.log(role)
 
const setRole = async(e)=>{
  signIn(e)
  const userToken = localStorage.getItem('userToken')
  console.log(userToken)

  try{
      const  response = await fetch('https://creek.onrender.com/users/role',{
        method:'POST',
        headers:{
          Authorization: `Bearer ${userToken}`,
          },
          body: {
           role:role
          }
      })

      const user =  await response.json()
      console.log(user)

  }
  catch(err){
    console.log(err)
  }
}

  return (
    <div className={styles.loginPage}>
        <IoIosArrowRoundBack className={styles.backButton} onClick={goBack}/>
        <img src={logoImage} alt="StudyCreek Logo" className={styles.logo} />
    
      <div className={styles.content}>
        <h1 className={styles.heroWord}>Welcome Back</h1>
        <p className={styles.paragraph}>We love the work you do! Please Sign in with your registered email...</p>
        <form className={styles.loginForm} onSubmit={setRole}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <a href="/" className={styles.forgotPassword}>
            Forgot Password?
          </a>
          <button type="submit" className={styles.loginButton}>
            Sign In
          </button>
        </form>
        <button onClick={getUser} style={{width:'200px'}}> get user</button>
      </div>
    </div>
  );
};

export default TeacherLogin;
