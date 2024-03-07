import React from 'react';
import styles from  './AboutOverlay.module.css';
import profileImg from '../../images/profile-right.jpg';

const AboutOverlay = () => {
  return (
    <div className={styles.about}>
      <div className={styles.imageContainer}>
        <img className={styles.profileImg} src={profileImg} alt="Profile"/>
      </div>
      <div className={styles.personalIntro}>
          <h4>Hello there!</h4>
          <p>
            I'm Sean Tosello, a seasoned Academic and Secondary/Post-Secondary Educator turned Front End Engineer. Through my academic background I bring a high standard of excellence, a meticulous attention to detail, a persistent passion for learning and an enthusiasm for engineering innovative solutions. As a Front-End Engineer I leverage JavaScript, React, HTML, and CSS to build effective web applications. 

            Let's work together to create something amazing!
          </p>
      </div>
    </div>  
  );
}

export default AboutOverlay;