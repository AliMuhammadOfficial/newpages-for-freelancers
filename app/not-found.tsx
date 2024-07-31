import Link from 'next/link';
import styles from './404.module.css';
import Image from 'next/image';

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/"  className={styles.homeLink} >
          Return Home
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/404.png" width={600} height={300} alt="404" />
      </div>
    </div>
  );
};

export default NotFound;
