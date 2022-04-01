import type { NextPage } from 'next'
import styles from '../styles/Projects.module.scss'
import ProjectCard from '../components/projectCard'

const projectsPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.borderTop}>
                    <div className={styles.borderRed}></div>
                    <div></div>
                </div>
                <div className={styles.title}>
                    <div className={styles.name}>Projects</div>
                    <div className={styles.leftTitle}></div>
                    <div className={styles.rightTitle}></div>
                </div>
                <hr className={styles.titleLine} />
                <div className={styles.projects}>
                    <ProjectCard title='Proyecto 1' github={true} linkGithub='https://www.github.com/gbaliarda' description='lorem ipsum bvla blalb labla bllb lalb aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaa a a a aa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' tech={['TEC1', 'TEC2', 'TEC3']} ></ProjectCard>
                    <ProjectCard title='Proyecto 2' github={false} linkGithub='link' description='descripcion' tech={['abc', 'def']} ></ProjectCard>
                    <ProjectCard title='Proyecto 3' github={false} linkGithub='link' description='descripcion' tech={['abc', 'def']} ></ProjectCard>
                    <ProjectCard title='Proyecto 4' github={false} linkGithub='link' description='descripcion' tech={['abc', 'def']} ></ProjectCard>
                </div>
            </div>
        </div>
    )
}

export default projectsPage