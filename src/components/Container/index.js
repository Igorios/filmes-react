import styles from './container.module.css'

export default function Container({ children }) {
    return (
        <section className={styles.container}> 
            {children}
        </section>
    )
}
