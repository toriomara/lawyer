import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {
  const status = 'auth';
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'auth' ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder='Write a comment...' />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src='/p1.jpeg'
              alt='Photo'
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Роман Мордвинцев</span>
              <span className={styles.date}>11.11.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatum eveniet possimus quis ex nemo deserunt odit, eum illum
            repudiandae ipsa, laboriosam error? Voluptas libero, aliquam
            blanditiis expedita minima ea.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src='/p1.jpeg'
              alt='Photo'
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Роман Мордвинцев</span>
              <span className={styles.date}>11.11.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatum eveniet possimus quis ex nemo deserunt odit, eum illum
            repudiandae ipsa, laboriosam error? Voluptas libero, aliquam
            blanditiis expedita minima ea.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src='/p1.jpeg'
              alt='Photo'
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Роман Мордвинцев</span>
              <span className={styles.date}>11.11.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatum eveniet possimus quis ex nemo deserunt odit, eum illum
            repudiandae ipsa, laboriosam error? Voluptas libero, aliquam
            blanditiis expedita minima ea.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src='/p1.jpeg'
              alt='Photo'
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Роман Мордвинцев</span>
              <span className={styles.date}>11.11.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatum eveniet possimus quis ex nemo deserunt odit, eum illum
            repudiandae ipsa, laboriosam error? Voluptas libero, aliquam
            blanditiis expedita minima ea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
