import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src="/noavatar.png" alt="profile" fill />
        </div>
        <span>Rhein Sullivan</span>
      </div>
      <div className={styles.formContent}>
        <form action="" className={styles.form}>
          <label>Username:</label>
          <input type="text" placeholder="rehabsos123" name="username" />
          <label>Email:</label>
          <input type="email" placeholder="rehabsos456@gmail.com" name="email" />
          <label>Password:</label>
          <input type="password" placeholder="***************" name="password" />
          <label>Number Phone:</label>
          <input type="text" placeholder="+6281424535278 / 081424535278" name="username" />
          <label>Alamat:</label>
          <textarea type="text" placeholder="Jl. Sunan Drajat No.16, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611, Indonesia" name="address" rows={10}></textarea>
          <label>Apakah kamu seorang admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Apakah kamu masih aktif?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
