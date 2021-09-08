import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">App A</a>
        </h1>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>Home</h2>
          </a>

          <a href="/app-b" className={styles.card}>
            <h2>App B</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
