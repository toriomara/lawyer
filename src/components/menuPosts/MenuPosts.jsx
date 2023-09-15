import Image from 'next/image';
import Link from 'next/link';
import styles from './menu.module.css';

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link className={styles.item} href='/'>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} src='/p1.jpeg' alt='' fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Р. Мордвинцев</span>
            <span className={styles.date}> — 25.12.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href='/'>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} src='/p1.jpeg' alt='' fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Р. Мордвинцев</span>
            <span className={styles.date}> — 25.12.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href='/'>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} src='/p1.jpeg' alt='' fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Р. Мордвинцев</span>
            <span className={styles.date}> — 25.12.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href='/'>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} src='/p1.jpeg' alt='' fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Р. Мордвинцев</span>
            <span className={styles.date}> — 25.12.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
