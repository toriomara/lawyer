import Link from 'next/link';
import styles from './menuCategories.module.css';

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        className={`${styles.categoryItem} ${styles.fashion}`}
        href='/blog/?cat=style'
      >
        Fashion
      </Link>
      <Link className={`${styles.categoryItem} ${styles.food}`} href='/blog'>
        Food
      </Link>
      <Link className={`${styles.categoryItem} ${styles.travel}`} href='/blog'>
        Travel
      </Link>
      <Link className={`${styles.categoryItem} ${styles.culture}`} href='/blog'>
        Culture
      </Link>
      <Link className={`${styles.categoryItem} ${styles.coding}`} href='/blog'>
        Coding
      </Link>
      <Link className={`${styles.categoryItem} ${styles.style}`} href='/blog'>
        Style
      </Link>
    </div>
  );
};

export default MenuCategories;
