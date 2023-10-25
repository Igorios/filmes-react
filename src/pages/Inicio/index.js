import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";

import styles from './inicio.module.css'
import { useEffect, useState } from "react";

export default function Inicio() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Igorios/db-json/videos')
            .then(reposta => reposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, []);

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Esses são todos os filmes da nossa loja!!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
            {/* <Card id={1} titulo='Curso de php' capa='https://thecatapi.com/api/images/get?format-src&type=png' /> */}
        </>
    )
}
 
 