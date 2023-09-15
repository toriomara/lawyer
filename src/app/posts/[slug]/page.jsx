import Image from 'next/image';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Comments from '@/components/comments/Comments';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.img && (
              <div className={styles.userImageContainer}>
                <Image
                  className={styles.avatar}
                  src={data.img}
                  alt='Photo'
                  fill
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Роман Мордвинцев</span>
              <span className={styles.date}>05.06.2021</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src='/p1.jpeg' alt='Photo' fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          {data?.desc && (
            <div
              className={styles.description}
              // dangerouslySetInnerHTML={{ __html: data?.desc }}
            >
              <p>{desc}</p>
            </div>
          )}
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
