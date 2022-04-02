import type { NextPage } from 'next'
import styles from '../styles/About.module.scss'
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
                    <p className={styles.firstDescriptionText}>
                        Hello! My name is Gonzalo Baliarda and i’m a
                        <span className={styles.colorDescription}> Software Engineering</span> student in <span className={styles.colorDescription}>ITBA</span>.
                        My interest in software started way back in high school
                        wanting to <span className={styles.colorDescription}>innovate</span> and <span className={styles.colorDescription}>create</span> different solutions to any
                        daily problem in order to automatize and increase productivity.
                    </p>
                    <p>I’m familiar with both Frontend and Backend development, using web frameworks such as React, NextJS, Vue and Spring.</p>
                    <p>Nowadays, i’m getting myself into <span className={styles.colorDescription}>Web3</span> and <span className={styles.colorDescription}>Blockchain</span>, developing smart contracts and deploying them in testnets and localnets with Solidity and Python</p>
                    <br />
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
                        <SkillBar skillName='HTML/CSS' progress={75}></SkillBar>
                        <SkillBar skillName='JavaScript' progress={70}></SkillBar>
                        <SkillBar skillName='SQL' progress={80}></SkillBar>
                    </div>
                    <div className={styles.rightContent}>
                        <SkillBar skillName='Python' progress={50}></SkillBar>
                        <SkillBar skillName='Solidity' progress={50}></SkillBar>
                        <SkillBar skillName='Ruby' progress={40}></SkillBar>
                        <SkillBar skillName='Kotlin' progress={40}></SkillBar>
                        <SkillBar skillName='React' progress={70}></SkillBar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutPage