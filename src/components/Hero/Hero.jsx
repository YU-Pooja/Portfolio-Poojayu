import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useState } from "react";

export const Hero = () => {
  const [copiedstate, setcopiedstate] = useState('');
  const [copiedtext, setcopiedtext] = useState('eafsdfs');
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm POOJA YU</h1>
          <p className={styles.description}>
            I am a Full-Stack developer based in Banglore, India.
            I am very passionate about improving my coding skills & developing applications & websites.
            I build WebApps and Websites using MERN Stack Having 3 years of experience in FULLSTACK Development.<br />
            Love to build Full-Stack and responsive applications.
          </p>
          <div className={styles.btns}>
            <a href="#contact" className={styles.contactBtn}>
              Contact Me
            </a>
            <a href="https://drive.google.com/file/d/1CKQTc9CPFmZtaHxWUVoVhQ0LKqvs2w_y/view?usp=drivesdk" className={styles.cvBtn}>
              Download CV
            </a>
          </div>

        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>



      <section className={styles.contactcontainer} id="about">
        <ul className={styles.contactaboutItems}>
          <li className={styles.contactaboutItem}>
            <img src={getImageUrl("contact/emailIcon.png")} title="sakdb" alt="Email icon" />
            <a href="mailto:pooja2000yu@gmail.com">pooja2000yu@gmail.com  &nbsp;</a>
            <button className="copyButton" 
            onClick = {async () => {
              await navigator.clipboard.writeText('https://github.com/YU-Pooja')
              setcopiedstate('copied')
            }}
            style={{padding:'5px',backgroundColor:"transparent",color:'white'}}
            >
              {copiedstate === 'copied' ? '✅COPIED' : <img style={{backgroundColor:'transperent',height:'30px',width:'30px'}}className='copyimg' src={getImageUrl("hero/cop1.png")} alt="Github icon"/> }
            </button>
            <span className={styles.mailtooltiptext}>Click to send Mail</span>
          </li>
          
          <li className={styles.contactaboutItem}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/pooja-yu-9a96041a6/">linkedin.com/pooja-yu</a>
            <span className={styles.linkedintooltiptext}>Click to view LinkedIn</span>
          </li>
          <li className={styles.contactaboutItem}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
            <a href="https://github.com/YU-Pooja">github.com/YU-Pooja</a>
            <span className={styles.gittooltiptext}>Click to view GITHUB</span>
          </li>
        </ul>
        
      </section>
    </div>
  );
};
