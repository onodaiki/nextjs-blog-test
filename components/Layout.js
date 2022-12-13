import Head from "next/head";
import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Daiki Blog";
export const siteTitle = "Daiki Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img className={utilStyles.borderCircle} src="/images/profile.png" />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link className={utilStyles.linkText} href="/">
            ← ホームへ戻る
          </Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
