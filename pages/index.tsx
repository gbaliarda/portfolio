// https://github.com/vercel/next.js/tree/canary/examples
import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Landing from './landing'
import About from './about'
import Projects from './projects'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleModal = () => {
    setIsShown(!isShown);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Gonzalo Baliarda - Portfolio</title>
        <meta name="description" content="Portfolio created with NextJS" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.scrollingBox}>
          <Modal title={'Contact'} isShown={isShown} hide={toggleModal} />

          <section id="landing">
            <Landing toggleModal={toggleModal}></Landing>
          </section>

          <section id="about">
            <About></About>
          </section>

          <section id="projects">
            <Projects></Projects>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
