import styles from "./styles/SkillBar.module.scss"
import { useEffect, useState } from "react"

interface Props {
    skillName: string,
    progress: number,
}

const skillBar = ({ skillName, progress }: Props) => {
    const [barSize, setBarSize] = useState(0)

    const updateProgress = () => {
        if (document.getElementById('skillBar') == null)
            return


        if (barSize != document.getElementById('skillBar')!!.offsetWidth)
            setBarSize(document.getElementById('skillBar')!!.offsetWidth)
    }

    useEffect(() => {
        updateProgress()
        window.addEventListener("resize", () => updateProgress(), false)

        return window.removeEventListener("resize", updateProgress)
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.text}><span>{skillName}</span></div>
            <div className={styles.bar} id="skillBar">
                <div className={styles.progressBar} style={{ "width": progress * barSize / 100 }}></div>
            </div>
        </div>
    )
}

export default skillBar