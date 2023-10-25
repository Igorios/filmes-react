import Cabecalho from "components/Cabecalho"
import Container from "components/Container"
import Rodape from "components/Rodape"
import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Cabecalho />
        <Container>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/favoritos" element={<Favoritos />}></Route>
            </Routes>
        </Container>
        <Rodape />
        </BrowserRouter>
    )    
}

