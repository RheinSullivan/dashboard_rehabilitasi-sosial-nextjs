"use client";
import React from "react";
import styles from "./pagination.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  
  const pages = searchParams.get("pages") || 1;
  
  const params = new URLSearchParams(searchParams);
  const itemsPerpages = 5;

  const hasPrev = itemsPerpages * (parseInt(pages) - 1) > 0;
  const hasNext = itemsPerpages * (parseInt(pages) - 1) + itemsPerpages < count;

  const handleChangePage = (type) => {
    type === "previous" 
      ? params.set("pages", parseInt(pages) - 1) 
      : params.set("pages", parseInt(pages) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button 
        className={styles.button} 
        onClick={() => handleChangePage("previous")} 
        disabled={!hasPrev}
      >
        <IoIosArrowBack /> Previous
      </button>
      <button 
        className={styles.button} 
        onClick={() => handleChangePage("next")} 
        disabled={!hasNext}
      >
        Next <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
