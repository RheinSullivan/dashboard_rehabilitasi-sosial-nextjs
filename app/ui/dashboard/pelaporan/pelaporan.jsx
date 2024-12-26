import React from "react";
import styles from "./pelaporan.module.css";
import Image from "next/image";

const Pelaporan = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Laporan Terakhir</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nama</td>
            <td>Status</td>
            <td>Tanggal</td>
            <td>Kasus</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Profile" className={styles.userImage} height={40} width={40} />
                Danda Hudan N.
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>Pending</span>
            </td>
            <td>30.02.2024</td>
            <td>Pencabulan Anak</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Profile" className={styles.userImage} height={40} width={40} />
                Ryan Taufik N.F.
              </div>
            </td>
            <td>
              <span className={`${styles.done} ${styles.status}`}>Done</span>
            </td>
            <td>33.12.2022</td>
            <td>Bandar Narkoba</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Profile" className={styles.userImage} height={40} width={40} />
                Zidan Koirul R.
              </div>
            </td>
            <td>
              <span className={`${styles.done} ${styles.status}`}>Done</span>
            </td>
            <td>35.08.2023</td>
            <td>Korupsi Dana</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Profile" className={styles.userImage} height={40} width={40} />
                Imanda
              </div>
            </td>
            <td>
              <span className={`${styles.cencelled} ${styles.status}`}>Cencelled</span>
            </td>
            <td>32.11.2025</td>
            <td>KDRT dengan Sakura</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pelaporan;
