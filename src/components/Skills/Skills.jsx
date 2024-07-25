import React from "react";

import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";

export const Skills = () => {
  return (
    <div>
      <section className={styles.container} id="about">
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <p>
              pooja2000yu@gmail.com
            </p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <p>
              linkedin.com/pooja-yu
            </p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <p>
              github.com/YU-Pooja
            </p>
          </li>
        </ul>
        {/* </div> */}
      </section>
      <section className={styles.container} id="Skills">
        <h2 className={styles.title}>Skils</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
