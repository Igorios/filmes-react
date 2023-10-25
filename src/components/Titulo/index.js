import styles from './titulo.module.css'

export default function Titulo({ children }) {
    return (
        <div className={styles.texto}>
            {children}
        </div>
    )
}
