import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.col1}>
            <Link href="/">
              <a>
                <Image
                  className={styles.logo}
                  src="/images/itemku-logo.svg"
                  width={130}
                  height={50}
                  alt="logo itemku"
                />
              </a>
            </Link>

            <div className={styles.input_container}>
              <i className="fas fa-search"></i>
              <input
                value={query}
                onChange={handleChange}
                className={styles.input_item}
                type="search"
                placeholder="Cari Diamonds, Top Up, Skin..."
              />
            </div>
          </div>
          <div className={styles.col2}>
            <Link href="/point">
              <a>
                <Image
                  src="/images/itemku-point.svg"
                  width={30}
                  height={30}
                  alt="point itemku"
                />
              </a>
            </Link>
            <Link href="/keranjang">
              <a className={styles.keranjang}>
                <i className="fas fa-shopping-cart"></i>
              </a>
            </Link>

            <div className={styles.divider}></div>

            <Link href="/daftar">
              <a className={styles.daftar}>Daftar</a>
            </Link>

            <Link href="/login">
              <a className={styles.login}>Login</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
