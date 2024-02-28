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
            I'm Sean Tosello, a Front End Engineer with a passion for solving problems and creating innovative solutions. I have experience in JavaScript, React, HTML, and CSS, and pride myself in having the mindset of a lifelong learner. I'm also a creative thinker and an enthusiastic collaborator. Let's work together to create something amazing!
          </p>
      </div>
    </div>  
  );
}

export default AboutOverlay;