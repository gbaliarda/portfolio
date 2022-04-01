import styles from './styles/ProjectCard.module.scss'

interface Props {
    title: string,
    github: boolean,
    linkGithub: string,
    description: string,
    tech: string[],
}

const ProjectCard = (props: Props) => {

    return (
        <div className={styles.container}>
            <p className={styles.title}>{props.title}</p>
            <div className={styles.githubIcon} style={{ "visibility": props.github ? "visible" : "hidden" }}>
                <a href={props.linkGithub} target="_blank">
                    <img src="icons8-github.svg" alt="Github link"></img>
                </a>
            </div>
            <p className={styles.description}>{props.description}</p>
            <div className={styles.tech}>
                {props.tech.map((tec) => {
                    return <p>{tec}</p>
                })}
            </div>
        </div>
    )
}

export default ProjectCard;