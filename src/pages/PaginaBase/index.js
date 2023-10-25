import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

export default function PAginaBase() {
    return(
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container />
                <Outlet />
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}