import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Блог адвоката Мордвинцева</b>
        <br /> Взгляните на мои новости
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src='/p1.jpeg' alt='Photo' fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            odit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
            quia quasi nesciunt iure impedit deserunt ex vero perferendis magnam
            vel nobis quas maxime animi et repellat ab eum illo quidem!
          </p>
          <button className={styles.button}>More details</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
