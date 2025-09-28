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
                    Hello! My name is Gonzalo Baliarda and I’m a
                    <span className={styles.colorDescription}> Software Engineer</span> graduated from <span className={styles.colorDescription}>ITBA</span>, based in Buenos Aires, Argentina.
                    I’m currently working as a <span className={styles.colorDescription}>Data Scientist</span> at Accenture, where I design and ship production-grade <span className={styles.colorDescription}>Generative AI</span> systems for clients across multiple industries.
                    </p>
                    <p>
                    I build end-to-end solutions with <span className={styles.colorDescription}>LLMs</span>, <span className={styles.colorDescription}>Agentic AI</span> (single and multi-agent), and <span className={styles.colorDescription}>RAG</span>—from orchestration and tooling to evaluation and deployment.
                    My toolkit spans <span className={styles.colorDescription}>Databricks</span>, <span className={styles.colorDescription}>Airflow</span>, <span className={styles.colorDescription}>Python</span>, and full-stack development with <span className={styles.colorDescription}>React</span>/<span className={styles.colorDescription}>Next.js</span> and <span className={styles.colorDescription}>Spring</span>.
                    </p>
                    <p>
                    Day-to-day I focus on building reliable agent architectures, scalable retrieval, and strong observability—turning hard problems into shipped products. I enjoy collaborating across teams, diving into tough bugs, and making complex AI systems simple to use.
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
                    <li><strong>Programming Languages:</strong> Python, Java, C, TypeScript/JavaScript, Ruby, Solidity</li>
                    <li><strong>GenAI & Agents:</strong> LLMs, RAG, Agentic AI (single & multi-agent), prompt/tool design, LangChain, LangGraph</li>
                    <li><strong>Data & MLOps:</strong> Databricks, Apache Airflow orchestration</li>
                    <li><strong>Web & APIs:</strong> React, Next.js, Spring Boot, Express, FastAPI</li>
                    </ul>

                    <ul className={styles.rightContent}>
                    <li><strong>Databases SQL & NoSQL:</strong> PostgreSQL, MongoDB and more</li>
                    <li><strong>Cloud & DevOps:</strong> Azure & AWS, Docker, CI/CD (GitHub Actions), Kubernetes</li>
                    <li><strong>Version Control & Process:</strong> Git, GitHub, Agile (Scrum, Jira)</li>
                    <li><strong>API Development:</strong> RESTful design & integrations</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default aboutPage