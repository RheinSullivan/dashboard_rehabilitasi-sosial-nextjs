import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <a href="https://rheinsullivan.web.id/" className={styles.author}>
          Rhein Sullivan
        </a>
      </div>
      <div className={styles.text}>
        Copyright © 2025 <span>Dinas Sosial</span>. All right recevied.
      </div>
    </footer>
  );
};

export default Footer;
