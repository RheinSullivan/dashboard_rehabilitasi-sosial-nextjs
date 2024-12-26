import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import { fecthUser } from "@/app/lib/data";

const UsersPage = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const pages = searchParams?.pages || 1;
  const { users, count } = await fecthUser(search, pages);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search users..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add users</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Username</td>
            <td>Email</td>
            <td>No HP</td>
            <td>Peran</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image src={user.img || "/noavatar.png"} alt="Profile" className={styles.userImage} height={50} width={50} />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.isAdmin ? "Admin" : "Member"}</td>
              <td>{user.isActive ? "Aktif" : "Pasif"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.view} ${styles.button}`}>View</button>
                  </Link>
                  <button className={`${styles.delete} ${styles.button}`}>Delete</button>
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

export default UsersPage;
