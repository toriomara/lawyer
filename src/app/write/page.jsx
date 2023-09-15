'use client';
import Image from 'next/image';
import styles from './writePage.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <input className={styles.input} type='text' placeholder='Title' />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src='/plus.png' alt='Add' width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image
                className={styles.image}
                src='/image.png'
                alt=''
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                className={styles.image}
                src='/external.png'
                alt=''
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                className={styles.image}
                src='/video.png'
                alt=''
                width={16}
                height={16}
              />
            </button>
          </div>
        )}
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
