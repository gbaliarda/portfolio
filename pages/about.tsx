import type { NextPage } from 'next'
import styles from '../styles/About.module.scss'

const aboutPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={styles.name}>About Me</span>
                <div className={styles.leftTitle}></div>
                <div className={styles.rightTitle}></div>
            </div>
            <hr className={styles.titleLine} />
            <div className={styles.description}>
                <div className={styles.descriptionText}>

                </div>
                <div className={styles.profileImage}>

                </div>
            </div>
            <div className={styles.skills}></div>
        </div>
    )
}

export default aboutPage