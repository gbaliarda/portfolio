import styles from "./SkillBar.module.scss"
import { NextComponentType } from 'next'

interface Props {
    skillName: string
}

const skillBar: NextComponentType<Props> = ({}) => {
    return (
        <div className={styles.container}>
            <div className={styles.text}><span>{}</span></div>
            <div className={styles.progressBar}></div>
            <div className={styles.bar}></div>
        </div>
    )
}

export default skillBar