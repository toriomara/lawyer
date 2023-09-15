import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='' width={50} height={50} />
          <h1 className={styles.logoText}>Р.Ф. Мордвинцев</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          maxime natus quidem porro eius earum repudiandae ducimus dolor
          expedita sint.
        </p>
        <div className={styles.icons}>
          <Image src='/facebook.png' alt='Facebook' width={18} height={18} />
          <Image src='/instagram.png' alt='Instagram' width={18} height={18} />
          <Image src='/tiktok.png' alt='Tiktok' width={18} height={18} />
          <Image src='/youtube.png' alt='YouTube' width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>TikTok</Link>
          <Link href='/'>YouTube</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
