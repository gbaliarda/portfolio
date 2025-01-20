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
                        <span className={styles.colorDescription}> Software Engineering</span> graduated from <span className={styles.colorDescription}>ITBA</span>, based in Buenos Aires, Argentina.
                        I’m currently working as a <span className={styles.colorDescription}>Data & AI Intern</span> at Accenture, where I focus on solving client problems by implementing innovative solutions using cutting-edge technologies.
                    </p>
                    <p>
                        I have hands-on experience in full-stack development, data science, machine learning and blockchain. My technical toolkit includes frameworks like React, NextJS, Vue, and Spring for web development, as well as Python for data-driven solutions.
                    </p>
                    <p>
                        Nowadays, I’m deeply interested in <span className={styles.colorDescription}>Generative AI</span>, <span className={styles.colorDescription}>Large Language Models (LLMs)</span>, and <span className={styles.colorDescription}>Machine Learning</span>. 
                        I’m passionate about exploring and applying these technologies to create innovative solutions that address real-world challenges.
                    </p>
                    <br />
                    <p>Some of my skills include:</p>
                </div>
                <div className={styles.profileImage}>
                    <div className={styles.topPart}>
                        <div className={styles.topLeftPart}></div>
                        <div className={styles.topRightPart}></div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="software.png" alt="Profile photo" className={styles.profileImg} />
                    </div>
                </div>
            </div>
            <div className={styles.skills}>
                <div className={styles.borderLeft}></div>
                <div className={styles.content}>
                    <ul className={styles.leftContent}>
                        <li>Programming Languages: Java, C, Python, Ruby, Solidity</li>
                        <li>HTML/CSS, JavaScript and TypeScript for web full-stack development</li>
                        <li>Web Frameworks: React, NextJS, Spring, Vue, Express</li>
                        <li>Data analysis, Machine Learning, Deep Learning and Generative AI</li>
                    </ul>
                    <ul className={styles.rightContent}>
                        <li>Database Management: SQL, PostgreSQL</li>
                        <li>Version Control: Git, GitHub</li>
                        <li>Cloud Computing: Azure</li>
                        <li>Agile Methodologies and Tools: Scrum, Jira</li>
                        <li>Rest API Development and Integration</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default aboutPage