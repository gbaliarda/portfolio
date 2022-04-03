import ReactDOM from 'react-dom';
import styles from './styles/Modal.module.scss'

interface Props {
    isShown: boolean,
    hide: () => void,
    title: string,
}

const Modal = (props: Props) => {

    const handleButton = () => {
        props.hide();
        alert("Message sent")
    }

    const closeModal = () => {
        props.hide();
    }

    const modalContent = (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <button onClick={closeModal} className={styles.close}>X</button>
                        <span className={styles.name}>{props.title}</span>
                    </div>
                    <hr className={styles.titleLine}></hr>
                    <div className={styles.description}>
                        <div className={styles.from}>
                            <span className={styles.fromTitle}>From:</span>
                            <input type="text" id="contactName" className={styles.contactName} autoComplete="off"></input>
                        </div>
                        <span className={styles.messageTitle}>Message</span>
                        <textarea id="contactInfo" className={styles.contactInfo}></textarea>
                        <button onClick={handleButton} className={styles.submitBtn}>Send</button>
                    </div>
                </div>
            </div>
            <div className={styles.overlay} onClick={closeModal}></div>
        </div>
    )

    return props.isShown ? ReactDOM.createPortal(modalContent, document.body) : null;
}

export default Modal;