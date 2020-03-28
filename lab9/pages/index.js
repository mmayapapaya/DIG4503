import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

const Home = () => {
  return (


    <div>
     <Head>
       <title>Home!</title>
      </Head>
      <div>
       <h3 className={styles.header}>Pokemon Search Tool Home!</h3>
       <div className={styles.display}></div>
      </div>

      <div className={styles.links}>
      <Link href="/IdSearch" className={styles.links}>
          <a>Id Search</a>
        </Link>
     </div>

     <div className={styles.links}>
      <Link href="/NameSearch">
          <a>Name Search</a>
        </Link>
     </div>

     <div className={styles.links}>
      <Link href="/TypeSearch">
         <a>Type Search</a>
        </Link>
     </div>
     </div>

    );
}

export default Home;