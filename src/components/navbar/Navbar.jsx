import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/instagram.png" alt="instagram" height={24} width={24}/>
        <Image src="/github.png" alt="github" height={24} width={24}/>
        <Image src="/telegram.png" alt="telegram" height={24} width={24}/>
      </div>
      <div className={styles.logo}>MisuBlog</div>
      <div className={styles.links}>
        <Link href="/"> Homepage</Link>
        <Link href="/"> Contact</Link>
        <Link href="/"> About</Link>
      </div>
    </div>
  )
};

export default Navbar;
