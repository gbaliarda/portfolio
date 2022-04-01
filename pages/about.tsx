import type { NextPage } from 'next'
import styles from '../styles/About.module.scss'
import profilePNG from '../public/icono.png'
import Image from 'next/image'
import SkillBar from '../components/skillBar'

const aboutPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p className={styles.name}>About Me</p>
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
                        <img src="icono.png" alt="Profile photo" className={styles.profileImg} />
                    </div>
                </div>
            </div>
            <div className={styles.skills}>
                <div className={styles.borderLeft}></div>
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <SkillBar skillName='Java' progress={80}></SkillBar>
                        <SkillBar skillName='C' progress={85}></SkillBar>
                        <SkillBar skillName='HTML' progress={75}></SkillBar>
                        <SkillBar skillName='CSS' progress={60}></SkillBar>
                        <SkillBar skillName='JavaScript' progress={60}></SkillBar>
                    </div>
                    <div className={styles.rightContent}>
                        <SkillBar skillName='Python' progress={40}></SkillBar>
                        <SkillBar skillName='Solidity' progress={40}></SkillBar>
                        <SkillBar skillName='Ruby' progress={50}></SkillBar>
                        <SkillBar skillName='SQL' progress={80}></SkillBar>
                        <SkillBar skillName='React' progress={70}></SkillBar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutPage