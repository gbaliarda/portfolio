import type { NextPage } from 'next'
import styles from '../styles/Projects.module.scss'
import ProjectCard from '../components/projectCard'

const projectsPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.borderTop}>
                <div className={styles.borderRed}></div>
            </div>
            <div className={styles.title}>
                <div className={styles.name}>Projects</div>
                <div className={styles.leftTitle}></div>
                <div className={styles.rightTitle}></div>
            </div>
            <hr className={styles.titleLine} />
            <div className={styles.projects}>
                <ProjectCard title='CryptoViper' github={true} linkGithub='https://github.com/gbaliarda/cryptoviper-webapp' description='Web3 game application where users can play and earn money, deployed in the Binance Smart Chain (Testnet).' tech={['NextJS', 'JavaScript']} ></ProjectCard>
                <ProjectCard title='Traning Webapp' github={true} linkGithub='https://github.com/gbaliarda/traning-webapp' description='Web application where users can create and share personal exercises and routines' tech={['Vue', 'JavaScript']} ></ProjectCard>
                <ProjectCard title='Traning Mobileapp' github={true} linkGithub='https://github.com/gbaliarda/traning-mobileapp' description='Mobile application where users can exercise and see their routines and personal exercises created with the webapp.' tech={['Kotlin']} ></ProjectCard>
                <ProjectCard title='64bit Shell OS' github={true} linkGithub='https://github.com/gbaliarda/64bit-shell-OS' description='Operative System based on Barebonesx64.' tech={['C', 'ASM']} ></ProjectCard>
                <ProjectCard title='SATSolver' github={true} linkGithub='https://github.com/gbaliarda/ipc-SATSolver' description='Application that resolves SAT problems using IPC mecanisms.' tech={['C']} ></ProjectCard>
                <ProjectCard title='Data extraction into DB' github={true} linkGithub='https://github.com/gbaliarda/csv-dataExtraction-toDB' description='Extract data from csv file and create a database using triggers.' tech={['PostgresSQL']} ></ProjectCard>
                <ProjectCard title='CTF game with Sockets' github={true} linkGithub='https://github.com/gbaliarda/sockets-ctf-game' description='Server-client application where client has to solve different challenges.' tech={['C']} ></ProjectCard>
                <ProjectCard title='CSV RealTime Data Processing' github={true} linkGithub='https://github.com/gbaliarda/csv-real-time-data-processing' description='Extract data about trees from Vancouver and Buenos Aires and process them, showing certain statistics.' tech={['C']} ></ProjectCard>
                <ProjectCard title='Candy Crush' github={true} linkGithub='https://github.com/gbaliarda/candy-crush-java' description='Add new funcionalities to a basic and simple Candy Crush game version.' tech={['Java']} ></ProjectCard>
            </div>
        </div>
    )
}

export default projectsPage