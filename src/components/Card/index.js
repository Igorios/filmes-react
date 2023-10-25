import styles from './card.module.css';
import iconesFavoritar from './favoritar.png';


export default function Card({ id, titulo, capa}) {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={iconesFavoritar} alt='Favoritar filme' className={styles.favoritar} />
        </div>        
    )
}
