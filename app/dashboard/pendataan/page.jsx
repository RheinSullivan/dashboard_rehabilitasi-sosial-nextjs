import React from "react";
import styles from "@/app/ui/dashboard/pendataan/pendataan.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";

const Pendataan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search data..." />
        <Link href="/dashboard/pendataan/test">
          <button className={styles.addButton}>Add Data</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Data Kasus</td>
            <td>Pelapor</td>
            <td>Tanggal</td>
            <td>Alamat</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.pendataan}>
                <Image src="/noimage.png" alt="Profile" className={styles.userImage} height={60} width={60} />
                Korupsi Dana
              </div>
            </td>
            <td>Zidan Koirul R.</td>
            <td>35.08.2023</td>
            <td>Cilacap</td>
            <td>
              <span className={`${styles.done} ${styles.status}`}>Done</span>
            </td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/pendataan/test">
                  <button className={`${styles.view} ${styles.button}`}>View</button>
                </Link>
                <button className={`${styles.delete} ${styles.button}`}>Done</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.pendataan}>
                <Image src="/noimage.png" alt="Profile" className={styles.userImage} height={60} width={60} />
                KDRT dengan Sakura
              </div>
            </td>
            <td>Imanda</td>
            <td>32.11.2025</td>
            <td>Cirebon</td>
            <td>
              <span className={`${styles.cencelled} ${styles.status}`}>Cencelled</span>
            </td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.view} ${styles.button}`}>View</button>
                </Link>
                <button className={`${styles.delete} ${styles.button}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Pendataan;
