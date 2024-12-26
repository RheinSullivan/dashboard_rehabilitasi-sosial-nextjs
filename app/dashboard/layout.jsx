import React from "react";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";
import styles from "../ui/dashboard/dashboard.module.css";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
