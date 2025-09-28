import type { NextPage } from 'next'
import styles from '../styles/Landing.module.scss'
import Image from 'next/image'
import linkedinSVG from '../public/icons8-linkedin.svg'
import githubSVG from '../public/icons8-github.svg'
import mailSVG from '../public/icons8-mail.svg'

interface Props {
    toggleModal: () => void
}

const landingPage = ({ toggleModal }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src="triangle.svg" alt="Triangle photo" className={styles.triangle} />
                <div className={styles.mainContainer}>
                    <h1 className={styles.name}>Gonzalo Baliarda</h1>
                    <p className={styles.description}>Software Engineer</p>
                </div>

                <hr className={styles.lineOne} />

                <div className={styles.buttons}>
                    <div className={styles.leftButtons}>
                        <a href="mailto:gonzalobaliarda1@gmail.com" className={styles.button}>CONTACT</a>
                        <a href="#about" className={styles.button}>ABOUT</a>
                    </div>
                    <div className={styles.rightButtons}>
                        <a href="#projects" className={styles.button}>PROJECTS</a>
                        <a href="/Gonzalo Baliarda - Resume.pdf" className={styles.button} target="_blank" rel="noreferrer">RESUME</a>
                    </div>
                </div>

                <div className={styles.icons}>
                    <a href="https://www.linkedin.com/in/gonzalo-baliarda" className={styles.iconLink} target="_blank" rel="noreferrer">
                        <div className={styles.icon}>
                            <Image src={linkedinSVG} alt="Linkedin" width={38} height={38} />
                        </div>
                    </a>
                    <a href="https://www.github.com/gbaliarda" className={styles.iconLink} target="_blank" rel="noreferrer">
                        <div className={styles.icon}>
                            <Image src={githubSVG} alt="GitHub" width={37} height={37} />
                        </div>
                    </a>
                    <a href="mailto:gonzalobaliarda1@gmail.com" className={styles.iconLink}>
                        <div className={styles.icon}>
                            <Image src={mailSVG} alt="Mail" width={38} height={38} />
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.endDiv}></div>
        </div>
    );
}

export default landingPage;