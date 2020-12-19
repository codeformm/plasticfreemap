import dynamic from 'next/dynamic';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fetch from 'isomorphic-unfetch';

const Map = dynamic(() => import('../components/map'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>プラスチックフリーのお店地図 by Code for Mitaka / Musashino</title>
        <link rel="icon" href="/favicon.ico" />
        <link href = 'https：//api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel = 'stylesheet' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          プラスチックフリーのお店地図<br />
        </h1>

        <p className={styles.description}>
          以下の地図はOpenStreetMapを使用しています
        </p>

        <div className={styles.map}>
          <div id="app">
            <Map />
          </div>
        </div>

        <form>
          <h2 className={styles.subHeading}>お店のカテゴリ絞り込みリスト</h2>
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

            <a href="https://docs.google.com/forms/d/1oyeYAEIhlxdrh5OeYLJCDhIObFqoafI84Nw4Pib5rOA/prefill" className={styles.postButton} aria-label="" target="_blank">お店情報を投稿する(Googleフォームへ遷移します)</a>
          </div>
        </form>
      </main>

      <footer className={styles.footer}>
        <a href="https://code4mm.org/" target="_blank">Created by Code for Mitaka / Musashino</a>
      </footer>
    </div>
  )
}

Home.getInitialProps = async function(){
  const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=_e_1hfQUyLZPD2qTB71xlB9BJDs2tnki_lL-qBfFmQJkeTXUK9ZqtxDnjYqq9CdgN0DEdcb6wSZVHn4in9G3alRfL4BmDDmCm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPwdB6HTl5j1Z2awz-m4v7Ttt3zAuIYkEU2MMY_-rGiwb1en4mKCe7i-Ao5iwXIg1Tz1D_WcjPtk&lib=MZ9a4vnBEBaVJYBF6GuykIGCz59zrVi-4');

  const data = await res.json();

  return {
    bpi: data
  }

}