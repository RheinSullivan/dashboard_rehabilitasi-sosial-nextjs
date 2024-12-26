import React from "react";
import styles from "@/app/ui/auth/login.module.css";
import Image from "next/image";

const LoginPage = () => {
  return (
    <main className={styles.container}>
      <form action="" className={styles.form}>
        <div className={styles.heading}>
          <Image src="/icons/crb.png" alt="Rehabilitas Sosial" className={styles.image} height={80} width={80} />
          <div className={styles.title}>
            <span>Rehabilitasi Sosial</span>
            <br />
            Dinas Sosial Kab. Cirebon
          </div>
        </div>
        <label>Username:</label>
        <input type="text" name="username" id="username" placeholder="rehabos123456" />
        <label>Password:</label>
        <input type="password" name="password" id="password" placeholder="************" />
        <button>Login</button>
      </form>
    </main>
  );
};

export default LoginPage;
