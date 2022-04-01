import styles from "./styles/SkillBar.module.scss"

interface Props {
    skillName: string,
    progress: number,
}

const skillBar = ({ skillName, progress }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.text}><span>{skillName}</span></div>
            <div className={styles.bar}>
                <div className={styles.progressBar} style={{ "width": progress * 2.5 }}></div>
            </div>
        </div>
    )
}

export default skillBar