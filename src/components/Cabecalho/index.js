import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import styles from './cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

