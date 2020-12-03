import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          プラスチックフリーのお店地図<br />
          <a href="https://code4mm.org/" target="_blank">by Code for Mitaka / Musashino</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.map}>
          ここにマップUIを配置
        </div>

        <form>
          <h2>お店のカテゴリ絞り込みリスト</h2>
          <ul className={styles.fileterList}>
            <li><button type="button" aria-label="">A</button></li>
            <li><button type="button" aria-label="">B</button></li>
            <li><button type="button" aria-label="">C</button></li>
            <li><button type="button" aria-label="">D</button></li>
            <li><button type="button" aria-label="">E</button></li>
          </ul>

          <div className={styles.grid}>
            <label role="search">
              <input id="search" placeholder="検索したい単語をご入力ください" maxLength="100" aria-labelledby="search"></input>
              <button type="button" aria-label="">検索アイコン</button>
            </label>

            <button className={styles.postButton} type="button" aria-label="">お店情報を投稿する</button>
          </div>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Code for Mitaka / Musashino
        </a>
      </footer>
    </div>
  )
}
