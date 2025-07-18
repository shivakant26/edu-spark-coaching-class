"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../components/Header.module.css";
import menuData from "@/(main)/utils/data/menuData";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleMenu = () => {
    setShow(!show);
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="#">EduSpark</Link>
      </div>
      <div className={styles.menu}>
        <ul>
          {menuData?.map((menuItem, index) => {
            return (
              <li key={index}>
                <Link href={menuItem.slug}>{menuItem.menulabel}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.mobile_menu}>
        <div className={styles.humb_menu_icon} onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
          {show && (
            <div className={styles.mobile_menus}>
              <ul>
                {menuData?.map((menuItem, index) => {
                  return (
                    <li key={index}>
                      <Link href={menuItem.slug}>{menuItem.menulabel}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
