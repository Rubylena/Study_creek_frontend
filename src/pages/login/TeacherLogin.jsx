import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backButton from '../../assets/Arrow 1.png';
import logoImage from '../../assets/logoImage.png';
import styles from './login.module.css';

const TeacherLogin = () => {
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

  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.header}>
        <img src={backButton} alt="Back" className={styles.backButton} onClick={goBack} />
        <img src={logoImage} alt="StudyCreek Logo" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heroWord}>Welcome Back</h1>
        <p className={styles.paragraph}>We love the work you do! Please Sign in with your registered email...</p>
        <form className={styles.loginForm} onSubmit={signIn}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <a href="/" className={styles.forgotPassword}>
            Forgot Password?
          </a>
          <button type="submit" className={styles.loginButton}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
