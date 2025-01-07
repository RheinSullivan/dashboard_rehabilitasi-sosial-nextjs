import React from "react";
import styles from "@/app/ui/dashboard/pendataan/pendataan.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import { fecthPendataan } from "@/app/lib/data";
import { deletePendataan } from "@/app/lib/actions";

const Pendataan = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const pages = searchParams?.pages || 1;
  const { pendataan, count } = await fecthPendataan(search, pages);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search data..." />
        <Link href="/dashboard/pendataan/add">
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
          {pendataan.map((pendataan) => (
            <tr key={pendataan.id}>
              <td>
                <div className={styles.pendataan}>
                  <Image src={pendataan.img || "/noimage.png"} alt="Case Image" className={styles.pendataanImage} height={50} width={50} />
                  {pendataan.casedata?.toString().slice(0, 16)}
                </div>
              </td>
              <td>{pendataan.reporter}</td>
              <td>{pendataan.date?.toString().slice(4, 16)}</td>
              <td>{pendataan.address?.toString().slice(0, 25)}</td>
              <td>
                <span className={`${styles.status} ${pendataan.status === "Done" ? styles.done : pendataan.status === "Cancelled" ? styles.cancelled : styles.pending}`}>{pendataan.status}</span>
              </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/pendataan/${pendataan.id}`}>
                    <button className={`${styles.view} ${styles.button}`}>View</button>
                  </Link>
                  <form action={deletePendataan}>
                    <input type="hidden" value={pendataan.id} name="id" />
                    <button className={`${styles.delete} ${styles.button}`}>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Pendataan;
