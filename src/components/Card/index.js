import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './card.module.css';
import { Link } from 'react-router-dom';

import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png'

export default function Card({ id, titulo, capa }) {
    
    const { favoritos, adicionarFavorito } = useFavoritoContext();
    
    const ehFavorito = favoritos.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    
    return (
        <div className={styles.container}>

            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />

                <h2>{titulo}</h2>
            </Link>
            
            <img src={icone} 
                alt='Favoritar filme' 
                className={styles.favoritar} 
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }} 
            />
        </div>        
    )
}
