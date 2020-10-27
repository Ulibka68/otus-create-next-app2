import Head from 'next/head'
import styles from '../styles/Home.module.css'
import responsiveImage from "../images/4mb-image.jpg?sizes[]=300,sizes[]=600,sizes[]=1024";
// import responsiveImage2 from "images/4mb-image.jpg?webp";
// import responsiveImage from "images/4mb-image.jpg?sizes[]=300,sizes[]=600,sizes[]=1024&format=webp";
// import responsiveImage from "images/4mb-image.jpg";
// import responsiveImage from "img/myImage.jpg?sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048";
// import responsiveImageWebp from 'img/myImage.jpg?sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Тестирование изображений</h1>
        <picture>
          <source srcSet={responsiveImage.srcSet} />
          <img
              src={responsiveImage.src}
              srcSet={responsiveImage.srcSet}
              width={responsiveImage.width}
              height={responsiveImage.height}
              loading="lazy"
          />
        </picture>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
