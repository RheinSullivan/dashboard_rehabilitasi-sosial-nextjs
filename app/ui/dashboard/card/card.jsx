import React from "react";
import styles from "./card.module.css";
import { MdSupervisorAccount } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisorAccount size={24} className={styles.icons} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>1.200</span>
        <div className={styles.detail}>
          <span className={styles.positive}>10%</span> <span>Meningkat</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
