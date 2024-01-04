import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Dashboard.module.css"

export const Dashboard = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}><h1 className={styles.title}>Hi, I'm Nihar</h1>
      <p className={styles.description}>I am a full-stack developer using ReactJS and NodeJS.</p>
      <a href="mailto:nihar.kadam@gmail.com" className={styles.contactBtn}>Contact Me</a></div>
      <img src={getImageUrl("/dashboard/dashboardImg.png")} alt="Dashboard Img" className={styles.dashboardImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};
