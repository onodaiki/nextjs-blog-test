import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import { getPostData } from "../lib/posts";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

//SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilStyle.headingMd}>
          I will send out my knowledge about muscles and the menu I am doing
        </p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📃muscle Daiki blog📃</h2>
        <div className={styles.grid}>
          {allPostsData.map(
            ({
              id,
              title,
              date,
              thumbnail,
            }: {
              id: number;
              title: string;
              date: string;
              thumbnail: string;
            }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} className={styles.thumbnailImage} />
                </Link>
                <Link href={`${thumbnail}`}>
                  <p className={utilStyle.boldText}>{title}</p>
                </Link>

                <small className={utilStyle.lightText}>{date}</small>
              </article>
            )
          )}
        </div>
      </section>
    </Layout>
  );
}
