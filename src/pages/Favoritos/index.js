import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

import styles from './favoritos.module.css';

export default function Favoritos() {
    return (
       <>
        <Banner imagem='favoritos' />
        <Titulo>
            <h1>Meus favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            <Card id={1} titulo='Esse é o filme' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
        </section>
       </>
    )
}

