import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className ={styles.container} id="experience">
      <h2 className ={styles.title}>Experience</h2>
      <div className ={styles.content}>
        <div className ={styles.skills}>
          {skills.map((skills, id) => {
            return (
              <div key={id} className ={styles.skill}>
                <div className ={styles.skillImageContainer}>
                  <img src={getImageUrl(skills.imageSrc)} alt={skills.title} />
                </div>
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
        <ul className ={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li className ={styles.historyItem} key={id}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organization} Logo`}
                />
                <div className ={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} , ${historyItem.organization}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experience.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
