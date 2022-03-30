import type { NextPage } from 'next'
import styles from '../styles/About.module.scss'
import profilePNG from '../public/icono.png'
import Image from 'next/image'

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
                    <p className={styles.firstDescriptionText}>Hello! My name is Gonzalo Baliarda and i’m a Software Engineering student in ITBA. My interest in software started way back in high school wanting to innovate and create different solutions to any daily problem in order to automatize and increase productivity.</p>
                    <p>I’m familiar with both Frontend and Backend development, using web frameworks such as React, Angular and Vue.</p>
                    <p>Nowadays, i’m getting myself into Web3 and Blockchain, developing smart contracts and deploying them in testnets and localnets with Solidity and Python</p>
                    <p>Some technologies i’ve been using lately are:</p>
                </div>
                <div className={styles.profileImage}>
                    <div className={styles.topPart}>
                        <div className={styles.topLeftPart}></div>
                        <div className={styles.topRightPart}></div>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image src={profilePNG} alt="Profile photo" height='380px' /> 
                    </div>
                </div>
            </div>
            <div className={styles.skills}>
                <div className={styles.borderLeft}></div>
                <div className={styles.content}>
                
                </div>
            </div>
        </div>
    )
}

export default aboutPage