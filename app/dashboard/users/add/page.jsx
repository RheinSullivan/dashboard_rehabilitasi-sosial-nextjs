import React from "react";
import styles from "@/app/ui/dashboard/Users/addUsers/addUsers.module.css";

const AddUsers = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <input type="phone" placeholder="Number Phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Apakah kamu seorang Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Apakah kamu masih Aktif?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea name="address" id="address" rows={16} placeholder="Alamat"></textarea>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
};

export default AddUsers;
