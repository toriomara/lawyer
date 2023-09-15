import React from 'react';

import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='Facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='Instagram' width={24} height={24} />
        <Image src='/tiktok.png' alt='TikTok' width={24} height={24} />
        <Image src='/youtube.png' alt='YouTube' width={24} height={24} />
      </div>
      <div className={styles.logo}>Р.Ф. Мордвинцев</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href='/'>
          Homepage
        </Link>
        <Link className={styles.link} href='/'>
          Contact
        </Link>
        <Link className={styles.link} href='/'>
          About
        </Link>
        <AuthLinks />
      </div>
    </header>
  );
};

export default Navbar;
