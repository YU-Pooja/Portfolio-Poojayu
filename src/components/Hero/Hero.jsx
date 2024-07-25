import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm POOJA YU</h1>
        <p className={styles.description}>
          I am a Full-Stack developer based in Banglore, India.
          I am very passionate about improving my coding skills & developing applications & websites. 
          I build WebApps and Websites using MERN Stack Having 3 years of experience in FULLSTACK Development.<br/>
          Love to build Full-Stack and responsive applications.
        </p>
        <div className={styles.btns}>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="" className={styles.cvBtn}>
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
  );
};
