import React from "react";
import styles from "@/app/ui/dashboard/pendataan/addPendataan/addPendataan.module.css";
import { addPendataan } from "@/app/lib/actions";

const AddPendataan = () => {
  return (
    <div className={styles.container}>
      <form action={addPendataan} className={styles.form}>
        <input type="text" placeholder="Data Kasus" name="casedata" required />
        <select name="cat" id="cat">
          <option value="select">Pilih Kategori</option>
          <option value="bantuan">Bantuan</option>
          <option value="layanan">Layanan</option>
          <option value="kasus">Kasus</option>
        </select>
        <input type="text" placeholder="Pelapor" name="reporter" />
        <input type="date" placeholder="Tanggal" name="date" />
        <input type="text" placeholder="Alamat" name="address" />
        <select name="status" id="status">
          <option value="done">Done</option>
          <option value="pending">Pending</option>
          <option value="cencelled">Cencelled</option>
        </select>
        <textarea name="desc" id="desc" placeholder="Deskripsi Masalah" rows={16}></textarea>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
};

export default AddPendataan;
