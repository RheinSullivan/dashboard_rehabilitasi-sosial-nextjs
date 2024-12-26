import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdOutlineRefresh } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/icons/crb.png" alt="News" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Berita hari ini</span>
          <h3 className={styles.title}>Update dashboard Rehabilitasi Sosial, berhasil di luncurkan</h3>
          <span className={styles.subtitle}>Berhasil di update 1 hari yang lalu</span>
          <p className={styles.description}>Update dashboard menjadi lebih menarik, dan menjadi lebih efisien dari versi sebelumnya, silahkan gunakan dan rasakan update nya, terimakasih!</p>
          <button className={styles.button}>
            <MdOutlineRefresh /> Refresh
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>Berita hari ini</span>
          <h3 className={styles.title}>Update dashboard Rehabilitasi Sosial, berhasil di luncurkan</h3>
          <span className={styles.subtitle}>Berhasil di update 1 hari yang lalu</span>
          <p className={styles.description}>Update dashboard menjadi lebih menarik, dan menjadi lebih efisien dari versi sebelumnya, silahkan gunakan dan rasakan update nya, terimakasih!</p>
          <button className={styles.button}>
            <MdOutlineRefresh /> Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
