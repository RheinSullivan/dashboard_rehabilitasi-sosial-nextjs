import React from "react";
import styles from "./sidebar.module.css";
import { MdDashboard, MdSupervisedUserCircle, MdReport, MdManageAccounts, MdAnalytics, MdMedicalServices, MdOutlineSettings, MdHelpCenter, MdLogout } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Pendataan",
        path: "/dashboard/pendataan",
        icon: <AiFillDatabase />,
      },
      {
        title: "Pelaporan",
        path: "/dashboard/pelaporan",
        icon: <MdReport />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Kelola Informasi",
        path: "/dashboard/informasi",
        icon: <MdManageAccounts />,
      },
      {
        title: "Analisis",
        path: "/dashboard/analisis",
        icon: <MdAnalytics />,
      },
      {
        title: "Manajemen Kasus",
        path: "/dashboard/kasus",
        icon: <MdMedicalServices />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container} id="coro">
      <div className={styles.user}>
        <Image src="/Rhein Sullivan.png" alt="Profile" width="60" height="60" className={styles.userImage} />
        <div className={styles.userDetail}>
          <span className={styles.username}>Rhein Sullivan</span>
          <span className={styles.userTitle}>Admin Rehabilitasi Sosial</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout className={styles.icons} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
