"use client";
import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("pages", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("search", e.target.value);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params}`);
  }, 500);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" onChange={handleSearch} placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
