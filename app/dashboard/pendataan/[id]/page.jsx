import React from "react";
import styles from "@/app/ui/dashboard/pendataan/singlePendataan/singlePendataan.module.css";
import Image from "next/image";

const singlePendataan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src="/noimage.png" alt="profile" fill />
        </div>
        <span>Zidan Koirul R.</span>
      </div>
      <div className={styles.formContent}>
        <form action="" className={styles.form}>
          <label>Data Kasus:</label>
          <input type="text" placeholder="Tuliskan judul khasus mu" name="casedata" />
          <label>Pelapor:</label>
          <input type="text" placeholder="Jailudin bin Usiludin" name="reporter" />
          <label>Tanggal:</label>
          <input type="date" name="date" />
          <label>Alamat:</label>
          <textarea type="text" placeholder="Jl. Sunan Drajat No.16, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611, Indonesia" name="address" rows={10}></textarea>
          <label>Kategori Data:</label>
          <select name="cat" id="cat">
            <option value="kasus">Pilih Kategori Sesuai Dengan Masalahmu</option>
            <option value="kasus">Kasus</option>
            <option value="bantuan">Bantuan</option>
            <option value="layanan">Layanan</option>
          </select>
          <label>Deskripsi Data:</label>
          <textarea rows={10} name="desc" id="desc" placeholder="Deskripsi Masalah"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default singlePendataan;
