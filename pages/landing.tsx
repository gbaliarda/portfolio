import type { NextPage } from 'next'
import styles from '../styles/Landing.module.scss'
import Image from 'next/image'
import triangleSVG from '../public/triangle.svg'
import linkedinSVG from '../public/icons8-linkedin.svg'
import githubSVG from '../public/icons8-github.svg'
import mailSVG from '../public/icons8-mail.svg'

const landingPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src="triangle.svg" alt="Triangle photo" className={styles.triangle} />
                <div className={styles.mainContainer}>
                    <h1 className={styles.name}>Gonzalo Baliarda</h1>
                    <p className={styles.description}>Software Developer</p>
                </div>

                <hr className={styles.lineOne} />

                <div className={styles.buttons}>
                    <div className={styles.leftButtons}>
                        <a href="mailto:gonzalobaliarda1@gmail.com" className={styles.button}>CONTACT</a>
                        <a href="#about" className={styles.button}>ABOUT</a>
                    </div>
                    <div className={styles.rightButtons}>
                        <a href="#projects" className={styles.button}>PROJECTS</a>
                        <a href="#" className={styles.button}>RESUME</a>
                    </div>
                </div>

                <div className={styles.icons}>
                    <a href="#" className={styles.iconLink} target="_blank">
                        <div className={styles.icon}>
                            <Image src={linkedinSVG} alt="Linkedin" />
                        </div>
                    </a>
                    <a href="https://www.github.com/gbaliarda" className={styles.iconLink} target="_blank">
                        <div className={styles.icon}>
                            <Image src={githubSVG} alt="GitHub" />
                        </div>
                    </a>
                    <a href="mailto:gonzalobaliarda1@gmail.com" className={styles.iconLink}>
                        <div className={styles.icon}>
                            <Image src={mailSVG} alt="Mail" />
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.endDiv}></div>
        </div>
    );
}

export default landingPage;