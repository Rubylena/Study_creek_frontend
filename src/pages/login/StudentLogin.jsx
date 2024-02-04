import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backButton from "../../assets/Arrow 1.png";
import logoImage from "../../assets/logoImage.png";
import styles from "./login.module.css";
import {
  EmailAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebaseConfig.js";

const StudentLogin = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  async function signIn(event) {
    event.preventDefault();
    try {
      const email = event.target.email.value;
      const password = event.target.password.value;

      if (!email || !password) {
        toast.error("Please fill in both email and password.");
        return;
      }

      // const provider = new EmailAuthProvider
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials);
      localStorage.setItem("token", userCredentials?._tokenResponse?.idToken);
      toast.success('Sign-in successful!');

      // To test proper integration with backend
      navigate('/user-details')
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.header}>
        <img
          src={backButton}
          alt="Back"
          className={styles.backButton}
          onClick={goBack}
        />
        <img src={logoImage} alt="StudyCreek Logo" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heroWord}>Welcome Back</h1>
        <p className={styles.paragraph}>
          We love to see you learn! Please Sign in with your registered email...
        </p>
        <form className={styles.loginForm} onSubmit={signIn}>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
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

export default StudentLogin;
