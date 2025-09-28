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
                <ProjectCard title='Smartify' github={false} linkGithub='' description='Final project for my Software Engineer degree. A web application that allows users to manage and deploy smart contracts easily. Includes features to store contract information (address, name, ABI) and interact with them through an intuitive interface without coding.' tech={['NextJS', 'Express', 'Solidity']} ></ProjectCard>
                <ProjectCard title='UnitGPT' github={true} linkGithub='https://github.com/gbaliarda/UnitGPT' description='A Retrieval-Augmented Generation (RAG) pipeline designed to automate the creation of unit tests for Solidity smart contracts using the Foundry framework. This project leverages a Large Language Model (LLM) to generate and iteratively refine unit tests, ensuring they are both compilable and executable.' tech={['Python']} ></ProjectCard>
                <ProjectCard title='Azure ETL' github={true} linkGithub='https://github.com/gbaliarda/databricks-etl' description='A project that implements an Extract, Transform, Load (ETL) pipeline in Azure by integrating multiple Azure services. The pipeline, built in Azure Data Factory, processes initial CSV files stored in Blob Storage, transforms the data using Databricks notebooks, and loads the transformed data into Azure SQL Server for further analysis and querying.' tech={['Python', 'Azure', 'ETL']} ></ProjectCard>
                <ProjectCard title='Multilayer Perceptron' github={true} linkGithub='https://github.com/gbaliarda/sia' description='A project focused on implementing both a simple and a multilayer perceptron from scratch, without using external libraries. The perceptrons were trained to learn and predict specific objectives, such as recognizing and predicting digits.' tech={['Python', 'Deep Learning']} ></ProjectCard>
                <ProjectCard title='Unsupervised Learning' github={true} linkGithub='https://github.com/gbaliarda/sia' description="A project focused on implementing unsupervised learning models from scratch, without using external libraries. It included the Hopfield network, Oja's learning rule, and Kohonen's self-organizing map, designed to explore neural networks and pattern recognition in unsupervised learning tasks." tech={['Python']} ></ProjectCard>
                <ProjectCard title='Autoencoder' github={true} linkGithub='https://github.com/gbaliarda/sia' description="A project involving the implementation of a basic autoencoder and a denoising autoencoder from scratch, without using external libraries." tech={['Python']} ></ProjectCard>
                <ProjectCard title='Skyplace' github={true} linkGithub='https://github.com/gbaliarda/skyplace' description='A marketplace for NFTs built with a single-page application (SPA) frontend using Next.js and a backend powered by Spring. Users can publish their own NFTs, leave reviews, mark favorites, explore NFTs, and purchase tokens from other users in a seamless and user-friendly platform.' tech={['NextJS', 'Spring']} ></ProjectCard>
                <ProjectCard title='Kubernetes' github={true} linkGithub='https://github.com/gbaliarda/tpe-redes-kubernetes' description='A project that involved setting up a Kubernetes cluster with multiple nodes, deploying an API on a custom port, and integrating a local database. It featured a reverse proxy through a web server, multiple API versions, and included Istio and Kiali for service management and monitoring.' tech={['Kubernetes']} ></ProjectCard>
                <ProjectCard title='EVM Compiler' github={true} linkGithub='https://github.com/gbaliarda/evm-compiler' description='A project focused on developing a new programming language designed to create smart contracts for the Ethereum Virtual Machine (EVM). This language serves as a "superset" of Solidity, inheriting its syntax while adding common functionalities and data structures not natively available in Solidity, such as native data types for tokens and NFTs.' tech={['C', 'Flex', 'Bison']} ></ProjectCard>
                <ProjectCard title='Warfactory' github={true} linkGithub='https://github.com/gbaliarda/Warfactory' description='A 2D top-down sandbox game combining factory automation and bullet-hell combat. Players build and optimize factories, craft resources, and face waves of enemies and challenging bosses, exploring persistent levels with evolving missions.' tech={['Unity', 'C#']} ></ProjectCard>
                <ProjectCard title='Runes of Destiny' github={true} linkGithub='https://github.com/gbaliarda/runes-of-destiny' description='An action RPG (ARPG) inspired by games like Diablo and Path of Exile. Players battle enemies, collect better gear, and progress their characters in a 3D world. The game emphasizes fast-paced combat, loot-driven progression, and character customization, offering an engaging experience for fans of the genre.' tech={['Unity', 'C#']} ></ProjectCard>
                {/* <ProjectCard title='Pedestrian Dynamics Model' github={true} linkGithub='https://github.com/gbaliarda/dinamica-peatonal' description='' tech={['Java', 'Python']} ></ProjectCard> */}
                <ProjectCard title='3D Train Simulation' github={true} linkGithub='https://github.com/gbaliarda/train-three-js' description='A computer graphics project built with Three.js, featuring a dynamic 3D world where a train moves through a fully interactive environment. The simulation includes realistic animations, environmental details, and showcases advanced rendering techniques.' tech={['ThreeJS']} ></ProjectCard>                
                <ProjectCard title='CryptoViper' github={true} linkGithub='https://github.com/gbaliarda/cryptoviper-webapp' description='Web3 game application where users can play and earn money, deployed in the Binance Smart Chain (Testnet).' tech={['NextJS', 'JavaScript']} ></ProjectCard>
                <ProjectCard title='Traning Webapp' github={true} linkGithub='https://github.com/gbaliarda/traning-webapp' description='Web application where users can create and share personal exercises and routines' tech={['Vue', 'JavaScript']} ></ProjectCard>
                <ProjectCard title='Traning Mobileapp' github={true} linkGithub='https://github.com/gbaliarda/traning-mobileapp' description='Mobile application where users can exercise and see their routines and personal exercises created with the webapp.' tech={['Kotlin']} ></ProjectCard>
                <ProjectCard title='64bit Shell OS' github={true} linkGithub='https://github.com/gbaliarda/64bit-shell-OS' description='Operative System based on Barebonesx64.' tech={['C', 'ASM']} ></ProjectCard>
                {/* <ProjectCard title='SATSolver' github={true} linkGithub='https://github.com/gbaliarda/ipc-SATSolver' description='Application that resolves SAT problems using IPC mecanisms.' tech={['C']} ></ProjectCard> */}
                {/* <ProjectCard title='Data extraction into DB' github={true} linkGithub='https://github.com/gbaliarda/csv-dataExtraction-toDB' description='Extract data from csv file and create a database using triggers.' tech={['PostgresSQL']} ></ProjectCard> */}
                {/* <ProjectCard title='CTF game with Sockets' github={true} linkGithub='https://github.com/gbaliarda/sockets-ctf-game' description='Server-client application where client has to solve different challenges.' tech={['C']} ></ProjectCard> */}
                {/* <ProjectCard title='CSV RealTime Data Processing' github={true} linkGithub='https://github.com/gbaliarda/csv-real-time-data-processing' description='Extract data about trees from Vancouver and Buenos Aires and process them, showing certain statistics.' tech={['C']} ></ProjectCard> */}
                {/* <ProjectCard title='Candy Crush' github={true} linkGithub='https://github.com/gbaliarda/candy-crush-java' description='Add new funcionalities to a basic and simple Candy Crush game version.' tech={['Java']} ></ProjectCard> */}
            </div>
        </div>
    )
}

export default projectsPage