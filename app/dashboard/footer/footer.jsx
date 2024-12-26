import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        Copyright © 2024 {""}
        <a href="https://rheinsullivan.web.id/" className={styles.author}>
          Rhein Sullivan
        </a>
        . All right recevied.
      </footer>
    </>
  );
};

export default Footer;
