import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './welcomeback.module.css'; 

import logoImage from '../../assets/studycreekcolor.png';


const Welcome = () => {
  const navigate = useNavigate();

  function logInAsATeacher() {
    navigate('/teacher-login');
  }

  function logInAsAStudent() {
    navigate('/student-login');
  }

  return (
    <div className={styles.app}> 
      <div className={styles.logo}>
        <img src={logoImage} alt="StudyCreek logo" style={{ maxWidth: '100px', marginTop:'0' }} />
      </div>
      <div className={styles.welcome}>
        <h2>Welcome</h2>
      </div>
      <div className={styles.topSection} >
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
          <div className={styles.buttons}>
            <button className={styles.teacher} onClick={logInAsATeacher}>
              Sign in as a Teacher
            </button>
            <br />
            <button className={styles.student} onClick={logInAsAStudent}>
              Sign in as a Student
            </button>
          </div>
        </div>
    </div>
  );
};

export default Welcome;
